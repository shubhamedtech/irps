"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { ArrowRight, Instagram, ZoomIn, Search } from "lucide-react";

interface GalleryImage {
    id: string;
    url: string;
    alt: string;
    category?: string;
}

interface GalleryProps {
    images?: GalleryImage[];
}

export default function Gallery({ images = [] }: GalleryProps) {
    const [activeFilter, setActiveFilter] = useState('All');

    // Fallback images if none provided
    const displayImages = images.length > 0 ? images : [
        { id: '1', url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop', alt: 'Classroom', category: 'Campus' },
        { id: '2', url: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=1528&auto=format&fit=crop', alt: 'Students studying', category: 'Students' },
        { id: '3', url: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=1974&auto=format&fit=crop', alt: 'Library', category: 'Facilities' },
        { id: '4', url: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop', alt: 'University Building', category: 'Campus' },
        { id: '5', url: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1974&auto=format&fit=crop', alt: 'Discussion', category: 'Events' },
        { id: '6', url: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop', alt: 'Group Study', category: 'Students' }
    ];

    const categories = useMemo(() => {
        const cats = new Set(displayImages.map(img => img.category || 'General'));
        return ['All', ...Array.from(cats)];
    }, [displayImages]);

    const filteredImages = useMemo(() => {
        if (activeFilter === 'All') return displayImages;
        return displayImages.filter(img => (img.category || 'General') === activeFilter);
    }, [displayImages, activeFilter]);

    return (
        <section className="py-24 bg-gradient-to-b from-white to-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-brand-blue font-semibold tracking-wider text-sm uppercase mb-2 block">
                            Campus Life
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                            Life at IITS
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Experience the vibrant community, modern facilities, and dynamic learning environment that defines our institution.
                        </p>
                    </div>

                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-blue/30 transition-all duration-300"
                    >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center text-white">
                            <Instagram size={14} />
                        </div>
                        <span className="font-semibold text-slate-700 group-hover:text-brand-blue transition-colors">
                            Follow us on Instagram
                        </span>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                {/* Categories Filter */}
                <div className="flex overflow-x-auto pb-4 md:pb-0 md:flex-wrap gap-2 mb-10 no-scrollbar">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap ${activeFilter === cat
                                ? 'bg-brand-blue text-white shadow-lg scale-105'
                                : 'bg-white text-slate-600 border border-slate-200 hover:border-brand-blue/30 hover:bg-slate-50'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                    {filteredImages.map((image, i) => (
                        <div
                            key={image.id}
                            className={`group relative overflow-hidden rounded-2xl cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 ${(activeFilter === 'All' && (i === 0 || i === 3)) ? 'md:col-span-2' : ''
                                }`}
                        >
                            <Image
                                src={image.url}
                                alt={image.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 w-full">
                                <div className="flex justify-between items-end">
                                    <div>
                                        {image.category && (
                                            <span className="text-xs font-bold text-white/90 bg-brand-blue/90 px-3 py-1 rounded-full mb-2 inline-block backdrop-blur-md">
                                                {image.category}
                                            </span>
                                        )}
                                        <h3 className="text-white text-xl font-bold mt-2">{image.alt}</h3>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                        <ZoomIn size={20} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

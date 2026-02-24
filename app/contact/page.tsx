import { Mail, Phone, MapPin } from "lucide-react";
import { getSiteData } from "@/lib/data";
import ContactForm from "./ContactForm";

export default async function ContactPage() {
    const data = await getSiteData();
    const contact = data.contact || {
        phone: '',
        email: '',
        address: ''
    };

    return (
        <div className="pt-20 pb-16">
            {/* Hero Section - Clean & Professional */}
            <section className="relative py-20 bg-[#FFF8F0] border-b border-brand-blue/10 mb-16">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl">
                        <p className="text-brand-blue font-semibold tracking-wider uppercase mb-3 text-sm">Contact</p>
                        <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6 tracking-tight">
                            Get In Touch
                        </h1>
                        <p className="text-brand-grey text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                            Have questions? We&apos;re here to help!
                        </p>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold text-brand-blue mb-6">Contact Information</h3>
                        <p className="text-slate-600 mb-8">
                            Have questions about our courses or services? Reach out to us and our team will assist you.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl">
                                <div className="bg-slate-200 p-3 rounded-full text-brand-blue">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900">Our Location</h3>
                                    <p className="text-slate-600 mt-1">{contact.address}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl">
                                <div className="bg-slate-200 p-3 rounded-full text-brand-blue">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900">Phone Number</h3>
                                    <p className="text-slate-600 mt-1">{contact.phone}</p>
                                    <p className="text-slate-600 text-sm">Mon-Sat, 9am - 6pm</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl">
                                <div className="bg-slate-200 p-3 rounded-full text-brand-blue">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900">Email Address</h3>
                                    <p className="text-slate-600 mt-1">{contact.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}

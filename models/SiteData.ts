import { Schema, Document, model, models } from 'mongoose';

export interface ISiteData extends Document {
    images: {
        hero: { url: string; alt: string };
        about: { url: string; alt: string };
        directors: {
            dr_abdul_aslam: string;
            dr_basil_thomas: string;
            adv_shoukath_ali: string;
            mr_sumith_vijayan: string;
        };
    };
    universities: {
        id: string;
        name: string;
        logo?: string;
    }[];
    gallery: {
        id: string;
        url: string;
        alt: string;
        category?: string;
    }[];
    seo: {
        title: string;
        description: string;
        keywords: string;
        ogImage: string;
    };
    contact: {
        phone: string;
        email: string;
        address: string;
        socials: {
            facebook?: string;
            twitter?: string;
            instagram?: string;
            linkedin?: string;
        };
    };
    stats: {
        yearsOfExperience: string;
        studentsCount: string;
        partnersCount: string;
        satisfactionRate: string;
    };
}

const SiteDataSchema = new Schema<ISiteData>({
    images: {
        hero: {
            url: { type: String, default: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop' },
            alt: { type: String, default: 'IITS Hero Image' }
        },
        about: {
            url: { type: String, default: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop' },
            alt: { type: String, default: 'About IITS' }
        },
        directors: {
            dr_abdul_aslam: { type: String, default: '' },
            dr_basil_thomas: { type: String, default: '' },
            adv_shoukath_ali: { type: String, default: '' },
            mr_sumith_vijayan: { type: String, default: '' },
        }
    },
    universities: [{
        id: { type: String, required: true },
        name: { type: String, required: true },
        logo: String
    }],
    gallery: {
        type: [{
            id: { type: String, required: true },
            url: { type: String, required: true },
            alt: { type: String, default: '' },
            category: String
        }],
        default: [
            { id: '1', url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop', alt: 'Classroom', category: 'Campus' },
            { id: '2', url: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=1528&auto=format&fit=crop', alt: 'Students studying', category: 'Students' },
            { id: '3', url: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=1974&auto=format&fit=crop', alt: 'Library', category: 'Facilities' },
            { id: '4', url: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop', alt: 'University Building', category: 'Campus' },
            { id: '5', url: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1974&auto=format&fit=crop', alt: 'Discussion', category: 'Events' },
            { id: '6', url: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop', alt: 'Group Study', category: 'Students' }
        ]
    },
    seo: {
        title: { type: String, default: 'IITS Research & Policy Studies' },
        description: { type: String, default: 'A legacy of excellence in education, training, and career development.' },
        keywords: { type: String, default: 'education, research, policy, training' },
        ogImage: { type: String, default: '' }
    },
    contact: {
        phone: { type: String, default: '+91 98765 43210' },
        email: { type: String, default: 'info@iitseducation.org' },
        address: { type: String, default: '123 Education Lane, Knowledge City, Delhi, India' },
        socials: {
            facebook: { type: String, default: '' },
            twitter: { type: String, default: '' },
            instagram: { type: String, default: '' },
            linkedin: { type: String, default: '' }
        }
    },
    stats: {
        yearsOfExperience: { type: String, default: '15+' },
        studentsCount: { type: String, default: '50K+' },
        partnersCount: { type: String, default: '800+' },
        satisfactionRate: { type: String, default: '100%' }
    }
}, { timestamps: true });

// Prevent recompilation of model in dev mode
const SiteDataModel = models.SiteData || model<ISiteData>('SiteData', SiteDataSchema);

export default SiteDataModel;

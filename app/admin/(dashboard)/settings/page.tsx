import { getSiteData } from '@/lib/data';
import { updateSettingsAction } from '@/lib/actions';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Save, BarChart } from 'lucide-react';

export default async function SettingsPage() {
    const data = await getSiteData();
    const contact = data.contact || {
        phone: '',
        email: '',
        address: '',
        socials: {
            facebook: '',
            twitter: '',
            instagram: '',
            linkedin: ''
        }
    };

    const stats = data.stats || {
        yearsOfExperience: '15+',
        studentsCount: '50K+',
        partnersCount: '800+',
        satisfactionRate: '100%'
    };

    return (
        <div className="max-w-4xl">
            <h1 className="text-3xl font-bold text-slate-900 mb-8">Site Settings</h1>

            <form action={updateSettingsAction} className="space-y-8">
                {/* Contact Information */}
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-200">
                    <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <Phone className="text-brand-blue" size={20} />
                        Contact Information
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                            <input
                                type="text"
                                name="phone"
                                defaultValue={contact.phone}
                                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                defaultValue={contact.email}
                                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-slate-700 mb-1">Office Address</label>
                            <textarea
                                name="address"
                                defaultValue={contact.address}
                                rows={3}
                                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Marketing Statistics */}
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-200">
                    <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <BarChart className="text-brand-blue" size={20} />
                        Marketing Statistics
                    </h2>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Years of Experience</label>
                            <input
                                type="text"
                                name="yearsOfExperience"
                                defaultValue={stats.yearsOfExperience}
                                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
                                placeholder="15+"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Students Count</label>
                            <input
                                type="text"
                                name="studentsCount"
                                defaultValue={stats.studentsCount}
                                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
                                placeholder="50K+"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Partners Count</label>
                            <input
                                type="text"
                                name="partnersCount"
                                defaultValue={stats.partnersCount}
                                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
                                placeholder="800+"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Satisfaction Rate</label>
                            <input
                                type="text"
                                name="satisfactionRate"
                                defaultValue={stats.satisfactionRate}
                                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
                                placeholder="100%"
                            />
                        </div>
                    </div>
                </div>

                {/* Social Links */}
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-200">
                    <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <Facebook className="text-brand-blue" size={20} />
                        Social Media Links
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div>
                                <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-1">
                                    <Facebook size={16} /> Facebook
                                </label>
                                <input
                                    type="url"
                                    name="facebook"
                                    defaultValue={contact.socials?.facebook}
                                    placeholder="https://facebook.com/..."
                                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                            </div>
                            <div>
                                <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-1">
                                    <Twitter size={16} /> Twitter / X
                                </label>
                                <input
                                    type="url"
                                    name="twitter"
                                    defaultValue={contact.socials?.twitter}
                                    placeholder="https://twitter.com/..."
                                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-1">
                                    <Instagram size={16} /> Instagram
                                </label>
                                <input
                                    type="url"
                                    name="instagram"
                                    defaultValue={contact.socials?.instagram}
                                    placeholder="https://instagram.com/..."
                                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                            </div>
                            <div>
                                <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-1">
                                    <Linkedin size={16} /> LinkedIn
                                </label>
                                <input
                                    type="url"
                                    name="linkedin"
                                    defaultValue={contact.socials?.linkedin}
                                    placeholder="https://linkedin.com/..."
                                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-brand-blue text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-900 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl active:scale-95"
                    >
                        <Save size={20} />
                        Save All Settings
                    </button>
                </div>
            </form>
        </div>
    );
}

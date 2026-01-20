import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-[#18120c] text-white pt-20 pb-10 border-t border-white/5 font-display">
            <div className="mx-auto max-w-7xl px-4 md:px-10 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-white mb-2">RAJA DEREK</h2>
                            <p className="text-gray-400 text-base leading-relaxed max-w-xs">
                                Premium Towing Solutions. Trusted with your most valuable assets. Available 24/7 for emergency and scheduled transport.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            {['share', 'photo_camera', 'play_circle'].map((icon) => (
                                <a
                                    key={icon}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary hover:text-white flex items-center justify-center transition-colors text-gray-400"
                                >
                                    <span className="material-symbols-outlined text-xl">{icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="lg:col-span-2 lg:col-start-6 flex flex-col gap-4">
                        <h4 className="text-lg font-bold text-white mb-2">Company</h4>
                        {['Home', 'About Us', 'Services', 'Portfolio', 'Reviews'].map((item) => (
                            <a key={item} href="#" className="text-gray-400 hover:text-primary transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Services Links */}
                    <div className="lg:col-span-2 flex flex-col gap-4">
                        <h4 className="text-lg font-bold text-white mb-2">Services</h4>
                        {['Emergency Towing', 'Luxury Transport', 'Motorcycle Rescue', 'Flatbed Service', 'Inter-city Delivery'].map((item) => (
                            <a key={item} href="#" className="text-gray-400 hover:text-primary transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-3 flex flex-col gap-6">
                        <h4 className="text-lg font-bold text-white mb-2">Contact Us</h4>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary mt-1">location_on</span>
                                <span className="text-gray-400">Jl. Jendral Sudirman No. Kav 52-53, SCBD, Jakarta Selatan, 12190</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">mail</span>
                                <a href="mailto:help@rajaderek.com" className="text-gray-400 hover:text-white transition-colors">
                                    help@rajaderek.com
                                </a>
                            </div>
                            <div className="mt-2">
                                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-bold">Emergency Hotline</p>
                                <a href="tel:+6281234567890" className="flex items-center gap-3 text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
                                    <span className="material-symbols-outlined text-3xl">phone_in_talk</span>
                                    +62 812 3456 7890
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500">© 2024 RAJA DEREK. All rights reserved.</p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item) => (
                            <a key={item} href="#" className="hover:text-white transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
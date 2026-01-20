import React from 'react';
import { BadgeCheck, Timer, Shield, ArrowRight, MapPin } from 'lucide-react'; // Fallback icons

export default function About() {
    const features = [
        {
            icon: <BadgeCheck className="h-6 w-6 text-primary" />,
            title: 'Verified Professionals',
            desc: 'Certified operators for all vehicle types.'
        },
        {
            icon: <Timer className="h-6 w-6 text-primary" />,
            title: 'Rapid Response',
            desc: 'Average arrival time of 15 minutes.'
        },
        {
            icon: <Shield className="h-6 w-6 text-primary" />,
            title: 'Full Insurance',
            desc: 'Comprehensive coverage during transport.'
        }
    ];

    return (
        <section className="relative bg-background-light dark:bg-background-dark py-24 px-6 md:px-10 lg:px-40 overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

            <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative z-10">
                {/* Sidebar Label */}
                <div className="lg:col-span-3 h-full">
                    <div className="sticky top-32 flex items-center gap-3">
                        <span className="text-primary font-bold text-lg font-mono">02.</span>
                        <span className="h-[1px] w-8 bg-primary/50"></span>
                        <h3 className="text-slate-500 dark:text-slate-400 font-bold tracking-widest text-xs uppercase">Tentang Kami</h3>
                    </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-9 flex flex-col gap-10">
                    {/* Headline */}
                    <div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-[1.1] mb-6 tracking-tight font-display">
                            Mitra Terpercaya di <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">Jalan Raya</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-medium max-w-3xl leading-relaxed">
                            <span className="text-primary font-bold">PT Lintas Cakra Cipta</span> redefining roadside assistance with premium fleet technology and professional handling.
                        </p>
                    </div>

                    <div className="h-[1px] w-full bg-slate-200 dark:bg-white/10"></div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Text & List */}
                        <div className="space-y-6">
                            <p className="text-base text-slate-600 dark:text-slate-400 leading-loose">
                                From luxury cars to heavy machinery, Raja Derek ensures safety and precision in every kilometer. We combine decades of logistical expertise with a modern fleet designed to handle any situation, ensuring your vehicle arrives without a scratch.
                            </p>
                            <ul className="space-y-4 mt-8">
                                {features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-4 text-slate-800 dark:text-slate-200 group">
                                        <div className="p-1 rounded bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                            {feature.icon}
                                        </div>
                                        <div className="font-display">
                                            <span className="block font-bold text-sm">{feature.title}</span>
                                            <span className="text-sm text-slate-500 dark:text-slate-500">{feature.desc}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Feature Card */}
                        <div className="flex flex-col gap-6">
                            <div className="bg-white dark:bg-white/5 p-8 rounded-2xl border border-slate-200 dark:border-white/5 flex flex-col justify-center items-start gap-4 hover:border-primary/30 transition-all duration-300 shadow-xl shadow-black/5 dark:shadow-none">
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-2">
                                    <span className="material-symbols-outlined text-2xl">support_agent</span>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 font-display">24/7 Command Center</h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                        Our centralized command center tracks every unit in real-time, ensuring efficient dispatching and constant communication during emergencies.
                                    </p>
                                </div>
                                <a href="#" className="mt-4 text-sm font-bold text-primary flex items-center gap-2 group">
                                    Hubungi Dispatcher <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* CTA Actions */}
                    <div className="pt-8 flex flex-wrap gap-4">
                        <button className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-transparent border-2 border-slate-300 dark:border-white/20 text-slate-900 dark:text-white font-bold hover:bg-primary hover:border-primary hover:text-[#181411] transition-all duration-300">
                            Pelajari Lebih Lanjut
                        </button>
                        <button className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary text-[#181411] font-bold hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(242,127,13,0.3)] hover:shadow-[0_0_30px_rgba(242,127,13,0.5)]">
                            Download Profil Perusahaan (PDF)
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

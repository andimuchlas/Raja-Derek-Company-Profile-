import React from 'react';
import { Phone, ArrowRight, MessageCircle, ChevronDown } from 'lucide-react'; // Fallback icons or use Material Symbols if preferred

export default function Hero() {
    return (
        <section className="relative flex min-h-screen w-full items-end justify-center overflow-hidden pt-20">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-background-dark z-10"></div>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover transition-transform duration-[20s] hover:scale-105"
                >
                    <source src="/video/video_hero.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Content */}
            <div className="relative z-20 mx-auto flex h-full max-w-7xl flex-col items-center justify-end px-4 text-center sm:px-6 lg:px-8 pb-12">
                <h1 className="mb-6 max-w-5xl font-sans text-4xl font-normal leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
                    Premium Vehicle Transport & <br />
                    <span className="text-white/60">Emergency Roadside Assistance.</span>
                </h1>

                <p className="max-w-xl text-base text-white/50 sm:text-lg font-light tracking-wide">
                    Professional handling for your most valuable assets. Available 24/7 across Indonesia.
                </p>
            </div>
        </section>
    );
}

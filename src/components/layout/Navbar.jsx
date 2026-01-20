import React, { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';
import { Menu, Phone, ShoppingCart } from 'lucide-react'; // Using lucide-react as planned fallback or standard

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Beranda', href: '#home' },
        { name: 'Layanan', href: '#services' },
        { name: 'Tentang', href: '#about' },
        { name: 'Portofolio', href: '#portfolio' },
        { name: 'Kontak', href: '#contact' },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300",
                isScrolled
                    ? "bg-black/10 backdrop-blur-[2px] py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="mx-auto flex w-full items-center justify-between px-6 md:px-12 lg:px-16 transition-all duration-300">
                {/* Logo */}
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <a href="#" className="flex items-center gap-2 group">
                        <img
                            src="/image/logo.png"
                            alt="Raja Derek Logo"
                            className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                    </a>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-[13px] font-medium tracking-wide uppercase transition-colors duration-300",
                                "text-white/70 hover:text-white"
                            )}
                        >
                            {link.name}
                        </a>
                    ))}

                    {/* CTA Button */}
                    <a href="#contact" className="rounded-[4px] bg-[#DFF2F3] px-5 py-2 text-[13px] font-medium text-black transition-all hover:bg-black hover:text-white border-none cursor-pointer">
                        <span>Contact us</span>
                    </a>
                </div>

                {/* Mobile Menu Icon */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-white hover:bg-white/10 md:hidden"
                >
                    <Menu className="h-6 w-6" />
                </button>
            </div>

            {/* Mobile Menu */}
            {
                isMobileMenuOpen && (
                    <div className="md:hidden bg-background-dark/95 backdrop-blur-md border-b border-white/10">
                        <div className="space-y-1 px-4 pb-4 pt-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-primary"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button className="mt-4 w-full flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-background-dark">
                                <span className="material-symbols-outlined text-[20px]">call</span>
                                <span>Hubungi Sekarang</span>
                            </button>
                        </div>
                    </div>
                )
            }
        </nav >
    );
}

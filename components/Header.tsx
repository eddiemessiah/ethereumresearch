'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed top-0 w-full z-50 border-b border-black/5 glass-nav">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3">
                    {/* Ethereum Diamond Logo */}
                    <div className="text-[#13ec5b]">
                        <svg className="w-8 h-8" viewBox="0 0 256 417" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                            <path fill="currentColor" d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z" />
                            <path fill="currentColor" opacity="0.8" d="M127.962 0L0 212.32l127.962 75.639V154.158z" />
                            <path fill="currentColor" d="M127.961 312.187l-1.575 1.92v98.199l1.575 4.6L256 236.587z" />
                            <path fill="currentColor" opacity="0.8" d="M127.962 416.905v-104.72L0 236.585z" />
                            <path fill="currentColor" d="M127.961 287.958l127.96-75.637-127.96-58.162z" />
                            <path fill="currentColor" opacity="0.6" d="M0 212.32l127.96 75.638v-133.8z" />
                        </svg>
                    </div>
                    <h2 className="text-xl font-bold tracking-tight text-[#0a0a0c]">ETH Research Village</h2>
                </Link>

                <nav className="hidden md:flex items-center gap-10">
                    <Link href="/about" className="text-sm font-medium text-slate-700 hover:text-[#13ec5b] transition-colors">About</Link>
                    <Link href="/schedule" className="text-sm font-medium text-slate-700 hover:text-[#13ec5b] transition-colors">Schedule</Link>
                    <Link href="/labs" className="text-sm font-medium text-slate-700 hover:text-[#13ec5b] transition-colors">Labs</Link>
                    <Link href="/speakers" className="text-sm font-medium text-slate-700 hover:text-[#13ec5b] transition-colors">Speakers</Link>
                    <Link
                        href="/#register"
                        className="bg-[#13ec5b] text-[#0a0a0c] px-6 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 transition-all"
                    >
                        Register Now
                    </Link>
                </nav>

                {/* Mobile menu button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden text-slate-900 p-2"
                >
                    {isMobileMenuOpen ? (
                        <span className="material-symbols-outlined">close</span>
                    ) : (
                        <span className="material-symbols-outlined">menu</span>
                    )}
                </button>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0c]/95 backdrop-blur-xl border-b border-white/10">
                    <div className="px-6 py-8 space-y-6">
                        <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-white hover:text-[#13ec5b] transition-colors">About</Link>
                        <Link href="/schedule" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-white hover:text-[#13ec5b] transition-colors">Schedule</Link>
                        <Link href="/labs" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-white hover:text-[#13ec5b] transition-colors">Labs</Link>
                        <Link href="/speakers" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-white hover:text-[#13ec5b] transition-colors">Speakers</Link>
                        <Link
                            href="/#register"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block w-full text-center bg-[#13ec5b] text-[#0a0a0c] py-4 rounded-xl font-bold"
                        >
                            Register Now
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;

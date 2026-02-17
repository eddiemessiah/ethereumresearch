import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white dark:bg-[#0a0a0c] pt-20 pb-10 border-t border-black/5 dark:border-white/10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="text-[#13ec5b]">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z" fill="currentColor"></path>
                                </svg>
                            </div>
                            <h2 className="text-xl font-bold tracking-tight text-[#0a0a0c] dark:text-white">ETH Research Village</h2>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
                            A collaborative initiative to scale Ethereum&apos;s Infinite Garden across Africa through high-intensity residency and research.
                        </p>
                    </div>

                    <div>
                        <h5 className="text-[#0a0a0c] dark:text-white font-bold mb-6">Explore</h5>
                        <ul className="space-y-4 text-slate-600 dark:text-slate-400 text-sm">
                            <li><a className="hover:text-[#13ec5b] transition-colors" href="#">Lab Reports</a></li>
                            <li><a className="hover:text-[#13ec5b] transition-colors" href="#">Mentorship</a></li>
                            <li><a className="hover:text-[#13ec5b] transition-colors" href="#">Open Source Hub</a></li>
                            <li><a className="hover:text-[#13ec5b] transition-colors" href="#">Grant Programs</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-[#0a0a0c] dark:text-white font-bold mb-6">Partners</h5>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                                <span className="text-[#0a0a0c] dark:text-white font-bold italic tracking-tighter">Web3Bridge</span>
                            </div>
                            <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                                <span className="text-[#0a0a0c] dark:text-white font-bold italic tracking-tighter">Upskill Africa</span>
                            </div>
                            <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                                <span className="text-[#0a0a0c] dark:text-white font-bold italic tracking-tighter">Lagos Eth Hub</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
                    <p className="text-slate-600 dark:text-slate-400 text-xs">© 2026 ETH Research Guild. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a className="text-slate-500 dark:text-slate-400 hover:text-[#13ec5b] transition-colors" href="#">
                            <span className="material-symbols-outlined">public</span>
                        </a>
                        <a className="text-slate-500 dark:text-slate-400 hover:text-[#13ec5b] transition-colors" href="#">
                            <span className="material-symbols-outlined">hub</span>
                        </a>
                        <a className="text-slate-500 dark:text-slate-400 hover:text-[#13ec5b] transition-colors" href="#">
                            <span className="material-symbols-outlined">share</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
    return (
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
            <div className="absolute inset-0 z-0 infinite-garden-gradient opacity-90"></div>

            {/* Decorative motifs */}
            <div className="absolute top-40 right-10 w-96 h-96 bg-[#13ec5b]/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#1a0b2e]/20 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <div className="flex flex-col gap-8">
                    <div className="inline-flex items-center gap-2 bg-[#13ec5b]/10 border border-[#13ec5b]/20 px-4 py-1.5 rounded-full w-fit">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#13ec5b] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#13ec5b]"></span>
                        </span>
                        <span className="text-[#13ec5b] text-xs font-bold uppercase tracking-widest">Lagos, Nigeria 2026</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white">
                        Scaling the <span className="text-[#13ec5b]">Infinite Garden</span> in Africa
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-200 max-w-lg leading-relaxed">
                        A 2-week Ethereum research pop-up city. Bridging the gap from consumers to core protocol contributors at Africa&apos;s first dedicated Ethereum hub.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="#register"
                            className="bg-[#13ec5b] text-[#0a0a0c] px-8 py-4 rounded-lg font-bold text-base hover:shadow-[0_0_20px_rgba(19,236,91,0.4)] transition-all"
                        >
                            Join the Village
                        </Link>
                        <Link
                            href="#schedule"
                            className="bg-white/90 dark:bg-black/90 border border-emerald-200 dark:border-emerald-900 text-slate-900 dark:text-white px-8 py-4 rounded-lg font-bold text-base hover:bg-white dark:hover:bg-black transition-all"
                        >
                            View Schedule
                        </Link>
                    </div>
                </div>

                <div className="relative">
                    <div className="aspect-square rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl relative group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-[#13ec5b]/20 z-10"></div>
                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: "url('/hero-image.png')" }}
                        ></div>
                        <div className="absolute bottom-6 left-6 z-20">
                            <div className="p-4 bg-white/90 dark:bg-black/90 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-xl shadow-lg">
                                <p className="text-xs text-[#13ec5b] font-bold uppercase mb-1">Pop-up City</p>
                                <p className="text-slate-900 dark:text-white font-medium">Lagos Ethereum Community Hub</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

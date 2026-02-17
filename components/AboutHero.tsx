import React from 'react';

const AboutHero: React.FC = () => {
    return (
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
            <div className="absolute inset-0 z-0 infinite-garden-gradient opacity-30"></div>

            <div className="max-w-7xl mx-auto relative z-10 text-center">
                <div className="inline-flex items-center gap-2 bg-[#13ec5b]/10 border border-[#13ec5b]/20 px-4 py-1.5 rounded-full mb-8">
                    <span className="text-[#13ec5b] text-xs font-bold uppercase tracking-widest">About the Village</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white mb-8">
                    A Sanctuary for <span className="text-[#13ec5b]">Ethereum Research</span>
                </h1>

                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                    ETH Research Village is Africa's first dedicated pop-up city for core protocol research.
                    We are building a bridge between global Ethereum innovation and local African talent.
                </p>
            </div>
        </section>
    );
};

export default AboutHero;

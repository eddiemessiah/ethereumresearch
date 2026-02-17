import React from 'react';

const VisionSection: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-white/[0.02]">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <div>
                        <h2 className="text-[#13ec5b] text-sm font-bold uppercase tracking-widest mb-4">The Vision</h2>
                        <h3 className="text-4xl font-black text-slate-900 dark:text-white">Beyond the Consumer Horizon</h3>
                    </div>

                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                        For too long, Africa has been seen primarily as a consumer of finished technology.
                        The ETH Research Village aims to flip this script. We believe that the unique challenges
                        faced by African developers—from high data costs to financial fragmentation—provide
                        the perfect proving ground for next-generation protocol features.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-8">
                        <div className="space-y-3">
                            <div className="w-10 h-10 rounded-lg bg-[#13ec5b]/10 flex items-center justify-center text-[#13ec5b]">
                                <span className="material-symbols-outlined">psychology</span>
                            </div>
                            <h4 className="text-slate-900 dark:text-white font-bold">Deep Research</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Moving past the 48-hour hackathon model into month-long deep dives into EIPs and protocol design.</p>
                        </div>
                        <div className="space-y-3">
                            <div className="w-10 h-10 rounded-lg bg-[#13ec5b]/10 flex items-center justify-center text-[#13ec5b]">
                                <span className="material-symbols-outlined">diversity_3</span>
                            </div>
                            <h4 className="text-slate-900 dark:text-white font-bold">Global Connection</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Direct mentorship from the Ethereum Foundation and core teams from across the Superchain.</p>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                        <img
                            src="/research-environment.png"
                            alt="Research Environment"
                            className="w-full h-full object-cover grayscale opacity-70"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent"></div>
                        <div className="absolute bottom-10 left-10 right-10 p-8 rounded-2xl bg-white dark:bg-[#1a1a1a] border border-black/5 dark:border-white/10 shadow-xl">
                            <p className="text-slate-900 dark:text-white font-bold text-xl mb-2">"Scaling the protocol means scaling the people."</p>
                            <p className="text-[#13ec5b] text-sm font-medium">— Village Manifesto</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisionSection;

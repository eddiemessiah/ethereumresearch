import React from 'react';

const WhyLagosSection: React.FC = () => {
    return (
        <section className="py-24 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-[#13ec5b] text-sm font-bold uppercase tracking-widest mb-4">The Location</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">Why Lagos, Nigeria?</h3>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    <div className="space-y-4">
                        <h4 className="text-2xl font-bold text-slate-900 dark:text-white">01. High Adoption</h4>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            Nigeria consistently ranks as one of the top countries globally for grassroots crypto adoption.
                            Blockchain here isn't a luxury; it's a utility for survival and growth.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-2xl font-bold text-slate-900 dark:text-white">02. Tech Hub</h4>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            Lagos is the heartbeat of African fintech, boasting one of the highest concentrations
                            of software developers on the continent. The energy is unmatched.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-2xl font-bold text-slate-900 dark:text-white">03. Practical Challenges</h4>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            The real-world constraints of the Nigerian economy provide the ultimate
                            "stress test" for decentralized systems, ensuring they are truly robust and user-friendly.
                        </p>
                    </div>
                </div>

                <div className="mt-20 aspect-[21/9] rounded-[3rem] overflow-hidden border border-white/10 relative group">
                    <img
                        src="/lagos-skyline.png"
                        alt="Lagos Skyline"
                        className="w-full h-full object-cover grayscale opacity-50 group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent"></div>
                    <div className="absolute bottom-12 left-12">
                        <div className="flex items-center gap-4 bg-white dark:bg-[#1a1a1a] border border-black/5 dark:border-white/10 shadow-lg px-6 py-3 rounded-2xl">
                            <span className="material-symbols-outlined text-[#13ec5b]">location_on</span>
                            <span className="text-slate-900 dark:text-white font-bold">Lagos Metropolis, Nigeria</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyLagosSection;

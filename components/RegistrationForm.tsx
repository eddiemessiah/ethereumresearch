'use client';

import React, { useState } from 'react';

const RegistrationForm: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <section className="py-24 px-6 relative overflow-hidden" id="register">
            <div className="absolute inset-0 bg-[#13ec5b]/5 opacity-30"></div>

            <div className="max-w-3xl mx-auto relative z-10">
                <div className="bg-white dark:bg-[#1a1a1a] border border-black/5 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">Apply for Residency</h2>
                        <p className="text-slate-600 dark:text-slate-300">Join a collective of pioneers in Lagos. Limited spots available for the 2026 cohort.</p>
                    </div>

                    {submitted ? (
                        <div className="text-center py-12">
                            <div className="w-20 h-20 bg-[#13ec5b]/20 text-[#13ec5b] rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="material-symbols-outlined text-4xl">check_circle</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Application Received!</h3>
                            <p className="text-slate-400">We&apos;ll review your application and get back to you shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 px-1">Full Name</label>
                                    <input
                                        className="w-full bg-white dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-xl px-4 py-4 text-slate-900 dark:text-white focus:ring-[#13ec5b] focus:border-[#13ec5b] transition-all placeholder:text-slate-400"
                                        placeholder="Vitalik Buterin"
                                        type="text"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 px-1">Email Address</label>
                                    <input
                                        className="w-full bg-white dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-xl px-4 py-4 text-slate-900 dark:text-white focus:ring-[#13ec5b] focus:border-[#13ec5b] transition-all placeholder:text-slate-400"
                                        placeholder="hello@world.com"
                                        type="email"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 px-1">Primary Role</label>
                                    <select className="w-full bg-white dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-xl px-4 py-4 text-slate-900 dark:text-white focus:ring-[#13ec5b] focus:border-[#13ec5b] transition-all appearance-none">
                                        <option className="bg-white dark:bg-[#1a1a1a]">Protocol Researcher</option>
                                        <option className="bg-white dark:bg-[#1a1a1a]">Smart Contract Dev</option>
                                        <option className="bg-white dark:bg-[#1a1a1a]">Applied Cryptographer</option>
                                        <option className="bg-white dark:bg-[#1a1a1a]">Community Orchestrator</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 px-1">Participation</label>
                                    <select className="w-full bg-white dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-xl px-4 py-4 text-slate-900 dark:text-white focus:ring-[#13ec5b] focus:border-[#13ec5b] transition-all appearance-none">
                                        <option className="bg-white dark:bg-[#1a1a1a]">Full Residency (2 weeks)</option>
                                        <option className="bg-white dark:bg-[#1a1a1a]">Workshop Track (1 week)</option>
                                        <option className="bg-white dark:bg-[#1a1a1a]">Speaker / Mentor</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 px-1">Github / Portfolio URL</label>
                                <input
                                    className="w-full bg-white dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-xl px-4 py-4 text-slate-900 dark:text-white focus:ring-[#13ec5b] focus:border-[#13ec5b] transition-all placeholder:text-slate-400"
                                    placeholder="https://github.com/..."
                                    type="url"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 px-1">What are you looking to contribute?</label>
                                <textarea
                                    className="w-full bg-white dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-xl px-4 py-4 text-slate-900 dark:text-white focus:ring-[#13ec5b] focus:border-[#13ec5b] transition-all resize-none placeholder:text-slate-400"
                                    placeholder="Briefly describe your research interests or project ideas..."
                                    rows={4}
                                    required
                                ></textarea>
                            </div>

                            <button
                                className="w-full bg-[#13ec5b] text-[#0a0a0c] py-5 rounded-xl font-black text-lg hover:opacity-90 hover:scale-[1.01] transition-all mt-4"
                                type="submit"
                            >
                                Submit Application
                            </button>

                            <p className="text-center text-[10px] text-slate-600 uppercase tracking-tighter">
                                By submitting, you agree to the village code of conduct.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default RegistrationForm;

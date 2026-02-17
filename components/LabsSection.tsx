import React from 'react';

const LabsSection: React.FC = () => {
    return (
        <section className="py-24 px-6" id="labs">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1 bg-[#13ec5b]/10 text-[#13ec5b] rounded-full text-sm font-bold mb-4">
                        5 Specialized Tracks
                    </span>
                    <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">Research Labs</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        Choose your path. Each lab focuses on cutting-edge Ethereum research with hands-on projects.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {/* Agentic Economy */}
                    <div className="group p-8 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 hover:border-purple-500/50 transition-all hover:shadow-lg">
                        <div className="mb-6 h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-purple-500 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-3xl">smart_toy</span>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Agentic Economy</h4>
                        <p className="text-[#13ec5b] text-xs font-bold uppercase tracking-wider mb-3">AI + Crypto</p>
                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">ERC-8004, x402, and AI agents that can pay for things autonomously.</p>
                    </div>

                    {/* Privacy & Data */}
                    <div className="group p-8 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 hover:border-emerald-500/50 transition-all hover:shadow-lg">
                        <div className="mb-6 h-12 w-12 rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-3xl">shield_lock</span>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Privacy & Data</h4>
                        <p className="text-[#13ec5b] text-xs font-bold uppercase tracking-wider mb-3">ZK Proofs</p>
                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">Zero-knowledge circuits, private payroll, and on-chain data oracles.</p>
                    </div>

                    {/* Decentralized Luma */}
                    <div className="group p-8 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 hover:border-orange-500/50 transition-all hover:shadow-lg">
                        <div className="mb-6 h-12 w-12 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-3xl">hub</span>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Decentralized Luma</h4>
                        <p className="text-[#13ec5b] text-xs font-bold uppercase tracking-wider mb-3">Core Build</p>
                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">Building our own event platform with SIWE, NFT tickets, and ZK-Email.</p>
                    </div>

                    {/* Open Source */}
                    <div className="group p-8 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 hover:border-cyan-500/50 transition-all hover:shadow-lg">
                        <div className="mb-6 h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-cyan-500 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-3xl">terminal</span>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Open Source</h4>
                        <p className="text-[#13ec5b] text-xs font-bold uppercase tracking-wider mb-3">Public Goods</p>
                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">Drips Protocol, sustainable funding, and contributing to core repos.</p>
                    </div>

                    {/* Financial Inclusion */}
                    <div className="group p-8 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 hover:border-yellow-500/50 transition-all hover:shadow-lg">
                        <div className="mb-6 h-12 w-12 rounded-lg bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center text-yellow-600 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-3xl">currency_exchange</span>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Financial Inclusion</h4>
                        <p className="text-[#13ec5b] text-xs font-bold uppercase tracking-wider mb-3">Stablecoins & BTCfi</p>
                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">MiniApps, Telegram wallets, and Bitcoin DeFi for emerging markets.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LabsSection;


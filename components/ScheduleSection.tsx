'use client';

import React, { useState } from 'react';

const ScheduleSection: React.FC = () => {
    const [activeWeek, setActiveWeek] = useState(1);

    return (
        <section className="py-24 bg-white/[0.01]" id="schedule">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl font-black text-slate-900 mb-4">14-Day Deep Dive</h2>
                        <p className="text-slate-600">Two weeks of intense collaboration, learning, and building in the heart of Lagos.</p>
                    </div>
                    <div className="flex gap-4 overflow-x-auto pb-2">
                        <span className="flex items-center gap-2 whitespace-nowrap bg-blue-500/10 text-blue-400 px-3 py-1 rounded text-xs font-bold border border-blue-500/20">Deep Research</span>
                        <span className="flex items-center gap-2 whitespace-nowrap bg-[#13ec5b]/10 text-[#13ec5b] px-3 py-1 rounded text-xs font-bold border border-[#13ec5b]/20">Builder Sprints</span>
                        <span className="flex items-center gap-2 whitespace-nowrap bg-purple-500/10 text-purple-400 px-3 py-1 rounded text-xs font-bold border border-purple-500/20">Cultural Integration</span>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Week 1 */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-10 w-10 rounded-full bg-[#13ec5b]/20 border border-[#13ec5b]/40 flex items-center justify-center text-[#13ec5b] font-bold">1</div>
                            <h4 className="text-2xl font-bold text-slate-900">Week 1: The Soil &amp; Roots</h4>
                        </div>
                        <div className="space-y-4">
                            <div className="p-5 rounded-xl bg-white border border-black/5 hover:border-[#13ec5b]/40 shadow-sm transition-all flex justify-between items-start">
                                <div>
                                    <p className="text-[#13ec5b] text-xs font-bold mb-1">Day 1-3</p>
                                    <h5 className="text-lg font-bold text-slate-900 mb-2">Protocol Deep Dives</h5>
                                    <p className="text-slate-600 text-sm">Understanding L1 &amp; L2 consensus mechanisms and scaling roadmaps.</p>
                                </div>
                                <span className="bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded text-[10px] font-bold uppercase">Research</span>
                            </div>
                            <div className="p-5 rounded-xl bg-white border border-black/5 hover:border-[#13ec5b]/40 shadow-sm transition-all flex justify-between items-start">
                                <div>
                                    <p className="text-[#13ec5b] text-xs font-bold mb-1">Day 4-5</p>
                                    <h5 className="text-lg font-bold text-slate-900 mb-2">Cryptography &amp; ZK</h5>
                                    <p className="text-slate-600 text-sm">Foundational ZK circuits and privacy-preserving architecture.</p>
                                </div>
                                <span className="bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded text-[10px] font-bold uppercase">Research</span>
                            </div>
                            <div className="p-5 rounded-xl bg-white border border-black/5 hover:border-[#13ec5b]/40 shadow-sm transition-all flex justify-between items-start">
                                <div>
                                    <p className="text-[#13ec5b] text-xs font-bold mb-1">Day 6-7</p>
                                    <h5 className="text-lg font-bold text-slate-900 mb-2">Lagos Community Day</h5>
                                    <p className="text-slate-600 text-sm">Local tech ecosystem integration and Infinite Garden meetup.</p>
                                </div>
                                <span className="bg-purple-500/10 text-purple-400 px-2 py-0.5 rounded text-[10px] font-bold uppercase">Cultural</span>
                            </div>
                        </div>
                    </div>

                    {/* Week 2 */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-10 w-10 rounded-full bg-[#13ec5b]/20 border border-[#13ec5b]/40 flex items-center justify-center text-[#13ec5b] font-bold">2</div>
                            <h4 className="text-2xl font-bold text-slate-900">Week 2: The Branches</h4>
                        </div>
                        <div className="space-y-4">
                            <div className="p-5 rounded-xl bg-white border border-black/5 hover:border-[#13ec5b]/40 shadow-sm transition-all flex justify-between items-start">
                                <div>
                                    <p className="text-[#13ec5b] text-xs font-bold mb-1">Day 8-10</p>
                                    <h5 className="text-lg font-bold text-slate-900 mb-2">Agentic Economy Sprints</h5>
                                    <p className="text-slate-600 text-sm">Building AI agents with crypto rails and decentralized autonomy.</p>
                                </div>
                                <span className="bg-[#13ec5b]/10 text-[#13ec5b] px-2 py-0.5 rounded text-[10px] font-bold uppercase">Builder</span>
                            </div>
                            <div className="p-5 rounded-xl bg-white border border-black/5 hover:border-[#13ec5b]/40 shadow-sm transition-all flex justify-between items-start">
                                <div>
                                    <p className="text-[#13ec5b] text-xs font-bold mb-1">Day 11-13</p>
                                    <h5 className="text-lg font-bold text-slate-900 mb-2">Financial Infrastructure</h5>
                                    <p className="text-slate-600 text-sm">Stablecoins, payment rails, and local financial inclusion tools.</p>
                                </div>
                                <span className="bg-[#13ec5b]/10 text-[#13ec5b] px-2 py-0.5 rounded text-[10px] font-bold uppercase">Builder</span>
                            </div>
                            <div className="p-5 rounded-xl bg-white border border-black/5 hover:border-[#13ec5b]/40 shadow-sm transition-all flex justify-between items-start">
                                <div>
                                    <p className="text-[#13ec5b] text-xs font-bold mb-1">Day 14</p>
                                    <h5 className="text-lg font-bold text-slate-900 mb-2">Closing Ceremony</h5>
                                    <p className="text-slate-600 text-sm">Demo Day and scaling plans for the pan-African researcher network.</p>
                                </div>
                                <span className="bg-purple-500/10 text-purple-400 px-2 py-0.5 rounded text-[10px] font-bold uppercase">Cultural</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScheduleSection;

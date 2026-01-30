import React from 'react';

const StatsSection: React.FC = () => {
    return (
        <section className="py-12 border-y border-white/5 bg-white/[0.02]">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="flex flex-col gap-2 p-6 rounded-xl bg-white border border-black/5 shadow-sm">
                    <span className="material-symbols-outlined text-[#13ec5b]">calendar_today</span>
                    <p className="text-slate-500 text-sm font-medium">Date Range</p>
                    <p className="text-slate-900 text-xl font-bold">Feb 16 - Mar 3, 2025</p>
                </div>

                <div className="flex flex-col gap-2 p-6 rounded-xl bg-white border border-black/5 shadow-sm">
                    <span className="material-symbols-outlined text-[#13ec5b]">location_on</span>
                    <p className="text-slate-500 text-sm font-medium">Venue</p>
                    <p className="text-slate-900 text-xl font-bold">Lagos Ethereum Community  Hub, Nigeria</p>
                </div>

                <div className="flex flex-col gap-2 p-6 rounded-xl bg-white border border-black/5 shadow-sm">
                    <span className="material-symbols-outlined text-[#13ec5b]">groups</span>
                    <p className="text-slate-500 text-sm font-medium">Participants</p>
                    <p className="text-slate-900 text-xl font-bold">150+ Core Researchers</p>
                </div>

                <div className="flex flex-col gap-2 p-6 rounded-xl bg-white border border-black/5 shadow-sm">
                    <span className="material-symbols-outlined text-[#13ec5b]">science</span>
                    <p className="text-slate-500 text-sm font-medium">Research Tracks</p>
                    <p className="text-slate-900 text-xl font-bold">4 Distinct Domains</p>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;

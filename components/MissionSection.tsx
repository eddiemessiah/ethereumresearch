import React from 'react';

const MissionSection: React.FC = () => {
    return (
        <section className="py-24 px-6 max-w-5xl mx-auto text-center" id="about">
            <h2 className="text-[#13ec5b] text-sm font-bold uppercase tracking-widest mb-4">The Mission</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">From Consumer to Contributor</h3>
            <p className="text-xl text-slate-600 leading-relaxed mb-12">
                Africa&apos;s Ethereum ecosystem is ready to move beyond just using decentralized applications.
                ETH Research Village is designed to foster a robust <span className="text-slate-900 font-semibold italic">Core Dev and Research culture</span>,
                empowering local talent to solve protocol-level challenges and scale the global Ethereum Infinite Garden.
            </p>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#13ec5b] to-transparent mx-auto"></div>
        </section>
    );
};

export default MissionSection;

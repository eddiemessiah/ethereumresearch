'use client';

import React, { useState } from 'react';

interface ScheduleActivity {
    time: string;
    title: string;
    description: string;
    type: 'research' | 'builder' | 'cultural';
}

interface DaySchedule {
    day: number;
    date: string;
    theme: string;
    activities: ScheduleActivity[];
    speaker: string;
}

const scheduleData: { week: number; title: string; focus: string; days: DaySchedule[] }[] = [
    {
        week: 1,
        title: "The Soil & The Roots",
        focus: "Protocol & Scaling",
        days: [
            {
                day: 1,
                date: "Mon",
                theme: "The Infinite Garden Manifesto",
                speaker: "TBD",
                activities: [
                    {
                        time: "10:00 - 13:00",
                        title: "Welcome to ETH Research Village & Infinite Garden Vision",
                        description: "Program overview & expectations, Introduction to Ethereum as an ecosystem, Community bonding & onboarding session",
                        type: "research"
                    },
                    {
                        time: "14:00 - 17:00",
                        title: "Vitalik's Vision vs. African Reality",
                        description: "The Roadmap (The Merge → The Scourge → The Verge). Understanding Ethereum's evolution and its relevance to Africa.",
                        type: "research"
                    },
                    {
                        time: "19:00+",
                        title: "Welcome Dinner",
                        description: "Networking and cultural orientation in Lagos.",
                        type: "cultural"
                    }
                ]
            },
            {
                day: 2,
                date: "Tue",
                theme: "The Surge – Rollups & The Superchain",
                speaker: "TBD",
                activities: [
                    {
                        time: "10:00 - 13:00",
                        title: "Ethereum Fundamentals (Deep Dive)",
                        description: "Ethereum architecture overview, Smart contracts & EVM basics, Why Ethereum matters globally.",
                        type: "research"
                    },
                    {
                        time: "14:00 - 17:00",
                        title: "L2 Fundamentals & EIP-4844",
                        description: "Optimistic Rollups, OP Stack, Superchain thesis. Research Focus: Blobs economics - How low can fees go for mobile money replacements? Activity: Deploying a custom L3 on OP Stack.",
                        type: "builder"
                    },
                    {
                        time: "19:00+",
                        title: "Open Q&A Session",
                        description: "Builder hangout and informal tech discussions.",
                        type: "cultural"
                    }
                ]
            },
            {
                day: 3,
                date: "Wed",
                theme: "Core Research – ZK-EVMs & Validity Proofs",
                speaker: "TBD",
                activities: [
                    {
                        time: "10:00 - 13:00",
                        title: "Research Methods for Web3",
                        description: "How to research blockchain problems, Reading whitepapers & EIPs, Understanding on-chain data.",
                        type: "research"
                    },
                    {
                        time: "14:00 - 17:00",
                        title: "ZK-EVMs & Validity Proofs",
                        description: "The math behind Zero-Knowledge (Starknet/Scroll/zkSync). Research Focus: Cairo vs. Solidity, Prover efficiency on low-end hardware.",
                        type: "research"
                    },
                    {
                        time: "19:00+",
                        title: "ZK Fireside Chat",
                        description: "Privacy and the endgame discussions.",
                        type: "cultural"
                    }
                ]
            },
            {
                day: 4,
                date: "Thu",
                theme: "Data Availability (DA) & The Modular Stack",
                speaker: "TBD",
                activities: [
                    {
                        time: "10:00 - 13:00",
                        title: "Data Availability & Blobs",
                        description: "The Data Availability Problem. Monolithic vs. Modular blockchains (Celestia/EigenDA).",
                        type: "research"
                    },
                    {
                        time: "14:00 - 17:00",
                        title: "Ethereum Use Cases & Case Studies",
                        description: "DeFi, DAOs, NFTs, Infra, African Ethereum use cases. What's working vs what's broken. Research: Using Blobstream for African data sovereignty.",
                        type: "builder"
                    },
                    {
                        time: "19:00+",
                        title: "Lagos Night Out",
                        description: "Cultural integration and community building.",
                        type: "cultural"
                    }
                ]
            },
            {
                day: 5,
                date: "Fri",
                theme: "Account Abstraction (AA) & UX",
                speaker: "TBD",
                activities: [
                    {
                        time: "10:00 - 13:00",
                        title: "Problem Discovery Day",
                        description: "Identifying real ecosystem problems, Mapping user pain points, Problem statements workshop.",
                        type: "research"
                    },
                    {
                        time: "14:00 - 17:00",
                        title: "EIP-4337 and EIP-7702",
                        description: "Eliminating seed phrases. Research Focus: Session Keys for gaming, Social Recovery for unbanked users. Activity: Building a Gasless Wallet prototype.",
                        type: "builder"
                    },
                    {
                        time: "19:00+",
                        title: "Mentor Feedback Sessions",
                        description: "1-on-1 project reviews with mentors.",
                        type: "cultural"
                    }
                ]
            },
            {
                day: 6,
                date: "Sat",
                theme: "Decentralized Finance (DeFi) & Stablecoins",
                speaker: "TBD",
                activities: [
                    {
                        time: "10:00 - 13:00",
                        title: "Ideation & Concept Development",
                        description: "Turning problems into ideas, Ideation frameworks, Early concept sketching.",
                        type: "research"
                    },
                    {
                        time: "14:00 - 17:00",
                        title: "AMMs, DLAMMs, Lending & RWA",
                        description: "Research Focus: Stablecoins as inflation hedges. Algorithmic vs. Collateralized. Activity: Designing a local collateral stablecoin peg mechanism.",
                        type: "builder"
                    },
                    {
                        time: "19:00+",
                        title: "DeFi Fireside",
                        description: "Informal discussions on financial innovation.",
                        type: "cultural"
                    }
                ]
            },
            {
                day: 7,
                date: "Sun",
                theme: "Rest & Regeneration (The Cultural Layer)",
                speaker: "TBD",
                activities: [
                    {
                        time: "All Day",
                        title: "Community & Cultural Day",
                        description: "Community service in Lagos, local market visit, or beach excursion. 'Ethereum is Human.'",
                        type: "cultural"
                    }
                ]
            }
        ]
    },
    {
        week: 2,
        title: "The Branches",
        focus: "Applications & Privacy",
        days: [
            {
                day: 8,
                date: "Mon",
                theme: "Identity (DID) & Sybil Resistance",
                speaker: "TBD",
                activities: [
                    {
                        time: "10:00 - 13:00",
                        title: "Worldcoin, ENS & Proof of Humanity",
                        description: "Understanding decentralized identity systems and their implications.",
                        type: "research"
                    },
                    {
                        time: "14:00 - 17:00",
                        title: "One Person One Vote",
                        description: "Research Focus: Solving identity without government ID. Privacy-preserving KYC. Activity: Integrating Sign-In with Ethereum (SIWE) into a Web2 app.",
                        type: "builder"
                    },
                    {
                        time: "19:00+",
                        title: "Identity Fireside",
                        description: "Discussing identity solutions for Africa.",
                        type: "cultural"
                    }
                ]
            },
            {
                day: 9,
                date: "Tue",
                theme: "Privacy & The Verge",
                speaker: "TBD",
                activities: [
                    {
                        time: "10:00 - 13:00",
                        title: "Stealth Addresses & Private Smart Contracts",
                        description: "Deep dive into Railgun, Aztec, and Secret Network architectures.",
                        type: "research"
                    },
                    {
                        time: "14:00 - 17:00",
                        title: "Privacy vs. Compliance",
                        description: "Research Focus: Regulatory Compliance and On-chain Privacy in Africa. Activity: Using ZK-proofs to prove solvency without revealing total assets.",
                        type: "builder"
                    },
                    {
                        time: "19:00+",
                        title: "Privacy Night",
                        description: "Discussing the future of on-chain privacy.",
                        type: "cultural"
                    }
                ]
            },
            {
                day: 10,
                date: "Wed",
                theme: "Interoperability & Cross-Chain Messaging",
                speaker: "TBD",
                activities: [
                    {
                        time: "10:00 - 13:00",
                        title: "Bridging Risks & Models",
                        description: "Lock and Mint vs. Burn and Mint models. LayerZero, Axelar deep dive.",
                        type: "research"
                    },
                    {
                        time: "14:00 - 17:00",
                        title: "Intent-Based Bridging",
                        description: "Research Focus: Uniswap X and abstracting chains from users. Activity: Building a cross-chain voting dApp (vote on L2, settle on L1).",
                        type: "builder"
                    },
                    {
                        time: "19:00+",
                        title: "Cross-Chain Hangout",
                        description: "Networking and informal discussions.",
                        type: "cultural"
                    }
                ]
            },
            {
                day: 11,
                date: "Thu",
                theme: "MEV & The Scourge",
                speaker: "TBD",
                activities: [
                    {
                        time: "10:00 - 13:00",
                        title: "Flashbots & PBS",
                        description: "Understanding Maximum Extractable Value and Proposer-Builder Separation.",
                        type: "research"
                    },
                    {
                        time: "14:00 - 17:00",
                        title: "MEV Impact on Users",
                        description: "Research Focus: Is MEV hurting African users? Censorship resistance. Activity: Analyzing mempool data to spot arbitrage opportunities.",
                        type: "builder"
                    },
                    {
                        time: "19:00+",
                        title: "MEV Fireside",
                        description: "Discussing MEV mitigation strategies.",
                        type: "cultural"
                    }
                ]
            },
            {
                day: 12,
                date: "Fri",
                theme: "Public Goods Funding",
                speaker: "TBD",
                activities: [
                    {
                        time: "10:00 - 13:00",
                        title: "Gitcoin & RetroPGF",
                        description: "Quadratic Funding math. How to sustain open source development.",
                        type: "research"
                    },
                    {
                        time: "14:00 - 17:00",
                        title: "Naira-Based Quadratic Funding",
                        description: "Research Focus: Designing a QF round for local community projects. Activity: Live Grant Round simulation.",
                        type: "builder"
                    },
                    {
                        time: "19:00+",
                        title: "Public Goods Celebration",
                        description: "Celebrating open source contributions.",
                        type: "cultural"
                    }
                ]
            }
        ]
    },
    {
        week: 3,
        title: "The Harvest",
        focus: "Outputs",
        days: [
            {
                day: 13,
                date: "Sat",
                theme: "Protocol Sprints",
                speaker: "TBD",
                activities: [
                    {
                        time: "10:00 - 13:00",
                        title: "Final Polishing",
                        description: "Finalizing code, writing technical articles, polishing GitHub repos.",
                        type: "builder"
                    },
                    {
                        time: "14:00 - 17:00",
                        title: "Artifact Production",
                        description: "Goal: Every resident must produce one artifact (Code, Article, or Proposal).",
                        type: "builder"
                    },
                    {
                        time: "19:00+",
                        title: "Pre-Demo Prep",
                        description: "Final preparations for Demo Day.",
                        type: "cultural"
                    }
                ]
            },
            {
                day: 14,
                date: "Sun",
                theme: "The Exhibition & Closing Ceremony",
                speaker: "TBD",
                activities: [
                    {
                        time: "10:00 - 13:00",
                        title: "Demo Day Preparation",
                        description: "Preparing presentations for 'The Ikorodu Consensus' research paper summary.",
                        type: "builder"
                    },
                    {
                        time: "14:00 - 17:00",
                        title: "Demo Exhibition",
                        description: "Presentation of research findings and artifacts to global partners and the community.",
                        type: "builder"
                    },
                    {
                        time: "19:00+",
                        title: "Closing Celebration",
                        description: "Traditional Nigerian celebration with feast and music.",
                        type: "cultural"
                    }
                ]
            }
        ]
    }
];

const getActivityBadge = (type: string) => {
    switch (type) {
        case 'research':
            return <span className="bg-blue-500/10 text-blue-500 px-2 py-0.5 rounded text-[10px] font-bold uppercase whitespace-nowrap">Research</span>;
        case 'builder':
            return <span className="bg-[#13ec5b]/10 text-[#13ec5b] px-2 py-0.5 rounded text-[10px] font-bold uppercase whitespace-nowrap">Builder</span>;
        case 'cultural':
            return <span className="bg-purple-500/10 text-purple-500 px-2 py-0.5 rounded text-[10px] font-bold uppercase whitespace-nowrap">Cultural</span>;
        default:
            return null;
    }
};

const EventScheduleTable: React.FC = () => {
    const [activeWeek, setActiveWeek] = useState(1);

    return (
        <section className="py-24 bg-slate-50" id="detailed-schedule">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1 bg-[#13ec5b]/10 text-[#13ec5b] rounded-full text-sm font-bold mb-4">
                        14-Day Research Agenda
                    </span>
                    <h2 className="text-4xl font-black text-slate-900 mb-4">Event Activities Schedule</h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        This curriculum maps the Ethereum Roadmap (The Surge, The Scourge, The Verge) to African necessities.
                    </p>
                </div>

                {/* Format Legend */}
                <div className="bg-white dark:bg-white/5 rounded-2xl p-6 mb-8 border border-black/5 dark:border-white/10 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Daily Format</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                                <span className="text-blue-500 text-lg">📚</span>
                            </div>
                            <div>
                                <p className="font-bold text-slate-900 dark:text-white">Morning (10:00 - 13:00)</p>
                                <p className="text-sm text-slate-600 dark:text-slate-300">Deep Research Seminars (Theory & EIPs)</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-lg bg-[#13ec5b]/10 flex items-center justify-center flex-shrink-0">
                                <span className="text-[#13ec5b] text-lg">🔧</span>
                            </div>
                            <div>
                                <p className="font-bold text-slate-900 dark:text-white">Afternoon (14:00 - 17:00)</p>
                                <p className="text-sm text-slate-600 dark:text-slate-300">Builder Sprints (Research Sessions & Prototyping)</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                                <span className="text-purple-500 text-lg">🎭</span>
                            </div>
                            <div>
                                <p className="font-bold text-slate-900 dark:text-white">Evening (19:00+)</p>
                                <p className="text-sm text-slate-600 dark:text-slate-300">Cultural Integration (Fireside Chats, Music, Local Food)</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Week Tabs */}
                <div className="flex flex-wrap gap-3 mb-8">
                    {scheduleData.map((week) => (
                        <button
                            key={week.week}
                            onClick={() => setActiveWeek(week.week)}
                            className={`px-6 py-3 rounded-full font-bold transition-all ${activeWeek === week.week
                                ? 'bg-[#13ec5b] text-black shadow-lg'
                                : 'bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-black/10 dark:border-white/10 hover:border-[#13ec5b]/50'
                                }`}
                        >
                            Week {week.week}: {week.title}
                        </button>
                    ))}
                </div>

                {/* Schedule Table */}
                {scheduleData.filter(w => w.week === activeWeek).map((week) => (
                    <div key={week.week} className="space-y-6">
                        <div className="bg-gradient-to-r from-[#13ec5b]/10 to-transparent rounded-2xl p-6 border border-[#13ec5b]/20">
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white">Week {week.week}: {week.title}</h3>
                            <p className="text-slate-600 dark:text-slate-300">Focus: {week.focus}</p>
                        </div>

                        {/* Desktop Table */}
                        <div className="hidden lg:block overflow-hidden rounded-2xl border border-black/5 dark:border-white/10 shadow-sm">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gradient-to-r from-emerald-700 to-emerald-600 text-white">
                                        <th className="px-6 py-4 text-left font-bold">Day</th>
                                        <th className="px-6 py-4 text-left font-bold">Theme</th>
                                        <th className="px-6 py-4 text-left font-bold">Time</th>
                                        <th className="px-6 py-4 text-left font-bold">Activity</th>
                                        <th className="px-6 py-4 text-left font-bold">Description</th>
                                        <th className="px-6 py-4 text-left font-bold">Type</th>
                                        <th className="px-6 py-4 text-left font-bold">Speaker/Facilitator</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {week.days.map((day, dayIdx) => (
                                        day.activities.map((activity, actIdx) => (
                                            <tr
                                                key={`${day.day}-${actIdx}`}
                                                className={`${dayIdx % 2 === 0 ? 'bg-white dark:bg-white/5' : 'bg-slate-50 dark:bg-white/[0.02]'
                                                    } hover:bg-[#13ec5b]/5 dark:hover:bg-[#13ec5b]/10 transition-colors border-b border-black/5 dark:border-white/5`}
                                            >
                                                {actIdx === 0 && (
                                                    <>
                                                        <td className="px-6 py-4 font-bold text-slate-900 dark:text-white align-top" rowSpan={day.activities.length}>
                                                            <div className="flex items-center gap-2">
                                                                <span className="w-8 h-8 rounded-full bg-[#13ec5b]/20 text-[#13ec5b] flex items-center justify-center font-bold text-sm">
                                                                    {day.day}
                                                                </span>
                                                                <span className="text-sm text-slate-500 dark:text-slate-400">{day.date}</span>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 font-medium text-slate-700 dark:text-slate-300 align-top" rowSpan={day.activities.length}>
                                                            {day.theme}
                                                        </td>
                                                    </>
                                                )}
                                                <td className="px-6 py-4 text-slate-600 dark:text-slate-400 text-sm whitespace-nowrap">{activity.time}</td>
                                                <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">{activity.title}</td>
                                                <td className="px-6 py-4 text-slate-600 dark:text-slate-400 text-sm max-w-md">{activity.description}</td>
                                                <td className="px-6 py-4">{getActivityBadge(activity.type)}</td>
                                                {actIdx === 0 && (
                                                    <td className="px-6 py-4 align-top" rowSpan={day.activities.length}>
                                                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-medium">
                                                            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
                                                            {day.speaker}
                                                        </span>
                                                    </td>
                                                )}
                                            </tr>
                                        ))
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Mobile Cards */}
                        <div className="lg:hidden space-y-4">
                            {week.days.map((day) => (
                                <div key={day.day} className="bg-white dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/10 shadow-sm overflow-hidden">
                                    <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 p-4 text-white">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <span className="w-10 h-10 rounded-full bg-[#13ec5b]/20 text-[#13ec5b] flex items-center justify-center font-bold">
                                                    {day.day}
                                                </span>
                                                <div>
                                                    <p className="font-bold">{day.theme}</p>
                                                    <p className="text-sm text-white/85">{day.date}</p>
                                                </div>
                                            </div>
                                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-medium">
                                                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>
                                                {day.speaker}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="divide-y divide-black/5 dark:divide-white/10">
                                        {day.activities.map((activity, idx) => (
                                            <div key={idx} className="p-4">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{activity.time}</span>
                                                    {getActivityBadge(activity.type)}
                                                </div>
                                                <h4 className="font-bold text-slate-900 dark:text-white mb-1">{activity.title}</h4>
                                                <p className="text-sm text-slate-600 dark:text-slate-400">{activity.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default EventScheduleTable;

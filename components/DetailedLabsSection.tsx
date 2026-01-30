'use client';

import React, { useState } from 'react';

interface LabTopic {
    title: string;
    concept: string;
    activity: string;
    task: string;
    researchQuestion?: string;
    whyAfrica?: string;
    tooling?: string[];
}

interface Lab {
    id: number;
    name: string;
    focus: string;
    icon: string;
    color: string;
    description: string;
    topics: LabTopic[];
    features?: string[];
}

const labsData: Lab[] = [
    {
        id: 1,
        name: "The Agentic Economy Lab",
        focus: "AI + Crypto",
        icon: "smart_toy",
        color: "from-purple-500 to-blue-500",
        description: "This is the most cutting-edge track. We are moving from 'Chatbots' to 'Economic Agents' that can pay for things. Exploring AI Agents, x402, and ERC-8004.",
        topics: [
            {
                title: "ERC-8004 (Agent Discovery & Reputation)",
                concept: "A standard that allows AI agents to 'register' themselves on-chain, prove who they are, and build a reputation so other agents trust them.",
                activity: "The Agent Registry Sprint",
                task: "Participants will deploy a smart contract that implements ERC-8004.",
                researchQuestion: "How can an African merchant's AI agent trust a buyer's AI agent without a bank?",
                tooling: ["Solidity", "Python", "Base/Optimism"]
            },
            {
                title: "x402 (Agentic Commerce & HTTP 402)",
                concept: "Reviving the 'HTTP 402 Payment Required' status code using crypto. It allows an AI agent to hit a website, see a price (e.g., 1 USDC), and pay it instantly via HTTP headers to get access.",
                activity: "Pay-Per-Prompt API",
                task: "Build a simple API (e.g., a weather data service for farmers) that creates a 402 Payment Required error. Then, build an AI Agent that automatically signs a transaction to pay and unlock the data.",
                whyAfrica: "Eliminate subscription fatigue. Allow 'Pay-as-you-go' for solar energy or educational content using micropayments."
            }
        ]
    },
    {
        id: 2,
        name: "The Privacy & Data Lab",
        focus: "ZK, Privacy, and On-Chain Data",
        icon: "shield_lock",
        color: "from-emerald-500 to-teal-500",
        description: "Designing trustless systems that prioritize user sovereignty and zero-knowledge proof applications for real-world use cases.",
        topics: [
            {
                title: "Zero-Knowledge (ZK) Use Cases",
                concept: "Proving you know something without revealing the secret.",
                activity: "The Private Payroll Prototype",
                task: "Use Circom or Noir to build a system where an employer deposits USDC, and employees withdraw their salary without the public seeing who got paid how much.",
                researchQuestion: "Can we build a 'Private POAP' that proves you attended the Pop-Up City without linking your main wallet?",
                tooling: ["Circom", "Noir", "USDC"]
            },
            {
                title: "Data Availability (Blobs) & Pyth Network",
                concept: "Using Ethereum Blobs (EIP-4844) for cheap temporary storage and Pyth for real-world data feeds.",
                activity: "The Lagos Price Index",
                task: "Create a custom Oracle using Pyth that puts the local exchange rate of the Naira (NGN) on-chain. Then, store the historical data cheaply using Blobs instead of expensive storage.",
                tooling: ["Pyth Network", "EIP-4844", "Solidity"]
            }
        ]
    },
    {
        id: 3,
        name: "The Decentralized Luma Project",
        focus: "Core Build - Building Our Own Infrastructure",
        icon: "hub",
        color: "from-orange-500 to-red-500",
        description: "Instead of just researching, the village will build and use its own decentralized event management platform. Name Ideas: 'TownSquare' or 'HubPass'.",
        features: [
            "Sign in with Ethereum (SIWE) or Farcaster",
            "NFT-based tickets (using Unlock Protocol or custom ERC-721)",
            "Daily schedules posted to Farcaster/Lens Protocol",
            "ZK-Email to verify residency without doxxing email addresses"
        ],
        topics: [
            {
                title: "The Daily & Weekly Progress Interface",
                concept: "A simple dashboard that queries the GitHub API and on-chain deployments to show a 'Liveness Meter' of the village.",
                activity: "Village Dashboard Build",
                task: "Build a real-time dashboard showing: 'Lines of Code Written,' 'Contracts Deployed,' 'Coffee Consumed.'",
                tooling: ["GitHub API", "Next.js", "The Graph"]
            }
        ]
    },
    {
        id: 4,
        name: "The Open Source & Funding Lab",
        focus: "Sustainability, Drips, and Public Goods",
        icon: "terminal",
        color: "from-cyan-500 to-blue-500",
        description: "Fortifying the core infrastructure through peer reviews, bug bounties, and sustainable public goods funding mechanisms.",
        topics: [
            {
                title: "Drips Protocol Partnership",
                concept: "Drips allows you to stream funds to your dependencies. If you use a library, you 'drip' a small % of your tokens to it.",
                activity: "The Split",
                task: "Every project built at the village must add a drips.json file. If their project receives a grant/donation, 5% is automatically streamed back to the Web3Bridge Hub and 5% to the open-source libraries they used.",
                whyAfrica: "It teaches the culture of 'giving back' automatically.",
                tooling: ["Drips Protocol", "GitHub", "JSON"]
            },
            {
                title: "GitHub & Open Source Contributions",
                concept: "Instead of building new useless apps, we dedicate 2 days to finding 'Good First Issues' in major Ethereum repos and submitting PRs.",
                activity: "The First PR Party",
                task: "Find 'Good First Issues' in major Ethereum repos (e.g., Wagmi, Viem, or Reth) and submit PRs.",
                researchQuestion: "Goal: Get 10 African developers to have their names in the commit history of major global protocols.",
                tooling: ["Git", "GitHub", "Wagmi", "Viem", "Reth"]
            }
        ]
    },
    {
        id: 5,
        name: "The Financial Inclusion Lab",
        focus: "Stablecoins, BTCfi, and MiniApps",
        icon: "currency_exchange",
        color: "from-yellow-500 to-orange-500",
        description: "Developing decentralized finance solutions tailored for emerging economies and local liquidity needs.",
        topics: [
            {
                title: "MiniApps (Telegram/Farcaster)",
                concept: "Crypto apps that run inside a chat interface (Telegram Mini Apps or Farcaster Frames).",
                activity: "The Chat-Wallet",
                task: "Build a stablecoin wallet that lives entirely inside a Telegram bot. Users can send USDC to each other in a chat.",
                researchQuestion: "How to handle private keys securely in a MiniApp environment?",
                tooling: ["Telegram Bot API", "Farcaster Frames", "USDC"]
            },
            {
                title: "BTCfi (Bitcoin DeFi)",
                concept: "Using Wrapped Bitcoin (WBTC, cbBTC) in DeFi on Ethereum/L2s.",
                activity: "The Bitcoin Bridge",
                task: "Visualize the path of BTC from the Bitcoin network → Coinbase → Base (L2) → Aave (Lending). Analyze the trust assumptions at each step.",
                tooling: ["WBTC", "cbBTC", "Base", "Aave"]
            }
        ]
    }
];

const DetailedLabsSection: React.FC = () => {
    const [activeLab, setActiveLab] = useState(1);

    const currentLab = labsData.find(lab => lab.id === activeLab);

    return (
        <section className="py-24 bg-slate-50" id="detailed-labs">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1 bg-[#13ec5b]/10 text-[#13ec5b] rounded-full text-sm font-bold mb-4">
                        Research Labs
                    </span>
                    <h2 className="text-4xl font-black text-slate-900 mb-4">Deep Dive Research Tracks</h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        Five specialized labs designed to push the boundaries of Ethereum research with hands-on projects and real-world applications for Africa.
                    </p>
                </div>

                {/* Lab Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {labsData.map((lab) => (
                        <button
                            key={lab.id}
                            onClick={() => setActiveLab(lab.id)}
                            className={`flex items-center gap-2 px-5 py-3 rounded-full font-bold transition-all ${activeLab === lab.id
                                    ? 'bg-slate-900 text-white shadow-lg'
                                    : 'bg-white text-slate-600 border border-black/10 hover:border-slate-300'
                                }`}
                        >
                            <span className="material-symbols-outlined text-lg">{lab.icon}</span>
                            <span className="hidden sm:inline">{lab.name.replace('The ', '').replace(' Lab', '').replace(' Project', '')}</span>
                            <span className="sm:hidden">{lab.id}</span>
                        </button>
                    ))}
                </div>

                {/* Active Lab Content */}
                {currentLab && (
                    <div className="space-y-8">
                        {/* Lab Header */}
                        <div className={`bg-gradient-to-r ${currentLab.color} rounded-3xl p-8 md:p-12 text-white relative overflow-hidden`}>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                        <span className="material-symbols-outlined text-3xl">{currentLab.icon}</span>
                                    </div>
                                    <div>
                                        <span className="text-white/80 text-sm font-medium">Lab {currentLab.id}</span>
                                        <h3 className="text-2xl md:text-3xl font-black">{currentLab.name}</h3>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-bold backdrop-blur-sm">
                                        {currentLab.focus}
                                    </span>
                                </div>
                                <p className="text-white/90 text-lg max-w-3xl leading-relaxed">
                                    {currentLab.description}
                                </p>
                            </div>
                        </div>

                        {/* Features (for Decentralized Luma) */}
                        {currentLab.features && (
                            <div className="bg-white rounded-2xl border border-black/5 p-6 shadow-sm">
                                <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[#13ec5b]">featured_play_list</span>
                                    Platform Features
                                </h4>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {currentLab.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50">
                                            <span className="material-symbols-outlined text-[#13ec5b] mt-0.5">check_circle</span>
                                            <span className="text-slate-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Topics */}
                        <div className="space-y-6">
                            <h4 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                                <span className="material-symbols-outlined text-[#13ec5b]">science</span>
                                Research Topics & Activities
                            </h4>

                            {currentLab.topics.map((topic, idx) => (
                                <div key={idx} className="bg-white rounded-2xl border border-black/5 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                    {/* Topic Header */}
                                    <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 text-white">
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <span className="text-[#13ec5b] text-xs font-bold uppercase tracking-wider">Topic {idx + 1}</span>
                                                <h5 className="text-xl font-bold mt-1">{topic.title}</h5>
                                            </div>
                                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#13ec5b]/20 flex items-center justify-center">
                                                <span className="material-symbols-outlined text-[#13ec5b]">lightbulb</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Topic Content */}
                                    <div className="p-6 space-y-6">
                                        {/* The Concept */}
                                        <div>
                                            <h6 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">The Concept</h6>
                                            <p className="text-slate-700 leading-relaxed">{topic.concept}</p>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            {/* Engagement Activity */}
                                            <div className="p-4 rounded-xl bg-[#13ec5b]/5 border border-[#13ec5b]/20">
                                                <h6 className="text-sm font-bold text-[#13ec5b] uppercase tracking-wider mb-2 flex items-center gap-2">
                                                    <span className="material-symbols-outlined text-lg">rocket_launch</span>
                                                    Engagement Activity
                                                </h6>
                                                <p className="text-slate-900 font-bold text-lg mb-2">"{topic.activity}"</p>
                                                <p className="text-slate-600 text-sm">{topic.task}</p>
                                            </div>

                                            {/* Research Question or Why Africa */}
                                            {(topic.researchQuestion || topic.whyAfrica) && (
                                                <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                                                    <h6 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2 flex items-center gap-2">
                                                        <span className="material-symbols-outlined text-lg">
                                                            {topic.researchQuestion ? 'psychology' : 'public'}
                                                        </span>
                                                        {topic.researchQuestion ? 'Research Question' : 'Why Africa?'}
                                                    </h6>
                                                    <p className="text-slate-700">
                                                        {topic.researchQuestion || topic.whyAfrica}
                                                    </p>
                                                </div>
                                            )}
                                        </div>

                                        {/* Tooling */}
                                        {topic.tooling && (
                                            <div>
                                                <h6 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Tooling & Stack</h6>
                                                <div className="flex flex-wrap gap-2">
                                                    {topic.tooling.map((tool, toolIdx) => (
                                                        <span
                                                            key={toolIdx}
                                                            className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium border border-slate-200"
                                                        >
                                                            {tool}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* CTA */}
                <div className="mt-16 text-center">
                    <div className="inline-block bg-gradient-to-r from-[#13ec5b]/10 to-emerald-500/10 rounded-3xl p-8 md:p-12 border border-[#13ec5b]/20">
                        <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">Ready to Join a Lab?</h3>
                        <p className="text-slate-600 max-w-xl mx-auto mb-6">
                            Each participant will be assigned to a primary lab based on their skills and interests. Cross-lab collaboration is encouraged!
                        </p>
                        <a
                            href="/#register"
                            className="inline-flex items-center gap-2 bg-[#13ec5b] text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-lg"
                        >
                            <span>Apply for a Lab</span>
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailedLabsSection;

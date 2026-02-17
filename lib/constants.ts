import { Speaker, ScheduleDay, Lab } from './types';

export const SPEAKERS: Speaker[] = [
    {
        name: "Vitalik Buterin",
        role: "Ethereum Co-founder",
        handle: "@VitalikButerin",
        image: "/speakers/vitalik-buterin.png",
        type: "Core",
        status: "Virtual"
    },
    {
        name: "Tim Beiko",
        role: "EF Core Dev Coordinator",
        handle: "@timbeiko",
        image: "/speakers/tim-beiko.png",
        type: "Core",
        status: "Virtual"
    },
    {
        name: "Dankrad Feist",
        role: "EF Researcher (EIP-4844)",
        handle: "@dankrad",
        image: "/speakers/dankrad-feist.png",
        type: "Core",
        status: "Virtual"
    },
    {
        name: "Jesse Pollak",
        role: "Base Creator",
        handle: "@jessepollak",
        image: "/speakers/jesse-pollak.png",
        type: "L2",
        status: "Virtual"
    },
    {
        name: "Karl Floersch",
        role: "Optimism Founder",
        handle: "@karl_dot_tech",
        image: "/speakers/karl-floersch.png",
        type: "L2",
        status: "Virtual"
    },
    {
        name: "Eli Ben-Sasson",
        role: "StarkWare Co-founder",
        handle: "@elibensasson",
        image: "https://picsum.photos/seed/eli/300/300",
        type: "L2",
        status: "Physical"
    }
];

export const SCHEDULE: ScheduleDay[] = [
    {
        day: 1,
        date: "Apr 13",
        theme: "The Infinite Garden Manifesto",
        morning: { time: "10:00 - 13:00", title: "Vision & Onboarding", description: "Program overview, Ethereum as an ecosystem, and community bonding." },
        afternoon: { time: "14:00 - 17:00", title: "The Roadmap", description: "Vitalik's Vision vs. African Reality. Deep dive into The Merge, Surge, and Scourge." },
        evening: { time: "19:00+", title: "Welcome Dinner", description: "Networking and cultural orientation in Ikorodu." },
        focus: "Alignment"
    },
    {
        day: 2,
        date: "Apr 14",
        theme: "The Surge – Rollups & Superchains",
        morning: { time: "10:00 - 13:00", title: "L2 Fundamentals", description: "Architecture of Optimism, Base, and Lisk." },
        afternoon: { time: "14:00 - 17:00", title: "EIP-4844 Deep Dive", description: "Researching Blobs economics for mobile money replacements." },
        evening: { time: "19:00+", title: "Builder Hangout", description: "Informal tech discussions." },
        focus: "Scaling"
    },
    {
        day: 3,
        date: "Apr 15",
        theme: "Core Research & ZK Proofs",
        morning: { time: "10:00 - 13:00", title: "Validity Proofs", description: "Math behind Starknet, Scroll, and zkSync." },
        afternoon: { time: "14:00 - 17:00", title: "Research Methods", description: "How to read EIPs and analyze on-chain data." },
        evening: { time: "19:00+", title: "ZK Fireside", description: "Privacy and the endgame." },
        focus: "Mathematics"
    },
    {
        day: 4,
        date: "Apr 16",
        theme: "Data Availability (DA)",
        morning: { time: "10:00 - 13:00", title: "Modular Stack", description: "Celestia, EigenDA, and the Modular vs Monolithic debate." },
        afternoon: { time: "14:00 - 17:00", title: "DA Workshop", description: "Building high-throughput apps using alternative DA layers." },
        evening: { time: "19:00+", title: "Lagos Night Out", description: "Cultural integration." },
        focus: "Infrastructure"
    },
    {
        day: 5,
        date: "Apr 17",
        theme: "Account Abstraction & UX",
        morning: { time: "10:00 - 13:00", title: "EIP-4337 & EIP-7702", description: "Eliminating seed phrases and session keys." },
        afternoon: { time: "14:00 - 17:00", title: "UX Sprints", description: "Building gasless wallet prototypes for local merchants." },
        evening: { time: "19:00+", title: "Mentor Feedback", description: "1-on-1 project reviews." },
        focus: "Usability"
    },
    {
        day: 14,
        date: "Apr 28",
        theme: "The Harvest – Demo Day",
        morning: { time: "10:00 - 13:00", title: "Final Polishing", description: "Preparing the 'Ikorodu Consensus' research paper." },
        afternoon: { time: "14:00 - 17:00", title: "Demo Exhibition", description: "Presenting findings and artifacts to global partners." },
        evening: { time: "19:00+", title: "Closing Celebration", description: "Traditional Nigerian feast and music." },
        focus: "Output"
    }
];

export const LABS: Lab[] = [
    {
        title: "The Agentic Economy",
        focus: "AI + Crypto",
        concept: "ERC-8004 for Agent Discovery & x402 for Agentic Commerce.",
        activity: "Building a pay-per-prompt API for local farmers.",
        tooling: ["Solidity", "Python", "Base"]
    },
    {
        title: "Privacy & Data",
        focus: "ZK-Proofs",
        concept: "On-chain privacy vs. Regulatory compliance in Africa.",
        activity: "Private POAP system for village residents.",
        tooling: ["Circom", "Noir", "Starknet"]
    },
    {
        title: "Financial Inclusion",
        focus: "Stablecoins",
        concept: "Stablecoins as inflation hedges and Naira-pegged assets.",
        activity: "Designing a collateralized stablecoin peg mechanism.",
        tooling: ["DeFi Primitives", "Pyth Oracle"]
    },
    {
        title: "Open Source Funding",
        focus: "Public Goods",
        concept: "Drips Protocol and Quadratic Funding for Africa.",
        activity: "PR Party - contributing to Wagmi/Viem repositories.",
        tooling: ["Gitcoin", "Drips", "GitHub API"]
    }
];

'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ_ITEMS = [
    {
        question: "Is the event free?",
        answer: "Yes, participation is free. However, residency spots (accommodation) may have a small fee or be merit-based depending on sponsorship availability."
    },
    {
        question: "Is there travel support?",
        answer: "We have limited travel support for high-impact researchers. Mention your need in the residency interest section of the form."
    },
    {
        question: "Do I need to be an expert?",
        answer: "We welcome all levels, but this is a research-focused event. A basic understanding of Ethereum and smart contracts is recommended."
    },
    {
        question: "What is the hybrid model?",
        answer: "The core research sprints happen in Lagos, but workshops and keynotes will be streamed, and virtual participants can join Discord labs."
    },
    {
        question: "What is the 'Infinite Garden'?",
        answer: "It's a metaphor for Ethereum as a decentralized, nurturing ecosystem. We aim to scale this vision with an African lens."
    }
];

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 bg-white/[0.02]">
            <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">Frequently Asked Questions</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300">Everything you need to know about the ETH Research Village.</p>
                </div>

                <div className="space-y-4">
                    {FAQ_ITEMS.map((item, idx) => (
                        <div key={idx} className="bg-white dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/10 shadow-sm overflow-hidden transition-all duration-300">
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.05] dark:hover:bg-white/[0.1] transition-colors"
                            >
                                <span className={`font-bold text-lg transition-colors ${openIndex === idx ? 'text-[#13ec5b]' : 'text-slate-900 dark:text-white'}`}>
                                    {item.question}
                                </span>
                                {openIndex === idx ? (
                                    <Minus className="text-[#13ec5b] shrink-0" />
                                ) : (
                                    <Plus className="text-slate-500 dark:text-slate-400 shrink-0" />
                                )}
                            </button>
                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="p-6 pt-0 border-t border-black/5 dark:border-white/10 mt-2">
                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed pt-4">{item.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;

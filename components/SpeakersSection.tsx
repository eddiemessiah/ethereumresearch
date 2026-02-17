'use client';

import React from 'react';
import { SPEAKERS } from '@/lib/constants';
import { Twitter, Video, MapPin } from 'lucide-react';

const SpeakersSection: React.FC = () => {
    return (
        <section id="speakers" className="py-24 bg-white/[0.02]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">Speakers & Mentors</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        Connecting local pioneers with global leaders from the Ethereum core teams and L2 ecosystems.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SPEAKERS.map((speaker, idx) => (
                        <div key={idx} className="bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-[2rem] p-6 shadow-sm hover:border-[#13ec5b]/50 transition-all duration-300 group">
                            <div className="relative mb-6">
                                <img
                                    src={speaker.image}
                                    alt={speaker.name}
                                    className="w-full h-64 object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                                <div className="absolute top-4 right-4 flex space-x-2">
                                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${speaker.status === 'Physical' ? 'bg-[#13ec5b]/20 text-[#13ec5b]' : 'bg-blue-500/20 text-blue-400'
                                        }`}>
                                        {speaker.status}
                                    </span>
                                    <span className="px-3 py-1 bg-black/60 text-white rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm border border-white/10">
                                        {speaker.type}
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-[#13ec5b] transition-colors">{speaker.name}</h3>
                                <p className="text-slate-500 dark:text-slate-400 font-medium">{speaker.role}</p>
                                <div className="flex items-center space-x-3 pt-2">
                                    <a href={`https://twitter.com/${speaker.handle?.replace('@', '')}`} className="text-slate-400 dark:text-slate-500 hover:text-blue-400 dark:hover:text-blue-400 transition-colors">
                                        <Twitter size={20} />
                                    </a>
                                    <span className="text-slate-300 dark:text-slate-600">|</span>
                                    <div className="flex items-center space-x-1 text-slate-400 dark:text-slate-500 text-sm">
                                        {speaker.status === 'Physical' ? <MapPin size={14} /> : <Video size={14} />}
                                        <span>{speaker.status === 'Physical' ? 'Lagos' : 'Global'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 bg-[#13ec5b] rounded-[3rem] p-12 text-center text-[#0a0a0c] relative overflow-hidden group">
                    <div className="absolute inset-0 garden-gradient opacity-90 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative z-10">
                        <h3 className="text-3xl font-black mb-4">Want to mentor or speak?</h3>
                        <p className="text-[#0a0a0c]/80 max-w-xl mx-auto mb-8 text-lg font-medium">
                            We are looking for core devs, L2 researchers, and on-chain analysts to support the next generation of African builders.
                        </p>
                        <button className="bg-gradient-to-r from-emerald-700 to-emerald-600 text-white px-10 py-4 rounded-full font-bold hover:scale-105 active:scale-95 transition-all shadow-lg">
                            Submit Speaker Proposal
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpeakersSection;

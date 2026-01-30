
import React from 'react';
import { SPEAKERS } from '../constants';
import { Twitter, Video, MapPin } from 'lucide-react';

const SpeakersSection: React.FC = () => {
  return (
    <section id="speakers" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Speakers & Mentors</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Connecting local pioneers with global leaders from the Ethereum core teams and L2 ecosystems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SPEAKERS.map((speaker, idx) => (
            <div key={idx} className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="relative mb-6">
                <img 
                  src={speaker.image} 
                  alt={speaker.name} 
                  className="w-full h-64 object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                    speaker.status === 'Physical' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {speaker.status}
                  </span>
                  <span className="px-3 py-1 bg-slate-900/80 text-white rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm">
                    {speaker.type}
                  </span>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-900">{speaker.name}</h3>
                <p className="text-slate-500 font-medium">{speaker.role}</p>
                <div className="flex items-center space-x-3 pt-2">
                  <a href={`https://twitter.com/${speaker.handle?.replace('@', '')}`} className="text-slate-400 hover:text-blue-500 transition-colors">
                    <Twitter size={20} />
                  </a>
                  <span className="text-slate-200">|</span>
                  <div className="flex items-center space-x-1 text-slate-400 text-sm">
                    {speaker.status === 'Physical' ? <MapPin size={14} /> : <Video size={14} />}
                    <span>{speaker.status === 'Physical' ? 'Ikorodu' : 'Global'}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-emerald-600 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full garden-gradient opacity-90"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Want to mentor or speak?</h3>
            <p className="text-emerald-100 max-w-xl mx-auto mb-8 text-lg">
              We are looking for core devs, L2 researchers, and on-chain analysts to support the next generation of African builders.
            </p>
            <button className="bg-white text-emerald-900 px-8 py-4 rounded-full font-bold hover:bg-emerald-50 transition-colors shadow-lg">
              Submit Speaker Proposal
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;

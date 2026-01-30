
import React from 'react';
import { LABS } from '../constants';
import { Brain, Shield, Coins, HeartHandshake } from 'lucide-react';

const LabIcon = ({ index }: { index: number }) => {
  const icons = [<Brain />, <Shield />, <Coins />, <HeartHandshake />];
  return icons[index % icons.length];
};

const LabsSection: React.FC = () => {
  return (
    <section id="labs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Research Labs</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We structure our Pop-Up City into specialized tracks. Each Lab has a specific research question, a tooling stack, and a target output.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LABS.map((lab, idx) => (
            <div key={idx} className="group relative bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:bg-white hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/30 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-emerald-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-600/20 group-hover:rotate-6 transition-transform">
                  <LabIcon index={idx} />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{lab.title}</h3>
                <p className="text-emerald-700 font-semibold mb-4">{lab.focus}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Concept</h4>
                    <p className="text-slate-600">{lab.concept}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Target Activity</h4>
                    <p className="text-slate-600">{lab.activity}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {lab.tooling.map(tool => (
                        <span key={tool} className="px-3 py-1 bg-white text-slate-700 text-xs font-medium rounded-full border border-slate-200 shadow-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LabsSection;

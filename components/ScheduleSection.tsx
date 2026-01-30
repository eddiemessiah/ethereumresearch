
import React, { useState } from 'react';
import { SCHEDULE } from '../constants';
import { Sun, Coffee, Moon, ArrowRight } from 'lucide-react';

const ScheduleSection: React.FC = () => {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const activeDay = SCHEDULE[activeDayIndex] || SCHEDULE[0];

  return (
    <section id="schedule" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-900/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-emerald-400 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">The 14-Day Deep Dive</span>
            <h2 className="text-4xl md:text-5xl font-bold">The Research Agenda</h2>
          </div>
          <p className="text-slate-400 max-w-md text-lg">
            A curriculum that maps the Ethereum roadmap to African necessities. Moving beyond basics into deep technical exploration.
          </p>
        </div>

        <div className="flex space-x-4 overflow-x-auto pb-8 mb-12 no-scrollbar scroll-smooth">
          {SCHEDULE.map((day, idx) => (
            <button
              key={idx}
              onClick={() => setActiveDayIndex(idx)}
              className={`flex-shrink-0 px-6 py-4 rounded-2xl transition-all duration-300 border ${
                activeDayIndex === idx 
                ? 'bg-emerald-600 border-emerald-500 shadow-xl shadow-emerald-600/20' 
                : 'bg-slate-800/50 border-slate-700 hover:border-slate-500'
              }`}
            >
              <p className={`text-xs uppercase font-bold tracking-widest mb-1 ${activeDayIndex === idx ? 'text-emerald-200' : 'text-slate-500'}`}>
                Day {day.day}
              </p>
              <p className="font-bold whitespace-nowrap">{day.date}</p>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 bg-slate-800/30 backdrop-blur-xl border border-white/5 rounded-[40px] p-8 md:p-12">
          <div className="lg:col-span-1 space-y-8">
            <div>
              <p className="text-emerald-400 font-bold uppercase text-xs tracking-widest mb-2">Focus Area</p>
              <p className="text-4xl font-bold leading-tight">{activeDay.theme}</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
              <h4 className="text-slate-400 font-bold uppercase text-xs tracking-widest mb-4">Daily Goal</h4>
              <p className="text-xl font-medium text-emerald-100">{activeDay.focus}</p>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            {/* Morning */}
            <div className="flex flex-col md:flex-row gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors">
              <div className="md:w-1/3 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-amber-400/10 text-amber-400 flex items-center justify-center">
                  <Sun size={20} />
                </div>
                <span className="font-bold text-slate-300">{activeDay.morning.time}</span>
              </div>
              <div className="md:w-2/3">
                <h4 className="text-xl font-bold mb-2">{activeDay.morning.title}</h4>
                <p className="text-slate-400 leading-relaxed">{activeDay.morning.description}</p>
              </div>
            </div>

            {/* Afternoon */}
            <div className="flex flex-col md:flex-row gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors">
              <div className="md:w-1/3 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-emerald-400/10 text-emerald-400 flex items-center justify-center">
                  <Coffee size={20} />
                </div>
                <span className="font-bold text-slate-300">{activeDay.afternoon.time}</span>
              </div>
              <div className="md:w-2/3">
                <h4 className="text-xl font-bold mb-2">{activeDay.afternoon.title}</h4>
                <p className="text-slate-400 leading-relaxed">{activeDay.afternoon.description}</p>
              </div>
            </div>

            {/* Evening */}
            <div className="flex flex-col md:flex-row gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors">
              <div className="md:w-1/3 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-blue-400/10 text-blue-400 flex items-center justify-center">
                  <Moon size={20} />
                </div>
                <span className="font-bold text-slate-300">{activeDay.evening.time}</span>
              </div>
              <div className="md:w-2/3">
                <h4 className="text-xl font-bold mb-2">{activeDay.evening.title}</h4>
                <p className="text-slate-400 leading-relaxed">{activeDay.evening.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;


import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white">
      {/* Abstract Garden Elements */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-50/50 rounded-full border border-slate-100 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-50 rounded-full text-emerald-700 text-sm font-semibold mb-8 border border-emerald-100 shadow-sm">
          <Sparkles size={16} />
          <span>Africa's First Ethereum Research Pop-Up City</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight">
          Cultivating the <br />
          <span className="text-transparent bg-clip-text garden-gradient">Infinite Garden</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          Bringing builders and thinkers to innovate the future of Ethereum in Lagos. 
          A first-of-its-kind 2-week research hub to scale decentralization with an African lens.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a 
            href="#register" 
            className="w-full sm:w-auto px-10 py-5 bg-emerald-600 text-white rounded-full font-bold text-lg shadow-xl shadow-emerald-600/20 hover:bg-emerald-700 transition-all hover:-translate-y-1 active:scale-95"
          >
            Apply for Residency
          </a>
          <a 
            href="#about" 
            className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center space-x-2"
          >
            <span>Learn More</span>
          </a>
        </div>

        <div className="mt-20 animate-bounce text-slate-400">
          <ArrowDown className="mx-auto" />
        </div>
      </div>
      
      {/* Decorative Garden Icons Floating */}
      <div className="hidden lg:block absolute left-10 top-1/2 -translate-y-1/2 space-y-12">
        <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-emerald-600 border border-slate-50 -rotate-12 animate-float">🌿</div>
        <div className="w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center text-blue-600 border border-slate-50 rotate-12 animate-float" style={{ animationDelay: '1.5s' }}>⛓️</div>
        <div className="w-14 h-14 bg-white rounded-2xl shadow-xl flex items-center justify-center text-amber-600 border border-slate-50 -rotate-6 animate-float" style={{ animationDelay: '3s' }}>💡</div>
      </div>
    </section>
  );
};

export default Hero;

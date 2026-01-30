
import React from 'react';
import { Github, Twitter, Mail, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 garden-gradient rounded-lg flex items-center justify-center text-white font-bold">
                E
              </div>
              <span className="font-bold text-2xl tracking-tight">
                ETH Research Village
              </span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              Innovating the future of Ethereum's decentralized future from the heart of Africa. Powered by Web3Bridge and Upskill Africa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"><Github size={18} /></a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"><Mail size={18} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-emerald-400 uppercase tracking-widest text-sm">Event</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#schedule" className="hover:text-white transition-colors">Full Agenda</a></li>
              <li><a href="#speakers" className="hover:text-white transition-colors">Speakers</a></li>
              <li><a href="#labs" className="hover:text-white transition-colors">Research Labs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-emerald-400 uppercase tracking-widest text-sm">Partners</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li><a href="https://web3bridge.com" target="_blank" className="hover:text-white transition-colors">Web3Bridge</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Upskill Africa</a></li>
              <li><a href="https://ethereum.org" target="_blank" className="hover:text-white transition-colors">Ethereum Foundation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lagos ETH Hub</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© 2025 ETH Research Village. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Code of Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  MapPin, 
  Calendar, 
  Users, 
  Code2, 
  FileText, 
  Lightbulb, 
  Menu, 
  X,
  ArrowUpRight,
  Globe,
  Zap,
  BookOpen,
  Award,
  Github,
  Twitter
} from 'lucide-react';
import { SPEAKERS, SCHEDULE, LABS } from './constants';
import Header from './components/Header';
import Hero from './components/Hero';
import ScheduleSection from './components/ScheduleSection';
import SpeakersSection from './components/SpeakersSection';
import LabsSection from './components/LabsSection';
import RegistrationForm from './components/RegistrationForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Quick Details */}
        <section className="py-12 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-emerald-50 transition-colors duration-300">
                <div className="bg-emerald-100 p-3 rounded-lg text-emerald-700">
                  <Calendar size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Dates</h3>
                  <p className="text-slate-600">Feb 16 – Mar 3, 2025</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-blue-50 transition-colors duration-300">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-700">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Location</h3>
                  <p className="text-slate-600">Ikorodu, Lagos</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-purple-50 transition-colors duration-300">
                <div className="bg-purple-100 p-3 rounded-lg text-purple-700">
                  <Globe size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Format</h3>
                  <p className="text-slate-600">Hybrid Residency</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-amber-50 transition-colors duration-300">
                <div className="bg-amber-100 p-3 rounded-lg text-amber-700">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Entry</h3>
                  <p className="text-slate-600">Free Participation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview / Why Attend */}
        <section id="about" className="py-20 bg-slate-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-200/50 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-200/50 rounded-full blur-3xl"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-emerald-700 uppercase bg-emerald-100 rounded-full">
                  About the Pop-Up City
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                  Innovating the Infinite Garden at Africa's First Ethereum Hub
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  The ETH Research Village is a landmark 2-week immersive residency and research hub. Hosted at the <strong>Lagos Ethereum Community Hub</strong>, this event transitions African participation from consumer to contributor.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                  {[
                    { icon: <BookOpen />, text: "Deep understanding of Protocol" },
                    { icon: <Users />, text: "Global Networking" },
                    { icon: <Zap />, text: "Action-Oriented Ideation" },
                    { icon: <Github />, text: "Open Source Contribution" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3 text-slate-700">
                      <div className="text-emerald-600">{item.icon}</div>
                      <span className="font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-white p-2 rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src="https://picsum.photos/seed/lagoshub/800/600" 
                    alt="Lagos Ethereum Hub" 
                    className="rounded-xl object-cover w-full h-[400px]"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-6 rounded-2xl shadow-xl max-w-[200px]">
                    <p className="text-sm font-medium">"From Lagos to the World — forging the decentralized future."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <LabsSection />
        <ScheduleSection />
        <SpeakersSection />
        <RegistrationForm />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
};

export default App;

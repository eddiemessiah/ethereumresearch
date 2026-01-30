import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import MissionSection from '@/components/MissionSection';
import ScheduleSection from '@/components/ScheduleSection';
import LabsSection from '@/components/LabsSection';
import EventScheduleTable from '@/components/EventScheduleTable';
import SpeakersSection from '@/components/SpeakersSection';
import RegistrationForm from '@/components/RegistrationForm';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <Hero />
        <StatsSection />
        <MissionSection />
        <ScheduleSection />
        <LabsSection />
        <EventScheduleTable />
        <SpeakersSection />
        <RegistrationForm />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}


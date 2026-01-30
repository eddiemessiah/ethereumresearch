import type { Metadata } from 'next';
import Header from '@/components/Header';
import ScheduleSection from '@/components/ScheduleSection';
import EventScheduleTable from '@/components/EventScheduleTable';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Schedule | ETH Research Village Lagos 2026',
    description: 'The 14-day deep dive schedule for the ETH Research Village in Lagos.',
};

export default function SchedulePage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow pt-20">
                <ScheduleSection />
                <EventScheduleTable />
                <FAQ />
            </main>

            <Footer />
        </div>
    );
}

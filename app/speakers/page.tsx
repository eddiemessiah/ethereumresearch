import type { Metadata } from 'next';
import Header from '@/components/Header';
import SpeakersSection from '@/components/SpeakersSection';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Speakers | ETH Research Village Lagos 2025',
    description: 'Meet the mentors and researchers at the ETH Research Village Lagos.',
};

export default function SpeakersPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow pt-20">
                <SpeakersSection />
            </main>

            <Footer />
        </div>
    );
}

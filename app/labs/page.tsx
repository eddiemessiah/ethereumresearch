import type { Metadata } from 'next';
import Header from '@/components/Header';
import LabsSection from '@/components/LabsSection';
import DetailedLabsSection from '@/components/DetailedLabsSection';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Research Labs | ETH Research Village Lagos 2026',
    description: 'Explore the five specialized research tracks at the ETH Research Village Lagos - Agentic Economy, Privacy & Data, Decentralized Luma, Open Source & Funding, and Financial Inclusion.',
};

export default function LabsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow pt-20">
                <LabsSection />
                <DetailedLabsSection />
                <FAQ />
            </main>

            <Footer />
        </div>
    );
}


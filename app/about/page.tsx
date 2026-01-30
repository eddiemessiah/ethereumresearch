import type { Metadata } from 'next';
import Header from '@/components/Header';
import AboutHero from '@/components/AboutHero';
import VisionSection from '@/components/VisionSection';
import StatsSection from '@/components/StatsSection';
import WhyLagosSection from '@/components/WhyLagosSection';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'About | ETH Research Village Lagos 2026',
    description: 'Learn about the ETH Research Village - Africa\'s first Ethereum research pop-up city in Lagos, Nigeria.',
};

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow">
                <AboutHero />
                <div className="border-t border-white/5">
                    <StatsSection />
                </div>
                <VisionSection />
                <WhyLagosSection />
                <FAQ />
            </main>

            <Footer />
        </div>
    );
}

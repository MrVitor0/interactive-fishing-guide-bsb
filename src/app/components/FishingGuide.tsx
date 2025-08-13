'use client';

import Header from './Header';
import HeroSection from './HeroSection';
import LagoParanoaSection from './LagoParanoaSection';
import PesquePaguesSection from './PesquePaguesSection';
import PeixesIscasSection from './PeixesIscasSection';
import LegislacaoSection from './LegislacaoSection';
import RoteiroSection from './RoteiroSection';
import Footer from './Footer';
import FloatingWhatsAppCTA from './FloatingWhatsAppCTA';

const FishingGuide = () => {
  return (
    <div className="bg-[#FDFBF8]">
      <Header />
      <main>
        <HeroSection />
        <LagoParanoaSection />
        <PesquePaguesSection />
        <PeixesIscasSection />
        <LegislacaoSection />
        <RoteiroSection />
      </main>
      <Footer />
      <FloatingWhatsAppCTA />
    </div>
  );
};

export default FishingGuide;

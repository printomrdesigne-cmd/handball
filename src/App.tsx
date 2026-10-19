/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { translations, Language } from './data/translations';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBanner } from './components/StatsBanner';
import { BeforeAfter } from './components/BeforeAfter';
import { FeaturesBento } from './components/FeaturesBento';
import { InteractiveDemo } from './components/InteractiveDemo';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';

export default function App() {
  const [lang, setLang] = useState<Language>('fr');
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState('club');

  // Handle RTL direction when Arabic is selected
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const t = translations[lang];

  const handleOpenOrder = (planId?: string) => {
    if (planId) {
      setSelectedPlanId(planId);
    }
    setIsOrderModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 flex flex-col antialiased selection:bg-blue-600 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        t={t}
        lang={lang}
        onLanguageChange={setLang}
        onOpenOrder={handleOpenOrder}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero t={t} onOpenOrder={() => handleOpenOrder('club')} />

        {/* 2. Key Figures & Quantitative Proof */}
        <StatsBanner t={t} />

        {/* 3. Before vs After (Pain Points vs Solution) */}
        <BeforeAfter t={t} />

        {/* 4. Complete Feature Arsenal (Asymmetric Bento Grid) */}
        <FeaturesBento t={t} />

        {/* 5. Live Interactive Simulator (Console, IHF Sheet, Gym Screen) */}
        <InteractiveDemo t={t} />

        {/* 6. Transparent Pricing Plans */}
        <Pricing t={t} onOpenOrder={handleOpenOrder} />

        {/* 7. Field Testimonials from Referees and Organizers */}
        <Testimonials t={t} />

        {/* 8. Frequently Asked Questions (FAQ) */}
        <Faq t={t} />

        {/* 9. Final Call to Action */}
        <CtaBanner t={t} onOpenOrder={() => handleOpenOrder('club')} />
      </main>

      {/* 10. Compliant Footer */}
      <Footer t={t} />

      {/* Quick Order / Checkout Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        selectedPlanId={selectedPlanId}
        t={t}
      />
    </div>
  );
}

import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { ThePromise } from './components/ThePromise';
import { TrustSignals } from './components/TrustSignals';
import { Residences } from './components/Residences';
import { Financials } from './components/Financials';
import { Amenities } from './components/Amenities';
import { CountdownTimer } from './components/CountdownTimer';
import { InquiryModal } from './components/InquiryModal';
import { Timeline } from './components/Timeline';
import { Navbar } from './components/Navbar';
import { LocationSection } from './components/Location';
import { Gallery } from './components/Gallery';

const App: React.FC = () => {
  const [modalConfig, setModalConfig] = useState<{
    isOpen: boolean;
    title: string;
    cta: string;
    context: 'generic' | 'masterplan' | 'pricing' | 'virtual_tour';
  }>({ 
    isOpen: false, 
    title: 'Request Briefing', 
    cta: 'Send Request',
    context: 'generic'
  });

  const openModal = (
    title: string = 'Request Briefing', 
    cta: string = 'Send Request',
    context: 'generic' | 'masterplan' | 'pricing' | 'virtual_tour' = 'generic'
  ) => {
    setModalConfig({ isOpen: true, title, cta, context });
  };

  return (
    <div className="bg-stone-950 min-h-screen text-stone-200 selection:bg-gold-500/30 font-sans">
      
      <Navbar onOpenModal={(title, cta) => openModal(title, cta, 'virtual_tour')} />

      <main>
        <Hero onRequestInfo={() => openModal('Request Private Visit', 'Schedule Request', 'generic')} />
        
        <TrustSignals />
        
        <ThePromise />
        
        <Amenities />

        <Residences onRequestMasterPlan={() => openModal('Download Master Plan', 'Unlock Master Plan', 'masterplan')} />
        
        <Timeline />
        
        <Financials onRequestPriceSheet={() => openModal('Request Price Sheet', 'Unlock Price Sheet', 'pricing')} />

        <LocationSection />

        <Gallery />

        <CountdownTimer onBookVisit={() => openModal('Book A Private Visit', 'Book Visit', 'generic')} />

        <footer className="bg-stone-950 py-12 px-6 border-t border-stone-800 text-stone-600 text-xs text-center flex flex-col items-center">
          <p className="mb-4">&copy; 2024 Amogaya Projects. All rights reserved.</p>
          <div className="flex justify-center gap-6 mb-4">
            <span className="hover:text-stone-400 transition-colors cursor-pointer">RERA: PRM/KA/RERA/1251/446/PR/230425/007689</span>
          </div>
          <div className="flex justify-center gap-6 mb-10">
            <span className="hover:text-stone-400 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-stone-400 transition-colors cursor-pointer">Disclaimer</span>
             <span className="hover:text-stone-400 transition-colors cursor-pointer">Terms</span>
          </div>
          
          <a href="https://unitern.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 group">
            <p className="text-[10px] uppercase tracking-widest text-stone-600 group-hover:text-stone-400 transition-colors">Managed By</p>
            <img 
                src="https://bz6u2h1ooc3ledmb.public.blob.vercel-storage.com/Unitern/managedby_untiern.webp" 
                alt="Managed by Unitern" 
                className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </a>
        </footer>
      </main>

      <InquiryModal 
        isOpen={modalConfig.isOpen} 
        onClose={() => setModalConfig({ ...modalConfig, isOpen: false })} 
        title={modalConfig.title}
        ctaText={modalConfig.cta}
        context={modalConfig.context}
      />
    </div>
  );
};

export default App;
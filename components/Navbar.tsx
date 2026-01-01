import React, { useState, useEffect } from 'react';
import { Menu, X, PlayCircle } from 'lucide-react';

interface NavbarProps {
  onOpenModal: (title: string, cta: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      setTimeout(() => {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
      }, 300);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
        isScrolled ? 'bg-stone-950/95 backdrop-blur-md py-4 border-b border-stone-800' : 'bg-transparent py-6 md:py-8'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-[60]">
          <div className="flex flex-col">
            <span className="text-white font-serif text-xl md:text-2xl tracking-tight leading-none">
              Elements <span className="text-stone-500 italic">of</span> Life
            </span>
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-stone-500 mt-1">By Amogaya Projects</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('philosophy')} className="text-xs uppercase tracking-widest text-stone-400 hover:text-white transition-colors">Philosophy</button>
            <button onClick={() => scrollToSection('amenities')} className="text-xs uppercase tracking-widest text-stone-400 hover:text-white transition-colors">Amenities</button>
            <button onClick={() => scrollToSection('residences')} className="text-xs uppercase tracking-widest text-stone-400 hover:text-white transition-colors">Plans</button>
            <button onClick={() => scrollToSection('value')} className="text-xs uppercase tracking-widest text-stone-400 hover:text-white transition-colors">Value</button>
            <button onClick={() => scrollToSection('location')} className="text-xs uppercase tracking-widest text-stone-400 hover:text-white transition-colors">Location</button>
            
            {/* Elegant CTA - Gold Hover State */}
            <button 
              onClick={() => onOpenModal('Unlock Virtual Tour', 'Watch Now')}
              className="group border border-white/20 px-6 py-2 text-xs uppercase tracking-widest text-white hover:bg-gold-500 hover:border-gold-500 hover:text-stone-950 transition-all duration-300 flex items-center gap-2"
            >
              <PlayCircle size={14} className="text-gold-400 group-hover:text-stone-950 transition-colors duration-300" /> Virtual Tour
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2 focus:outline-none z-[70]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Fullscreen Overlay */}
        <div className={`fixed inset-0 bg-stone-950/95 backdrop-blur-xl z-[50] flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-in-out md:hidden ${
            mobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'
        }`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-800 via-stone-950 to-stone-950 pointer-events-none"></div>

            <nav className="flex flex-col items-center gap-8 relative z-10 w-full px-8 text-center">
                <button onClick={() => scrollToSection('philosophy')} className="text-2xl font-serif text-white hover:text-gold-400 transition-colors">Philosophy</button>
                <button onClick={() => scrollToSection('amenities')} className="text-2xl font-serif text-white hover:text-gold-400 transition-colors">Amenities</button>
                <button onClick={() => scrollToSection('residences')} className="text-2xl font-serif text-white hover:text-gold-400 transition-colors">Plans</button>
                <button onClick={() => scrollToSection('value')} className="text-2xl font-serif text-white hover:text-gold-400 transition-colors">Value</button>
                <button onClick={() => scrollToSection('location')} className="text-2xl font-serif text-white hover:text-gold-400 transition-colors">Location</button>
                
                <div className="w-12 h-[1px] bg-stone-800 my-2"></div>

                <button 
                onClick={() => { setMobileMenuOpen(false); onOpenModal('Unlock Virtual Tour', 'Watch Now'); }}
                className="group w-full max-w-xs border border-white/20 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-gold-500 hover:border-gold-500 hover:text-stone-950 transition-all duration-300 flex items-center justify-center gap-3"
                >
                <PlayCircle size={20} className="text-gold-400 group-hover:text-stone-950 transition-colors duration-300" /> Virtual Tour
                </button>
            </nav>
        </div>
      </nav>
    </>
  );
};
import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { locationData } from '../data/content';
import { SectionHeader } from './ui/SectionHeader';
import { SectionWrapper } from './ui/SectionWrapper';

interface LocationProps {
  onOpenMap: () => void;
}

export const LocationSection: React.FC<LocationProps> = ({ onOpenMap }) => {
  const [activeCategory, setActiveCategory] = useState('Schools');

  return (
    <SectionWrapper id="location" className="py-16 md:py-24">
        
        <SectionHeader 
            label="The Connectivity"
            title="Connected to what matters."
            description="Located at Kattamanallur, Sannatammanahalli. A strategic address that keeps you close to the IT hubs while preserving the peace of a nature-first community."
            className="text-center mb-10 md:mb-12 max-w-3xl mx-auto"
        />

        {/* Categories Tabs - Centered above grid */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 md:mb-12">
          {Object.keys(locationData).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[10px] md:text-xs uppercase tracking-wider transition-all border whitespace-nowrap ${
                activeCategory === category
                  ? 'bg-white text-stone-900 border-white shadow-lg shadow-white/10'
                  : 'bg-stone-900 text-stone-500 border-stone-800 hover:border-stone-600 hover:text-stone-300'
              }`}
            >
              {locationData[category].icon}
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-start">
          
          {/* List Content - Fixed Height, Top Aligned, Scrollable, No Scrollbar */}
          <div className="bg-stone-900/50 rounded-2xl border border-stone-800 p-8 h-[350px] md:h-[450px] flex flex-col relative">
             {/* Fade gradient for scrolling indication */}
             <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-stone-900/90 to-transparent z-10 pointer-events-none rounded-t-2xl"></div>
             
             <div className="overflow-y-auto pr-2 -mr-2 hide-scrollbar flex-1 pb-4 pt-2">
                <style>{`
                    .hide-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                    .hide-scrollbar {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                `}</style>
                <ul className="space-y-6">
                {locationData[activeCategory].items.map((item, idx) => (
                    <li key={idx} className="flex justify-between items-center border-b border-stone-800/50 pb-4 last:border-0 last:pb-0 animate-in fade-in slide-in-from-bottom-2 duration-300 fill-mode-both" style={{ animationDelay: `${idx * 50}ms` }}>
                    <div>
                        <h4 className="text-white text-sm font-medium">{item.label}</h4>
                        <p className="text-stone-500 text-xs mt-0.5">{item.detail}</p>
                    </div>
                    <span className="text-gold-400 font-mono text-sm whitespace-nowrap ml-4">{item.time}</span>
                    </li>
                ))}
                </ul>
             </div>

             <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-stone-900/90 to-transparent z-10 pointer-events-none rounded-b-2xl"></div>
          </div>
          
          {/* Map Container - Identical Fixed Height */}
          <div className="bg-stone-900 p-1 rounded-2xl border border-stone-800 hover:border-gold-500/30 transition-all duration-700 relative overflow-hidden h-[350px] md:h-[450px]">
             <div className="relative w-full h-full rounded-xl overflow-hidden group">
               {/* Embedded Google Map */}
               <iframe 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }} 
                 loading="lazy" 
                 allowFullScreen 
                 src="https://maps.google.com/maps?q=Elements+of+Life+Sannatammanahalli+Bengaluru&t=m&z=14&output=embed&iwloc=near"
                 className="opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none block"
               ></iframe>
               
               <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-stone-950/20 group-hover:bg-transparent transition-colors">
                  <button 
                      onClick={onOpenMap}
                      className="pointer-events-auto bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-white hover:text-stone-900 transition-all shadow-xl"
                  >
                      <MapPin size={16} />
                      View on Google Maps
                  </button>
               </div>
             </div>
          </div>
        </div>
    </SectionWrapper>
  );
};
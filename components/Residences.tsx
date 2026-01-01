import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { residenceVariants, residenceHighlights } from '../data/content';
import { SectionHeader } from './ui/SectionHeader';

interface ResidencesProps {
    onRequestMasterPlan: () => void;
}

export const Residences: React.FC<ResidencesProps> = ({ onRequestMasterPlan }) => {
  const [activeVariant, setActiveVariant] = useState<keyof typeof residenceVariants>('Dawn');

  return (
    <section id="residences" className="py-24 bg-stone-900">
      <div className="max-w-7xl mx-auto px-6">
        
        <SectionHeader 
            label="The Inventory"
            title="The 3 BHK Collection"
            description="We don't do 'compact'. Every residence is a corner unit designed for families who need room to breathe, with zero wasted corridor space."
        />

        {/* Mobile: Image First (col-reverse), Desktop: Text First (row) */}
        <div className="flex flex-col-reverse lg:flex-row gap-0 border border-stone-800">
          
          {/* Controls & Details */}
          <div className="lg:w-5/12 bg-stone-950 p-8 md:p-10 flex flex-col justify-between">
            <div>
                <div className="flex gap-1 mb-10 overflow-x-auto no-scrollbar">
                {(Object.keys(residenceVariants) as Array<keyof typeof residenceVariants>).map((key) => (
                    <button
                    key={key}
                    onClick={() => setActiveVariant(key)}
                    className={`flex-1 py-4 px-2 min-w-[80px] text-[10px] font-bold uppercase tracking-widest transition-all border border-stone-800 whitespace-nowrap ${
                        activeVariant === key ? 'bg-white text-stone-900' : 'bg-transparent text-stone-500 hover:text-stone-300'
                    }`}
                    >
                    {key}
                    </button>
                ))}
                </div>

                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500" key={activeVariant}>
                    <div className="flex items-center gap-3 mb-4">
                        {residenceVariants[activeVariant].icon}
                        <h3 className="text-3xl text-white font-serif">{residenceVariants[activeVariant].title}</h3>
                    </div>
                    <p className="text-gold-500 text-sm mb-6 font-medium tracking-wide">{residenceVariants[activeVariant].subtitle}</p>
                    <p className="text-stone-400 leading-relaxed mb-8 text-sm">
                        {residenceVariants[activeVariant].desc}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-6 mt-4 border-t border-stone-800 pt-8">
               {residenceHighlights.map((item, idx) => (
                   <div key={idx} className="flex items-center gap-3">
                       <item.icon size={16} className="text-gold-400 shrink-0" />
                       <span className="text-[10px] uppercase tracking-wider font-bold text-stone-300">{item.title}</span>
                   </div>
               ))}
            </div>
          </div>

          {/* Visual */}
          <div className="lg:w-7/12 relative h-[300px] lg:h-auto lg:min-h-[500px] overflow-hidden group">
             <img 
              key={activeVariant}
              src={residenceVariants[activeVariant].image} 
              alt={residenceVariants[activeVariant].title}
              loading="lazy"
              className="w-full h-full object-cover transition-all duration-700 animate-in fade-in group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent opacity-80"></div>
             
             <button 
                onClick={onRequestMasterPlan}
                className="absolute bottom-6 right-6 lg:bottom-10 lg:right-10 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 flex items-center gap-3 hover:bg-white hover:text-stone-900 transition-all group/btn"
             >
                <span className="text-xs uppercase tracking-widest font-semibold">Download Master Plan</span>
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};
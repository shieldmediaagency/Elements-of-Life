import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { amenitiesCategories } from '../data/content';
import { SectionHeader } from './ui/SectionHeader';
import { SectionWrapper } from './ui/SectionWrapper';

export const Amenities: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <SectionWrapper id="amenities">
        
        <SectionHeader 
            label="The Experience"
            title="Everyday luxuries for every mood.."
            description="Whether you seek the adrenaline of sport, the silence of water, or the joy of community, find your space here."
        />

        {/* Centered Navigation Tabs - Wrapped Layout */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 md:mb-12">
            {amenitiesCategories.map((cat, idx) => (
            <button
                key={cat.id}
                onClick={() => setActiveTab(idx)}
                className={`
                    flex items-center gap-2 px-5 py-2.5 rounded-full text-[10px] md:text-xs uppercase tracking-wider transition-all border whitespace-nowrap
                    ${activeTab === idx 
                    ? 'bg-white text-stone-900 border-white shadow-lg shadow-white/10' 
                    : 'bg-stone-900 text-stone-500 border-stone-800 hover:border-stone-600 hover:text-stone-300'}
                `}
            >
                <cat.icon size={14} />
                {cat.label}
            </button>
            ))}
        </div>

        {/* Main Content Card - Overlay Design for Mobile (Data on Board) */}
        <div className="relative bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl h-[550px] md:h-[500px]">
             
             {amenitiesCategories.map((cat, idx) => {
                 const isActive = activeTab === idx;
                 return (
                    <div 
                        key={cat.id} 
                        className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                        <div className="w-full h-full flex flex-col md:flex-row">
                            
                            {/* Image Section */}
                            <div className="absolute inset-0 md:relative md:w-7/12 h-full">
                                <img 
                                    src={cat.image} 
                                    alt={cat.label}
                                    className="w-full h-full object-cover"
                                />
                                {/* Mobile Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/90 to-transparent md:hidden"></div>
                                {/* Desktop Gradient */}
                                <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-transparent via-stone-900/10 to-stone-900"></div>
                            </div>

                            {/* Content Section */}
                            <div className="absolute inset-0 md:relative md:w-5/12 p-6 md:p-12 flex flex-col justify-end md:justify-center z-20">
                                
                                <div className={`transform transition-all duration-700 delay-100 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                                    {/* Icon Badge Desktop */}
                                    <div className="hidden md:flex w-12 h-12 rounded-full bg-stone-800 border border-stone-700 items-center justify-center text-gold-400 mb-6 shadow-lg">
                                        <cat.icon size={22} strokeWidth={1.5} />
                                    </div>

                                    {/* Mobile Header Row */}
                                    <div className="flex items-center gap-3 mb-3 md:hidden">
                                        <div className="p-2 bg-stone-800/80 rounded-full text-gold-400 backdrop-blur-md">
                                            <cat.icon size={18} />
                                        </div>
                                        <h3 className="text-2xl font-serif text-white leading-none">{cat.label}</h3>
                                    </div>
                                    <h3 className="hidden md:block text-4xl font-serif text-white mb-4">{cat.label}</h3>

                                    <p className="text-stone-300 text-xs md:text-sm leading-relaxed mb-6 border-l-2 border-gold-500/50 pl-3 md:pl-4 opacity-90">
                                        {cat.description}
                                    </p>

                                    {/* The List */}
                                    <div className="grid grid-cols-1 gap-2.5">
                                        {cat.items.map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 text-stone-200 text-xs md:text-sm">
                                                <CheckCircle2 size={14} className="text-gold-500 shrink-0" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                 );
             })}
        </div>

    </SectionWrapper>
  );
};
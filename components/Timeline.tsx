import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle2, Radio, Hourglass } from 'lucide-react';
import { timelineStages } from '../data/content';
import { SectionHeader } from './ui/SectionHeader';
import { SectionWrapper } from './ui/SectionWrapper';

export const Timeline: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const ticking = useRef(false);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
    ticking.current = false;
  };

  const onScroll = () => {
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        checkScroll();
      });
      ticking.current = true;
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(() => {
        if (!ticking.current) {
            checkScroll();
        }
      }, 350);
    }
  };

  return (
    <SectionWrapper className="py-20 md:py-32" backgroundClass="bg-stone-950 border-t border-stone-900 overflow-hidden relative group/section">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        
        <SectionHeader 
            label="Transparency Report"
            title="The Making of a Legacy"
            description="We believe in radical transparency. Witness the journey from ground to sky, phase by phase."
            className="text-center mb-12 md:mb-16 max-w-4xl mx-auto"
        />

        {/* Carousel Container */}
        <div className="relative">
            
            <div className="absolute left-2 md:left-4 2xl:-left-12 top-1/2 -translate-y-1/2 z-20">
                <button 
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                aria-label="Scroll left"
                className={`p-3 md:p-4 rounded-full bg-stone-900/80 backdrop-blur-md border border-stone-700 shadow-2xl transition-all duration-300 transform ${canScrollLeft ? 'opacity-100 hover:scale-110 hover:border-gold-500 text-white' : 'opacity-0 cursor-default pointer-events-none'}`}
                >
                <ArrowLeft size={20} />
                </button>
            </div>

            <div className="absolute right-2 md:right-4 2xl:-right-12 top-1/2 -translate-y-1/2 z-20">
                <button 
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                aria-label="Scroll right"
                className={`p-3 md:p-4 rounded-full bg-stone-900/80 backdrop-blur-md border border-stone-700 shadow-2xl transition-all duration-300 transform ${canScrollRight ? 'opacity-100 hover:scale-110 hover:border-gold-500 text-white' : 'opacity-0 cursor-default pointer-events-none'}`}
                >
                <ArrowRight size={20} />
                </button>
            </div>

            {/* Film Strip Container */}
            <div 
                ref={scrollContainerRef}
                onScroll={onScroll}
                className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4 -mx-6 px-6 md:mx-0 md:px-0"
            >
                {timelineStages.map((stage) => {
                    const isActive = stage.status === 'active';
                    const isCompleted = stage.status === 'completed';
                    const isUpcoming = stage.status === 'upcoming';

                    return (
                        <div 
                            key={stage.id} 
                            className={`
                                snap-center shrink-0 w-[85vw] md:w-[300px] h-[400px] md:h-[450px] relative group rounded-sm overflow-hidden border transition-all duration-500
                                ${isActive ? 'border-gold-500/50 shadow-[0_0_30px_rgba(212,175,55,0.1)]' : 'border-stone-800 hover:border-stone-600'}
                            `}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <img 
                                    src={stage.image} 
                                    alt={stage.title} 
                                    loading="lazy"
                                    className={`
                                        w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110
                                        ${isCompleted ? 'grayscale opacity-40' : ''}
                                        ${isActive ? 'grayscale-0 opacity-80' : ''}
                                        ${isUpcoming ? 'grayscale-[50%] blur-[1px] opacity-40 group-hover:blur-0 group-hover:opacity-60 transition-all' : ''}
                                    `}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent"></div>
                                
                                {isActive && (
                                    <div className="absolute inset-0 bg-gold-500/5 animate-pulse pointer-events-none"></div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                                
                                <div className="flex justify-between items-start">
                                    <span className={`font-serif text-3xl font-bold drop-shadow-md ${isActive ? 'text-white' : 'text-stone-300'}`}>0{stage.id}</span>
                                    
                                    {isActive && (
                                        <div className="flex items-center gap-2 bg-gold-500 text-stone-950 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider animate-pulse shadow-lg">
                                            <Radio size={10} className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                                            <Radio size={10} className="relative inline-flex" />
                                            CURRENT
                                        </div>
                                    )}
                                    {isCompleted && (
                                        <div className="flex items-center gap-2 bg-stone-800/80 backdrop-blur text-stone-400 border border-stone-700 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider">
                                            <CheckCircle2 size={10} className="text-green-500" />
                                            Done
                                        </div>
                                    )}
                                    {isUpcoming && (
                                        <div className="flex items-center gap-2 bg-stone-900/50 backdrop-blur text-stone-500 border border-stone-800 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider">
                                            <Hourglass size={10} />
                                            Soon
                                        </div>
                                    )}
                                </div>

                                <div className={`transform transition-all duration-500 ${isUpcoming ? 'translate-y-2 opacity-70 group-hover:translate-y-0 group-hover:opacity-100' : ''}`}>
                                    <span className={`text-[9px] uppercase tracking-[0.2em] font-bold mb-2 block ${isActive ? 'text-gold-400' : 'text-stone-500'}`}>
                                        {stage.date}
                                    </span>
                                    <h3 className={`font-serif text-xl md:text-2xl mb-1 ${isActive ? 'text-white' : 'text-stone-300'}`}>
                                        {stage.title}
                                    </h3>
                                    <p className="text-[10px] text-gold-500/80 uppercase tracking-widest font-medium mb-3">
                                        {stage.subtitle}
                                    </p>
                                    
                                    <div className={`h-[1px] w-full bg-stone-800 mb-3 ${isActive ? 'bg-gold-500/30' : ''}`}>
                                        {isActive && <div className="h-full bg-gold-500 w-1/3 animate-[shimmer_2s_infinite]"></div>}
                                    </div>

                                    <p className="text-stone-400 text-xs leading-relaxed">
                                        {stage.description}
                                    </p>
                                </div>

                            </div>
                        </div>
                    );
                })}
                
                <div className="w-1 md:w-1 shrink-0"></div>
            </div>
        </div>

    </SectionWrapper>
  );
};
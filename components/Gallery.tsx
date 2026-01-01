import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { galleryImages } from '../data/content';
import { SectionHeader } from './ui/SectionHeader';
import { SectionWrapper } from './ui/SectionWrapper';

export const Gallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowLeft') navigateLightbox('prev');
      if (e.key === 'ArrowRight') navigateLightbox('next');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (selectedIndex === null) return;
    if (direction === 'prev') {
      setSelectedIndex(selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1);
    } else {
      setSelectedIndex(selectedIndex === galleryImages.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <SectionWrapper id="gallery" className="py-20 md:py-28" backgroundClass="bg-stone-950 border-t border-stone-800">
      <SectionHeader 
        label="The Visuals" 
        title="Designed for The Discerning" 
        description="A visual journey through the spaces, textures, and light that define Elements of Life."
      />

      <div className="relative group/carousel">
        {/* Carousel Controls - Always visible on mobile, hover on desktop */}
        <button 
            onClick={() => scrollCarousel('left')}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-stone-900/80 backdrop-blur-md p-2 md:p-3 rounded-full text-white border border-stone-700 opacity-100 md:opacity-0 md:group-hover/carousel:opacity-100 transition-all hover:bg-gold-500 hover:text-stone-900 hover:border-gold-500 shadow-xl"
            aria-label="Scroll Left"
        >
            <ChevronLeft size={20} className="md:w-6 md:h-6" />
        </button>
        <button 
            onClick={() => scrollCarousel('right')}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-stone-900/80 backdrop-blur-md p-2 md:p-3 rounded-full text-white border border-stone-700 opacity-100 md:opacity-0 md:group-hover/carousel:opacity-100 transition-all hover:bg-gold-500 hover:text-stone-900 hover:border-gold-500 shadow-xl"
            aria-label="Scroll Right"
        >
            <ChevronRight size={20} className="md:w-6 md:h-6" />
        </button>

        {/* Horizontal Strip */}
        <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 md:gap-6 pb-8 hide-scrollbar snap-x snap-mandatory px-4 md:px-0"
        >
            <style>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
            
            {galleryImages.map((img, idx) => (
            <div 
                key={idx} 
                className="relative flex-shrink-0 w-[85vw] md:w-[450px] aspect-[4/3] rounded-sm overflow-hidden border border-stone-800 bg-stone-900 cursor-zoom-in group snap-center"
                onClick={() => setSelectedIndex(idx)}
            >
                <img 
                src={img.src} 
                alt={img.alt} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-stone-950/90 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between">
                    <span className="text-white text-sm font-medium drop-shadow-md font-serif">{img.alt}</span>
                    <div className="bg-white/10 backdrop-blur text-white p-2 rounded-full hover:bg-white hover:text-stone-900 transition-colors">
                        <Maximize2 size={16} />
                    </div>
                </div>
            </div>
            ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center animate-in fade-in duration-300">
          
          {/* Close Button */}
          <button 
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 text-stone-500 hover:text-white transition-colors z-50 p-2"
          >
            <X size={32} />
          </button>

          {/* Navigation Buttons */}
          <button 
            onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
            className="absolute left-4 md:left-8 text-white/50 hover:text-white p-4 transition-colors z-50 hidden md:block"
          >
            <ChevronLeft size={48} strokeWidth={1} />
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
            className="absolute right-4 md:right-8 text-white/50 hover:text-white p-4 transition-colors z-50 hidden md:block"
          >
            <ChevronRight size={48} strokeWidth={1} />
          </button>

          {/* Main Image */}
          <div 
            className="relative w-full h-full max-w-7xl max-h-[90vh] p-4 flex flex-col items-center justify-center"
            onClick={() => setSelectedIndex(null)} // Click outside image to close
          >
            <img 
              src={galleryImages[selectedIndex].src} 
              alt={galleryImages[selectedIndex].alt} 
              className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-sm animate-in zoom-in-95 duration-300"
              onClick={(e) => e.stopPropagation()} // Click image shouldn't close
            />
            
            <div className="mt-6 text-center" onClick={(e) => e.stopPropagation()}>
                <p className="text-white font-serif text-xl tracking-wide">
                    {galleryImages[selectedIndex].alt}
                </p>
                <p className="text-stone-500 text-xs mt-2 uppercase tracking-widest">
                    {selectedIndex + 1} / {galleryImages.length}
                </p>
            </div>
          </div>

          {/* Mobile Navigation overlay (invisible but clickable areas) */}
          <div className="absolute inset-y-0 left-0 w-1/4 z-40 md:hidden" onClick={() => navigateLightbox('prev')}></div>
          <div className="absolute inset-y-0 right-0 w-1/4 z-40 md:hidden" onClick={() => navigateLightbox('next')}></div>

        </div>
      )}
    </SectionWrapper>
  );
};
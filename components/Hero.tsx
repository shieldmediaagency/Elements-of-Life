import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onRequestInfo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestInfo }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const heroImage = "https://bz6u2h1ooc3ledmb.public.blob.vercel-storage.com/Unitern/Gemini_Generated_Image_7zo3ue7zo3ue7zo3.webp";

  return (
    <section className="relative h-screen w-full overflow-hidden bg-stone-950">
      {/* Background with video and overlay */}
      <div className="absolute inset-0 z-0 bg-stone-900">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={heroImage}
          className="w-full h-full object-cover opacity-60 scale-105"
        >
          <source src="/hero_video.mp4" type="video/mp4" />
          {/* Fallback image for browsers that don't support video */}
          <img
            src={heroImage}
            alt="Elements of Life Architecture"
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/40 to-stone-950"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 md:px-6 mt-0 md:mt-12">
        <div className={`transition-all duration-1000 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

          <div className="flex items-center gap-3 justify-center mb-6">
            <div className="h-[1px] w-8 bg-gold-500"></div>
            <p className="text-gold-400 tracking-[0.2em] uppercase text-[10px] md:text-xs font-semibold">Old Madras Road, Bengaluru</p>
            <div className="h-[1px] w-8 bg-gold-500"></div>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[1.1] md:leading-tight">
            Elements <span className="italic text-stone-400 font-light">of</span> Life
          </h1>

          <p className="max-w-2xl mx-auto text-stone-200 text-base md:text-xl font-light leading-relaxed mb-10 px-4 md:px-0">
            A boutique community of G+14 floors. <br className="hidden md:block" />
            <span className="text-stone-400 text-sm md:text-base mt-2 block">
              No common walls. 4-Sided Open. 100% Vastu Compliant.
            </span>
          </p>

          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center w-full px-8 md:px-0">
            <button
              onClick={() => document.getElementById('residences')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-stone-900 px-8 py-4 w-full md:w-auto md:min-w-[200px] text-xs font-bold tracking-widest uppercase hover:bg-stone-200 transition-colors duration-300"
            >
              View Plans
            </button>
            <button
              onClick={onRequestInfo}
              className="flex items-center gap-3 text-white px-8 py-4 w-full md:w-auto border border-white/30 hover:bg-white/10 transition-colors duration-300 md:min-w-[200px] justify-center group backdrop-blur-sm"
            >
              <span className="text-xs font-bold tracking-widest uppercase">Book A Site Visit</span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <ChevronDown size={24} className="text-white" />
      </div>
    </section>
  );
};
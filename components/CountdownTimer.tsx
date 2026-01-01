import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  onBookVisit: () => void;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ onBookVisit }) => {
  // Set target date to approx 300 days from now for demo purposes
  const [timeLeft, setTimeLeft] = useState({
    days: 300,
    hours: 20,
    minutes: 45,
    seconds: 0
  });

  useEffect(() => {
    // In a real app, calculate this based on a fixed date: new Date("2025-12-31").getTime()
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number, label: string }) => (
    <div className="flex flex-col items-center mx-3 md:mx-6">
      <span className="font-serif text-3xl md:text-5xl text-white font-light tracking-tighter tabular-nums">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-[9px] md:text-[10px] text-stone-600 uppercase tracking-[0.2em] mt-2 font-medium">
        {label}
      </span>
    </div>
  );

  return (
    <section className="py-28 bg-stone-950 border-t border-stone-800 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background texture and glow */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto px-6 text-center">
        
        {/* Timer Badge */}
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="inline-block text-gold-500 text-[10px] uppercase tracking-[0.2em] border border-stone-800/80 bg-stone-900/50 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-lg">
                Phase 1 Inventory Release
            </span>
        </div>

        {/* Timer */}
        <div className="flex flex-wrap justify-center items-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            <TimeUnit value={timeLeft.days} label="Days" />
            <div className="h-8 w-[1px] bg-stone-800 -rotate-12 hidden md:block opacity-50"></div>
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <div className="h-8 w-[1px] bg-stone-800 -rotate-12 hidden md:block opacity-50"></div>
            <TimeUnit value={timeLeft.minutes} label="Mins" />
            <div className="h-8 w-[1px] bg-stone-800 -rotate-12 hidden md:block opacity-50"></div>
            <TimeUnit value={timeLeft.seconds} label="Secs" />
        </div>
        
        {/* Final CTA Copy */}
        <h2 className="font-serif text-3xl md:text-5xl text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Only 4 Corner Units Per Floor.
        </h2>
        <p className="text-stone-400 mb-10 max-w-lg mx-auto leading-relaxed text-sm md:text-base animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            Experience the 3-bed home that feels like a private villa. <br className="hidden md:block" />
            Schedule a guided site visit with our team before the pricing revision.
        </p>
        
        {/* CTA Button */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
            <button 
                onClick={onBookVisit}
                className="bg-gold-500 text-stone-950 px-10 py-5 text-xs font-bold uppercase tracking-[0.15em] hover:bg-gold-400 transition-all transform hover:-translate-y-1 shadow-[0_20px_40px_-15px_rgba(197,160,40,0.3)]"
            >
                Book A Private Visit
            </button>
        </div>

        {/* Contact Line */}
        <p className="mt-8 text-stone-600 text-xs animate-in fade-in duration-1000 delay-500">
            Direct Sales Director: <span className="text-stone-500 hover:text-stone-300 transition-colors cursor-pointer">+91-9880017751</span>
        </p>
      </div>
    </section>
  );
};
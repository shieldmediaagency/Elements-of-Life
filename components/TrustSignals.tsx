import React from 'react';
import { ShieldCheck, LayoutTemplate, Compass } from 'lucide-react';

export const TrustSignals: React.FC = () => {
  return (
    <section className="bg-stone-900 border-b border-stone-800 py-10 px-6">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <div className="flex flex-col items-center text-center opacity-90 hover:opacity-100 transition-opacity">
                    <ShieldCheck size={32} className="text-gold-400 mb-3" />
                    <div className="flex flex-col">
                        <span className="text-white text-base font-medium mb-1">RERA Registered</span>
                        <span className="text-stone-500 text-[10px] uppercase tracking-wide break-all max-w-[200px] md:max-w-none">PRM/KA/RERA/1251/446/PR/230425/007689</span>
                    </div>
                </div>

                <div className="flex flex-col items-center text-center opacity-90 hover:opacity-100 transition-opacity">
                    <Compass size={32} className="text-gold-400 mb-3" />
                    <div className="flex flex-col">
                        <span className="text-white text-base font-medium mb-1">100% Vastu Compliant</span>
                        <span className="text-stone-500 text-[10px] uppercase tracking-wide">Balanced Positive Space</span>
                    </div>
                </div>

                <div className="flex flex-col items-center text-center opacity-90 hover:opacity-100 transition-opacity">
                    <LayoutTemplate size={32} className="text-gold-400 mb-3" />
                    <div className="flex flex-col">
                        <span className="text-white text-base font-medium mb-1">80% Open Space</span>
                        <span className="text-stone-500 text-[10px] uppercase tracking-wide">Low Density Living</span>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};
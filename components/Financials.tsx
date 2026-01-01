import React, { useState } from 'react';
import { TrendingUp, Scale, Check } from 'lucide-react';
import { pricingData } from '../data/content';
import { formatCurrency } from '../utils/format';
import { SectionHeader } from './ui/SectionHeader';
import { SectionWrapper } from './ui/SectionWrapper';

interface FinancialsProps {
  onRequestPriceSheet: () => void;
}

export const Financials: React.FC<FinancialsProps> = ({ onRequestPriceSheet }) => {
  const [unitType, setUnitType] = useState<keyof typeof pricingData>('Dawn (1791)');
  
  const currentData = pricingData[unitType];
  const currentPrice = currentData.price;
  const sqft = currentData.size;

  return (
    <section id="value" className="py-24 px-6 bg-stone-950">
      <div className="max-w-6xl mx-auto">
        
        <SectionHeader 
            label="Rational Decision Making"
            title="Value Assessment"
            description="A transparent breakdown of cost versus value, ensuring your investment is grounded in logic, not just emotion."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-stone-900 border border-stone-800 rounded-none overflow-hidden">
          
          {/* Context Column */}
          <div className="lg:col-span-5 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-stone-800">
             <h3 className="text-xl text-white font-serif mb-6">Why this price point?</h3>
             <p className="text-stone-400 text-sm leading-relaxed mb-8">
                Elements of Life is offering G+14 low-density living at ~₹9,000/sqft. 
                High-density towers nearby are quoting 15-20% higher for significantly less UDS (Undivided Share of Land).
             </p>
             
             <div className="space-y-4">
                <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center shrink-0">
                        <Scale size={14} className="text-gold-400" />
                    </div>
                    <div>
                        <h4 className="text-white text-sm font-medium">UDS Advantage</h4>
                        <p className="text-stone-500 text-xs mt-1">
                            With only 4 units per floor, your land ownership share is double that of typical 8-unit-per-floor towers.
                        </p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center shrink-0">
                        <TrendingUp size={14} className="text-gold-400" />
                    </div>
                    <div>
                        <h4 className="text-white text-sm font-medium">Infrastructure Upside</h4>
                        <p className="text-stone-500 text-xs mt-1">
                            5 mins from VIBGYOR & 10 mins from Whitefield. The OMR growth corridor is projected for 12% annual appreciation.
                        </p>
                    </div>
                </div>
             </div>
          </div>

          {/* Calculator Column */}
          <div className="lg:col-span-7 p-8 md:p-12 bg-stone-850">
            <div className="flex justify-between items-center mb-8">
                <h3 className="text-white font-medium">Indicative Cost</h3>
                <div className="flex bg-stone-900 rounded p-1 gap-1">
                    {(Object.keys(pricingData) as Array<keyof typeof pricingData>).map((type) => (
                        <button
                        key={type}
                        onClick={() => setUnitType(type)}
                        className={`px-3 py-2 text-[10px] uppercase tracking-wider transition-all rounded-sm ${
                            unitType === type 
                            ? 'bg-stone-700 text-white shadow-sm' 
                            : 'text-stone-500 hover:text-stone-300'
                        }`}
                        >
                        {type.split(' ')[0]}
                        </button>
                    ))}
                </div>
            </div>

            <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-stone-700/50 pb-4">
                    <span className="text-stone-400 text-sm">Agreement Value</span>
                    <span className="text-xl text-white font-serif">{formatCurrency(currentPrice)}</span>
                </div>
                
                <div className="flex justify-between items-center border-b border-stone-700/50 pb-4">
                    <div className="flex flex-col">
                        <span className="text-stone-400 text-sm">Configuration</span>
                        <span className="text-[10px] text-stone-600">Super Built-up Area</span>
                    </div>
                    <span className="text-stone-500 font-mono text-sm">{sqft} Sq. Ft.</span>
                </div>

                <div className="flex justify-between items-center pt-2">
                    <span className="text-gold-400 text-sm uppercase tracking-wide font-semibold">Unlock Full Price Sheet</span>
                    <button 
                      onClick={onRequestPriceSheet}
                      className="text-xs text-white underline hover:text-gold-400 transition-colors"
                    >
                      Request Now
                    </button>
                </div>
            </div>

            <div className="mt-8 bg-stone-900/50 p-4 rounded border border-stone-800 flex items-start gap-3">
                <Check size={16} className="text-green-500 mt-1 shrink-0" />
                <p className="text-stone-500 text-xs leading-relaxed">
                    <strong>Launch Offer:</strong> Expressions of Interest (EOI) submitted this week are eligible for the pre-launch base price.
                </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
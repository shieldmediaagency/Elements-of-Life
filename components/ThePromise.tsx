import React from 'react';
import { LucideIcon } from 'lucide-react';
import { promiseData } from '../data/content';
import { SectionHeader } from './ui/SectionHeader';
import { SectionWrapper } from './ui/SectionWrapper';

interface PromiseCardProps {
  title: string;
  description?: string;
  icon: LucideIcon;
  image: string;
  className?: string;
  compact?: boolean;
}

const PromiseCard: React.FC<PromiseCardProps> = ({ title, description, icon: Icon, image, className = "", compact = false }) => {
  return (
    <div className={`relative group overflow-hidden rounded-sm border border-stone-800 bg-stone-900 cursor-pointer ${className}`}>
      
      {/* Image Layer */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110 opacity-60 md:opacity-50 md:group-hover:opacity-70 grayscale-[30%] md:grayscale-[50%] md:group-hover:grayscale-0"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-1000" />
      <div className="hidden md:block absolute inset-0 border border-transparent group-hover:border-gold-500/20 transition-colors duration-700 pointer-events-none rounded-sm"></div>

      <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-8">
        <div className="mb-2 md:mb-4 transform translate-y-0 opacity-100 md:translate-y-8 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-700 ease-out">
           <Icon className="text-gold-400 drop-shadow-md w-5 h-5 md:w-7 md:h-7" strokeWidth={1.5} />
        </div>
        <h3 className="text-white font-serif text-lg md:text-2xl lg:text-3xl leading-tight mb-2 drop-shadow-lg transform transition-transform duration-700 md:group-hover:-translate-y-1">
          {title}
        </h3>
        <div className="h-[1px] bg-gold-500/50 mb-2 md:mb-4 w-8 md:w-12 md:group-hover:w-20 transition-all duration-1000 ease-out"></div>
        {description && (
          <p className="text-stone-300 text-xs md:text-sm leading-relaxed opacity-100 md:opacity-70 md:group-hover:opacity-100 transition-opacity duration-700 delay-75 max-w-[90%]">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export const ThePromise: React.FC = () => {
  return (
    <SectionWrapper id="philosophy" className="py-16 md:py-24" backgroundClass="bg-stone-950 relative border-t border-stone-900">
        
        <SectionHeader 
            label="Five Experiences"
            title={<>Five Quiet Forces.<br/>One Timeless Address.</>}
            description="Homes here aren’t just built, they’re breathed into life. Light moves freely, air finds its own way."
            className="text-center mb-10 md:mb-16 max-w-3xl mx-auto"
        />

        <div className="grid grid-cols-2 md:grid-cols-12 gap-2 md:gap-4 md:auto-rows-[300px]">
            {promiseData.map((item) => (
              <PromiseCard 
                key={item.id}
                title={item.title}
                description={item.description}
                icon={item.icon}
                image={item.image}
                className={item.className}
                compact={item.compact}
              />
            ))}
        </div>

    </SectionWrapper>
  );
};
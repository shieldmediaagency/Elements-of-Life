import React from 'react';

interface SectionHeaderProps {
  label: string;
  title: string | React.ReactNode;
  description?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ label, title, description, className = "text-center max-w-3xl mx-auto mb-10 md:mb-14" }) => {
  return (
    <div className={className}>
      <div className="flex items-center gap-3 justify-center mb-4">
        <div className="h-[1px] w-8 bg-gold-500/50"></div>
        <span className="text-gold-400 tracking-widest uppercase text-xs font-semibold">{label}</span>
        <div className="h-[1px] w-8 bg-gold-500/50"></div>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl text-white mb-6 leading-tight">{title}</h2>
      {description && (
        <p className="text-stone-400 text-sm leading-relaxed max-w-xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};
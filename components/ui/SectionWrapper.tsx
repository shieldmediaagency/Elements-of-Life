import React from 'react';

interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  backgroundClass?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  id, 
  children, 
  className = "py-20 md:py-28", 
  backgroundClass = "bg-stone-950 border-t border-stone-800"
}) => {
  return (
    <section id={id} className={`${className} ${backgroundClass}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  );
};
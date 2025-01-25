// src/components/shared/SectionHeader.tsx

import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="relative flex items-center justify-center my-16">
      <h1 className="text-6xl md:text-8xl font-bold text-white opacity-10 absolute">{title}</h1>
      <h2 className="text-3xl md:text-5xl font-bold text-primary z-10">{subtitle}</h2>
    </div>
  );
};

export default SectionHeader;

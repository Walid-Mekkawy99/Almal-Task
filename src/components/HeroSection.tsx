import React from 'react';
import { HeroHeader } from './HeroHeader';
import { StatisticsGrid } from './StatisticsGrid';
import { HighlightCard } from './HighlightCard';
import { BlurEffect } from './BlurEffect';
import { HeroImages } from './HeroImages';

export const HeroSection: React.FC = () => {
  return (
    <main className="overflow-hidden relative w-full bg-white min-h-[1024px] max-md:min-h-[800px] max-sm:min-h-[900px]">
      <div className="absolute top-0 left-0 w-full bg-gray-900 h-[1024px] z-[1] max-md:h-[800px] max-sm:h-[900px]" />

      <HeroHeader />
      <StatisticsGrid />
      <HighlightCard />
      <BlurEffect />
      <HeroImages />
    </main>
  );
};

export default HeroSection;

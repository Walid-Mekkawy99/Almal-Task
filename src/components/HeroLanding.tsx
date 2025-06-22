import React from 'react';
import { BackgroundEffects } from './BackgroundEffects';
import { Navigation } from './Navigation';
import { HeroContent } from './HeroContent';
import { NewsletterSignup } from './NewsletterSignup';
import { StatsSection } from './StatsSection';
import { ScrollIndicator } from './ScrollIndicator';

export const HeroLanding: React.FC = () => {
  return (
    <main className="overflow-hidden relative w-screen h-screen">
      <BackgroundEffects />
      <Navigation />
      <HeroContent />
      <NewsletterSignup />
      <ScrollIndicator />
      <StatsSection />
    </main>
  );
};

export default HeroLanding;

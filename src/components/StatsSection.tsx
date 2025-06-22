<<<<<<< HEAD
import React from 'react';

interface StatItemProps {
  number: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ number, label }) => {
  return (
    <div className="flex flex-col items-start max-md:items-center">
      <div className="mb-2.5 text-8xl font-bold leading-none text-white max-md:text-7xl max-sm:text-6xl">
        {number}
      </div>
      <div className="text-4xl text-white opacity-60 max-md:text-3xl max-md:text-center max-sm:text-2xl">
        {label}
      </div>
    </div>
  );
};

export const StatsSection: React.FC = () => {
  return (
    <section className="flex absolute bottom-10 left-2/4 justify-between items-end px-16 py-0 w-full -translate-x-2/4 max-w-[1330px] max-md:flex-col max-md:gap-10 max-md:items-center max-md:px-10 max-md:py-0 max-md:bottom-[60px] max-sm:bottom-10 max-sm:gap-8 max-sm:px-5 max-sm:py-0">
      <StatItem number="500+" label="Keynote Speakers" />
      <StatItem number="1000+" label="Speakers" />
      <StatItem number="15K+" label="Attendees" />
    </section>
  );
};
=======
import React from 'react';

interface StatItemProps {
  number: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ number, label }) => {
  return (
    <div className="flex flex-col items-start max-md:items-center">
      <div className="mb-2.5 text-8xl font-bold leading-none text-white max-md:text-7xl max-sm:text-6xl">
        {number}
      </div>
      <div className="text-4xl text-white opacity-60 max-md:text-3xl max-md:text-center max-sm:text-2xl">
        {label}
      </div>
    </div>
  );
};

export const StatsSection: React.FC = () => {
  return (
    <section className="flex absolute bottom-10 left-2/4 justify-between items-end px-16 py-0 w-full -translate-x-2/4 max-w-[1330px] max-md:flex-col max-md:gap-10 max-md:items-center max-md:px-10 max-md:py-0 max-md:bottom-[60px] max-sm:bottom-10 max-sm:gap-8 max-sm:px-5 max-sm:py-0">
      <StatItem number="500+" label="Keynote Speakers" />
      <StatItem number="1000+" label="Speakers" />
      <StatItem number="15K+" label="Attendees" />
    </section>
  );
};
>>>>>>> be6f13213831057bd4f23a1e62ee1bfc72b950ff

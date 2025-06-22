import React from 'react';

export const HighlightCard: React.FC = () => {
  return (
    <article className="flex absolute left-28 z-10 flex-col gap-2 justify-center items-center p-6 rounded-2xl border border-white border-solid backdrop-blur-[22px] h-[152px] top-[756px] w-[538px] max-md:left-[60px] max-md:top-[600px] max-md:w-[400px] max-sm:left-5 max-sm:p-5 max-sm:top-[580px] max-sm:w-[280px]">
      <h2 className="self-stretch text-3xl leading-10 text-white max-sm:text-2xl">
        120+ Billion
      </h2>
      <p className="self-stretch text-base leading-6 text-neutral-400 max-sm:text-sm">
        Many of them have tried new world fantasy
      </p>
    </article>
  );
};

import React from 'react';

interface StatisticItemProps {
  value: string;
  label: React.ReactNode;
}


export const StatisticItem: React.FC<StatisticItemProps> = ({ value, label }) => {
  return (
    <div className="flex flex-col gap-1 items-start w-auto h-[100px] max-sm:gap-0.5">
      <div className="text-3xl leading-10 text-white max-sm:text-3xl">
        {value}
      </div>
      <div className="text-base leading-6 text-neutral-400 max-sm:text-sm">
        {label}
      </div>
    </div>
  );
};

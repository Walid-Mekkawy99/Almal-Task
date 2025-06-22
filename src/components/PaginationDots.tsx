import React from 'react';

interface PaginationDotsProps {
  totalDots: number;
  currentIndex: number;
  onDotClick: (index: number) => void;
}

export const PaginationDots: React.FC<PaginationDotsProps> = ({
  totalDots,
  currentIndex,
  onDotClick
}) => {
  return (
    <div className="absolute left-[658px] top-[1010px] w-[218px] h-[14px] flex items-start gap-5">
      {Array.from({ length: totalDots }, (_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className="w-[14px] h-[14px] rounded-full transition-colors hover:opacity-80"
          style={{
            backgroundColor: index === currentIndex ? '#010101' : '#C4C4C4'
          }}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

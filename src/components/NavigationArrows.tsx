import React from 'react';

interface NavigationArrowsProps {
  onPrevious: () => void;
  onNext: () => void;
}

export const NavigationArrows: React.FC<NavigationArrowsProps> = ({ onPrevious, onNext }) => {
  return (
    <>
      <button
        onClick={onPrevious}
        className="absolute left-[113px] top-[987px] w-[60px] h-[60px] flex items-center justify-center hover:opacity-80 transition-opacity"
        aria-label="Previous image"
      >
        <svg
          width="61"
          height="60"
          viewBox="0 0 61 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[60px] h-[60px]"
        >
          <path
            d="M48.4622 28.0639L20.068 27.8038L31.42 16.6579L28.7928 13.9822L12.8728 29.6131L28.5038 45.5331L31.1796 42.9059L20.0334 31.5537L48.4279 31.8138L48.4622 28.0639Z"
            fill="#3C3C3C"
          />
        </svg>
      </button>

      <button
        onClick={onNext}
        className="absolute left-[1376px] top-[987px] w-[60px] h-[60px] flex items-center justify-center hover:opacity-80 transition-opacity"
        aria-label="Next image"
      >
        <svg
          width="61"
          height="60"
          viewBox="0 0 61 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[60px] h-[60px]"
        >
          <path
            d="M23.3721 31.6512L51.7675 31.6512L40.5181 42.9006L43.1697 45.5522L58.9458 29.7761L43.1697 14L40.5181 16.6516L51.7677 27.9012L23.3721 27.9012V31.6512Z"
            fill="#3C3C3C"
          />
          <path
            d="M23.3721 31.6512L51.7675 31.6512L40.5181 42.9006L43.1697 45.5522L58.9458 29.7761L43.1697 14L40.5181 16.6516L51.7677 27.9012L23.3721 27.9012V31.6512Z"
            fill="#3C3C3C"
          />
        </svg>
      </button>
    </>
  );
};

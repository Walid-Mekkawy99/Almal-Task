"use client";
import React, { useState } from 'react';
import { BlurBackground } from './BlurBackground';
import { CarouselDescription } from './CarouselDescription';
import { CarouselImage } from './CarouselImage';
import { NavigationArrows } from './NavigationArrows';
import { PaginationDots } from './PaginationDots';

interface CarouselItem {
  id: string;
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  items?: CarouselItem[];
  description?: string;
}

const defaultItems: CarouselItem[] = [
  {
    id: '1',
    src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7444f12574d3770b314223988f4f7b6fe0148cdf?placeholderIfAbsent=true',
    alt: 'Frame 11106'
  },
  {
    id: '2',
    src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7444f12574d3770b314223988f4f7b6fe0148cdf?placeholderIfAbsent=true',
    alt: 'Frame 11106'
  },
  {
    id: '3',
    src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7444f12574d3770b314223988f4f7b6fe0148cdf?placeholderIfAbsent=true',
    alt: 'Frame 11106'
  },
  {
    id: '4',
    src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7444f12574d3770b314223988f4f7b6fe0148cdf?placeholderIfAbsent=true',
    alt: 'Frame 11106'
  },
  {
    id: '5',
    src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7444f12574d3770b314223988f4f7b6fe0148cdf?placeholderIfAbsent=true',
    alt: 'Frame 11106'
  },
  {
    id: '6',
    src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7444f12574d3770b314223988f4f7b6fe0148cdf?placeholderIfAbsent=true',
    alt: 'Frame 11106'
  },
  {
    id: '7',
    src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7444f12574d3770b314223988f4f7b6fe0148cdf?placeholderIfAbsent=true',
    alt: 'Frame 11106'
  }
];

const defaultDescription = "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco. Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco.";

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  items = defaultItems,
  description = defaultDescription
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const currentItem = items[currentIndex];

  return (
    <main className="flex relative shrink-0 justify-center items-center w-full bg-white min-h-[1117px]">
      <div className="relative shrink-0 w-full h-[1117px]">
        <section className="inline-flex absolute justify-end items-center bg-white h-[1024px] left-[47px] top-[89px] w-[1440px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c257acc98a357ff9210b6fd1e830c6d28fbf305?placeholderIfAbsent=true"
            alt="Layer_1"
            className="absolute opacity-50 mix-blend-difference blur-[2px] h-[1738px] left-[-150px] top-[-221px] w-[1840px]"
          />
        </section>

        <BlurBackground />

        <CarouselDescription text={description} />

        {currentItem && (
          <CarouselImage
            src={currentItem.src}
            alt={currentItem.alt}
          />
        )}

        <PaginationDots
          totalDots={items.length}
          currentIndex={currentIndex}
          onDotClick={handleDotClick}
        />

        <NavigationArrows
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      </div>
    </main>
  );
};

export default ImageCarousel;

<<<<<<< HEAD
import React from 'react';

interface CarouselImageProps {
  src: string;
  alt: string;
}

export const CarouselImage: React.FC<CarouselImageProps> = ({ src, alt }) => {
  return (
    <div className="absolute shrink-0 h-[480px] left-[90px] top-[449px] w-[1405px] max-md:h-[400px] max-md:left-[5%] max-md:w-[90%] max-sm:h-[300px] max-sm:left-[2.5%] max-sm:top-[350px] max-sm:w-[95%]">
      <img
        src={src}
        alt={alt}
        className="flex absolute top-0 left-0 gap-14 items-start h-[480px] w-[1405px] max-md:w-full max-md:h-[400px] max-sm:w-full max-sm:h-[300px] object-cover"
      />
    </div>
  );
};
=======
import React from 'react';

interface CarouselImageProps {
  src: string;
  alt: string;
}

export const CarouselImage: React.FC<CarouselImageProps> = ({ src, alt }) => {
  return (
    <div className="absolute shrink-0 h-[480px] left-[90px] top-[449px] w-[1405px] max-md:h-[400px] max-md:left-[5%] max-md:w-[90%] max-sm:h-[300px] max-sm:left-[2.5%] max-sm:top-[350px] max-sm:w-[95%]">
      <img
        src={src}
        alt={alt}
        className="flex absolute top-0 left-0 gap-14 items-start h-[480px] w-[1405px] max-md:w-full max-md:h-[400px] max-sm:w-full max-sm:h-[300px] object-cover"
      />
    </div>
  );
};
>>>>>>> be6f13213831057bd4f23a1e62ee1bfc72b950ff

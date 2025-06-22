import React from 'react';

export const Navigation: React.FC = () => {
  return (
    <nav className="flex absolute left-2/4 z-10 gap-12 justify-center items-center -translate-x-2/4 top-[47px] max-md:gap-8 max-md:top-[30px] max-sm:hidden">
      <a
        href="#home"
        className="text-base cursor-pointer duration-[0.3s] ease-[ease] text-stone-500 transition-[color] max-md:text-sm hover:text-stone-700"
      >
        Home
      </a>
      <a
        href="#events"
        className="text-base cursor-pointer duration-[0.3s] ease-[ease] text-stone-500 transition-[color] max-md:text-sm hover:text-stone-700"
      >
        Events
      </a>
      <a
        href="#about"
        className="text-base cursor-pointer duration-[0.3s] ease-[ease] text-stone-500 transition-[color] max-md:text-sm hover:text-stone-700"
      >
        About us
      </a>
      <a
        href="#gallery"
        className="text-base cursor-pointer duration-[0.3s] ease-[ease] text-stone-500 transition-[color] max-md:text-sm hover:text-stone-700"
      >
        Gallery
      </a>
      <a
        href="#contact"
        className="text-base cursor-pointer duration-[0.3s] ease-[ease] text-stone-500 transition-[color] max-md:text-sm hover:text-stone-700"
      >
        Contact us
      </a>
    </nav>
  );
};

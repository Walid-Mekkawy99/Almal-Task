"use client";
import React, { useState } from 'react';

export const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
  };

  return (
    <section className="absolute left-2/4 h-14 -translate-x-2/4 top-[573px] w-[405px] max-md:top-[520px] max-sm:top-[420px] max-sm:w-[90%]">
      <form onSubmit={handleSubmit} className="relative">
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<svg id=\"1:314\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"envelope-icon\" style=\"width: 24px; height: 24px; opacity: 0.3; position: absolute; left: 35px; top: 16px\"> <g opacity=\"0.3\"> <path d=\"M21.75 6.75V17.25C21.75 17.8467 21.5129 18.419 21.091 18.841C20.669 19.2629 20.0967 19.5 19.5 19.5H4.5C3.90326 19.5 3.33097 19.2629 2.90901 18.841C2.48705 18.419 2.25 17.8467 2.25 17.25V6.75M21.75 6.75C21.75 6.15326 21.5129 5.58097 21.091 5.15901C20.669 4.73705 20.0967 4.5 19.5 4.5H4.5C3.90326 4.5 3.33097 4.73705 2.90901 5.15901C2.48705 5.58097 2.25 6.15326 2.25 6.75M21.75 6.75V6.993C21.75 7.37715 21.6517 7.75491 21.4644 8.0903C21.2771 8.42569 21.0071 8.70754 20.68 8.909L13.18 13.524C12.8252 13.7425 12.4167 13.8582 12 13.8582C11.5833 13.8582 11.1748 13.7425 10.82 13.524L3.32 8.91C2.99292 8.70854 2.72287 8.42669 2.53557 8.0913C2.34827 7.75591 2.24996 7.37815 2.25 6.994V6.75\" stroke=\"#373737\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </g> </svg>",
            }}
          />
        </div>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Join Our Community"
          className="absolute top-0 left-0 h-14 border border-solid border-neutral-700 rounded-[50px] w-[405px] max-sm:w-full bg-transparent pl-[70px] pr-[60px] text-base text-neutral-700 placeholder:text-neutral-700 placeholder:opacity-30 focus:outline-none focus:border-neutral-500"
          required
        />

        <button
          type="submit"
          className="absolute top-[7px] left-[356px] w-[42px] h-[42px] rounded-full bg-neutral-700 flex items-center justify-center hover:bg-neutral-600 transition-colors duration-300"
        >
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"arrow-icon\" style=\"width: 24px; height: 24px\"> <path d=\"M14.43 5.92999L20.5 12L14.43 18.07\" stroke=\"white\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M3.5 12H20.33\" stroke=\"white\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg>",
            }}
          />
        </button>
      </form>
    </section>
  );
};

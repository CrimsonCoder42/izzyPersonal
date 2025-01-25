// src/components/sections/Hero.tsx

import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { PlayIcon } from '@heroicons/react/solid';

const Hero: React.FC = () => {
  const typedElement = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const options = {
      strings: [
        'Web Designer',
        'Web Developer',
        'Front End Developer',
        'Apps Designer',
        'Apps Developer',
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    };

    const typed = new Typed(typedElement.current!, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      id="home"
      className="bg-primary flex items-center py-20 min-h-screen"
    >
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h3 className="text-white text-xl mb-2">I'm</h3>
          <h1 className="text-5xl font-bold text-white mb-4">Kate Winslet</h1>
          <h2 className="text-3xl text-white">
            <span ref={typedElement}></span>
          </h2>
          <div className="mt-6 flex justify-center lg:justify-start space-x-4">
            <a href="#" className="btn btn-outline-light">
              Download CV
            </a>
            <button
              onClick={() =>
                window.open('https://www.youtube.com/embed/DWRcNpR6Kdc', '_blank')
              }
              className="flex items-center bg-white text-primary px-4 py-2 rounded"
            >
              <PlayIcon className="h-5 w-5 mr-2" />
              Play Video
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img
            src="/assets/images/profile.jpg"
            alt="Profile"
            className="w-80 h-80 rounded-full mx-auto shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

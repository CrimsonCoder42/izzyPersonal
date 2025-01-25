// src/components/sections/About.tsx

import React from 'react';
import SectionHeader from '../shared/SectionHeader';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto">
        <SectionHeader title="About" subtitle="About Me" />
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <img
              src="/assets/images/about.jpg"
              alt="About"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <h3 className="text-2xl font-bold mb-4">UI/UX Designer & Web Developer</h3>
            <p className="mb-6">
              Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod.
              Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo
              sit ipsum. Amet dolor stet lorem diam dolor justo et dolor dolor dolor.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h6 className="font-semibold">Name:</h6>
                <p className="text-gray-600">Kate Winslet</p>
              </div>
              <div>
                <h6 className="font-semibold">Birthday:</h6>
                <p className="text-gray-600">1 April 1990</p>
              </div>
              <div>
                <h6 className="font-semibold">Degree:</h6>
                <p className="text-gray-600">Master</p>
              </div>
              <div>
                <h6 className="font-semibold">Experience:</h6>
                <p className="text-gray-600">10 Years</p>
              </div>
              <div>
                <h6 className="font-semibold">Phone:</h6>
                <p className="text-gray-600">+012 345 6789</p>
              </div>
              <div>
                <h6 className="font-semibold">Email:</h6>
                <p className="text-gray-600">info@example.com</p>
              </div>
              <div>
                <h6 className="font-semibold">Address:</h6>
                <p className="text-gray-600">123 Street, New York, USA</p>
              </div>
              <div>
                <h6 className="font-semibold">Freelance:</h6>
                <p className="text-gray-600">Available</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="btn btn-outline-primary">
                Hire Me
              </a>
              <a href="#" className="btn btn-outline-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

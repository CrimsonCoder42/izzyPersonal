// src/components/sections/TestimonialSection.tsx
import React, { useState, useEffect, useRef } from 'react';

// Import logos
import a24Logo from '../../assets/logos/A24-Logo_Use_this.png';
import appleLogo from '../../assets/logos/appleLogo.png';
import cbsLogo from '../../assets/logos/cbs-logo-png-transparent.png';
import consulateLogo from '../../assets/logos/consulate.svg';
import disneyLogo from '../../assets/logos/Disney.png';
import filmnationLogo from '../../assets/logos/filmnation-entertainment-logo-png_seeklogo-447370.png';
import hboLogo from '../../assets/logos/HBO.png';
import huluLogo from '../../assets/logos/hulu-logo.png';
import killerFilmsLogo from '../../assets/logos/Killer_Films_logo_black_on_white.png';
import miramaxLogo from '../../assets/logos/miramax-films-logo-png-transparent.png';
import neonLogo from '../../assets/logos/Neon_Logo_Black_on_white.png';
import netflixLogo from '../../assets/logos/Netflix_Logo_RGB.png';
import paramountLogo from '../../assets/logos/paramount.png';
import peacockLogo from '../../assets/logos/Peacock_Logo_black_on_white.png';
import primeLogo from '../../assets/logos/prime.png';
import searchlightLogo from '../../assets/logos/searchlight-pictures-black-on-white.png';
import showtimeLogo from '../../assets/logos/500px-Showtime.svg.png';
import starzLogo from '../../assets/logos/STARZ_idYTmRC7kq_0.png';

const TestimonialSection: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Define logos with their alt text, styling requirements, and custom sizes
  const logos = [
    {
      src: netflixLogo,
      alt: 'Netflix',
      darkBackground: false,
      width: '80%',
      height: '40px'
    },
    {
      src: hboLogo,
      alt: 'HBO',
      darkBackground: false,
      width: '70%',
      height: '35px'
    },
    {
      src: showtimeLogo,
      alt: 'Showtime',
      darkBackground: false,
      width: '65%',
      height: '35px'
    },
    {
      src: huluLogo,
      alt: 'Hulu',
      darkBackground: false,
      width: '60%',
      height: '30px'
    },
    {
      src: disneyLogo,
      alt: 'Disney',
      darkBackground: false,
      width: '80%',
      height: '70px'
    },
    {
      src: appleLogo,
      alt: 'Apple TV+',
      darkBackground: false,
      width: '35%',
      height: '40px'
    },
    {
      src: primeLogo,
      alt: 'Amazon',
      darkBackground: false,
      width: '70%',
      height: '45px'
    },
    {
      src: miramaxLogo,
      alt: 'Miramax',
      darkBackground: false,
      width: '80%',
      height: '85px'
    },
    {
      src: filmnationLogo,
      alt: 'Filmnation',
      darkBackground: false,
      width: '90%',
      height: '70px'
    },
    {
      src: starzLogo,
      alt: 'Starz',
      darkBackground: false,
      width: '60%',
      height: '30px'
    },
    {
      src: a24Logo,
      alt: 'A24',
      darkBackground: false,
      width: '50%',
      height: '30px'
    },
    {
      src: neonLogo,
      alt: 'Neon',
      darkBackground: false,
      width: '55%',
      height: '35px'
    },
    {
      src: killerFilmsLogo,
      alt: 'Killer Films',
      darkBackground: false,
      width: '75%',
      height: '35px'
    },
    {
      src: paramountLogo,
      alt: 'Paramount',
      darkBackground: false,
      width: '80%',
      height: '55px'
    },
    {
      src: peacockLogo,
      alt: 'Peacock',
      darkBackground: false,
      width: '55%',
      height: '40px'
    },
    {
      src: consulateLogo,
      alt: 'Consulate',
      darkBackground: false,
      width: '80%',
      height: '85px'
    },
    {
      src: searchlightLogo,
      alt: 'Fox Searchlight',
      darkBackground: false,
      width: '80%',
      height: '85px'
    },
    {
      src: cbsLogo,
      alt: 'CBS',
      darkBackground: false,
      width: '80%',
      height: '85px'
    }
  ];

  useEffect(() => {
    // Set up the Intersection Observer to detect when the section is visible
    const observer = new IntersectionObserver(
      (entries) => {
        // If the section is intersecting (visible)
        if (entries[0].isIntersecting) {
          // Trigger animation
          setAnimate(true);
          // Disconnect the observer once triggered
          observer.disconnect();
        }
      },
      {
        // Trigger when at least 10% of the element is visible
        threshold: 0.1
      }
    );

    // Start observing the section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Clean up observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="container-fluid py-5" id="testimonial" ref={sectionRef}>
      <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center mb-5">
          <h1
            className="display-1 text-uppercase text-white text-stroke-header"
            style={{ WebkitTextStroke: "1px #dee2e6" }}
          >
            Clients
          </h1>
          <h1 className="position-absolute text-uppercase text-primary">
            Trusted By
          </h1>
        </div>

        {/* Center the grid with justify-content-center on the row */}
        <div className="row justify-content-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="col-6 col-md-4 col-lg-3 mb-4 px-3 d-flex align-items-center justify-content-center"
              style={{
                opacity: animate ? 1 : 0,
                transform: animate ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`,
              }}
            >
              <div
                className={`p-3 rounded w-100 h-100 d-flex align-items-center justify-content-center ${logo.darkBackground ? 'bg-dark' : 'bg-light'}`}
                style={{
                  minHeight: '100px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: '100%'
                }}>
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    style={{
                      width: logo.width,
                      height: logo.height,
                      objectFit: 'contain',
                      maxWidth: '100%'
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="text-center mt-4"
          style={{
            opacity: animate ? 1 : 0,
            transition: `opacity 0.5s ease-out ${logos.length * 0.1}s`,
          }}
        >
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
// src/components/sections/TestimonialSection.tsx
import React from 'react';

// Import logos
import a24Logo from '../../assets/logos/A24.png';
import appleTvLogo from '../../assets/logos/apple-tv-logo-white.png';
import cbsLogo from '../../assets/logos/cbs-logo-png-transparent.png';
import consulateLogo from '../../assets/logos/consulate.svg';
import disneyLogo from '../../assets/logos/Disney.png';
import filmnationLogo from '../../assets/logos/filmnation-entertainment-logo-png_seeklogo-447370.png';
import hboLogo from '../../assets/logos/HBO.png';
import huluLogo from '../../assets/logos/1920px-Hulu_Logo.svg (1).png';
import killerFilmsLogo from '../../assets/logos/killerfilms1.jpg';
import miramaxLogo from '../../assets/logos/miramax-films-logo-png-transparent.png';
import neonLogo from '../../assets/logos/neon.png';
import netflixLogo from '../../assets/logos/Netflix_Logo_RGB.png';
import paramountLogo from '../../assets/logos/paramount.png';
import peacockLogo from '../../assets/logos/peacock.png';
import primeLogo from '../../assets/logos/prime.png';
import searchlightLogo from '../../assets/logos/searchlight.png';
import showtimeLogo from '../../assets/logos/500px-Showtime.svg.png';
import starzLogo from '../../assets/logos/starz.jpg';

const TestimonialSection: React.FC = () => {
  // Define logos with their alt text and any special styling requirements
  const logos = [
    { src: netflixLogo, alt: 'Netflix', darkBackground: false },
    { src: hboLogo, alt: 'HBO', darkBackground: false },
    { src: showtimeLogo, alt: 'Showtime', darkBackground: false },
    { src: huluLogo, alt: 'Hulu', darkBackground: false },
    { src: disneyLogo, alt: 'Disney', darkBackground: false },
    { src: appleTvLogo, alt: 'Apple TV+', darkBackground: true },
    { src: primeLogo, alt: 'Amazon', darkBackground: false },
    { src: miramaxLogo, alt: 'Miramax', darkBackground: false },
    { src: filmnationLogo, alt: 'Filmnation', darkBackground: false },
    { src: starzLogo, alt: 'Starz', darkBackground: false },
    { src: a24Logo, alt: 'A24', darkBackground: true },
    { src: neonLogo, alt: 'Neon', darkBackground: false },
    { src: killerFilmsLogo, alt: 'Killer Films', darkBackground: false },
    { src: paramountLogo, alt: 'Paramount', darkBackground: false },
    { src: peacockLogo, alt: 'Peacock', darkBackground: false },
    { src: consulateLogo, alt: 'Consulate', darkBackground: false },
    { src: searchlightLogo, alt: 'Fox Searchlight', darkBackground: true },
    { src: cbsLogo, alt: 'CBS', darkBackground: false }
  ];

  return (
    <div className="container-fluid py-5" id="testimonial">
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
            <div key={index} className="col-6 col-md-4 col-lg-3 mb-4 px-3 d-flex align-items-center justify-content-center">
              <div
                className={`p-3 rounded w-100 h-100 d-flex align-items-center justify-content-center ${logo.darkBackground ? 'bg-dark' : 'bg-light'}`}
                style={{ minHeight: '100px' }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="img-fluid"
                  style={{ maxHeight: '60px', maxWidth: '100%', objectFit: 'contain' }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <p className="text-muted">
            And more leading studios and streaming platforms
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
import React, { useEffect, useState } from 'react';
import profileImage from '../../assets/Isabel&DevonEngagementSession-50.jpg';

const HeaderSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="container-fluid bg-primary d-flex align-items-center mb-5 py-5"
      id="home"
      style={{
        minHeight: '100vh',
        paddingTop: '76px',
        paddingBottom: '5rem', // Added more bottom padding for vertical spacing
        background: 'linear-gradient(to bottom right, #32a885, #2a9173)'
      }}
    >
      <div
        className="container"
        style={{
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
        }}
      >
        <div className="row align-items-center">
          <div className="col-lg-5 px-4 pl-lg-0 pb-5 pb-lg-0 text-center">
            <img
              className="img-fluid rounded-circle shadow-sm"
              src={profileImage}
              alt="Profile"
              style={{
                maxWidth: '300px',
                width: '100%',
                border: '5px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 0 25px rgba(0, 0, 0, 0.15)'
              }}
            />
          </div>
          <div className="col-lg-7 text-center text-lg-left">
            <h3 className="text-white font-weight-normal mb-3">I'm</h3>
            <h1
              className="display-3 text-uppercase text-primary mb-2 text-stroke-header"
              style={{
                WebkitTextStroke: '2px #ffffff',
                textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                fontSize: 'calc(2rem + 3vw)'
              }}
            >
              Isabel Cafaro-Anderson
            </h1>
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-4">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
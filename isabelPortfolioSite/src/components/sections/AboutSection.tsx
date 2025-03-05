// src/components/sections/AboutSection.tsx
import React from 'react';
import aboutImage from '../../assets/IMG_8541.jpg';

const AboutSection: React.FC = () => {
  return (
    <div className="container-fluid py-5" id="about">
      <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1
            className="display-1 text-uppercase text-white text-stroke-header"
            style={{ WebkitTextStroke: '1px #dee2e6' }}
          >
            About
          </h1>
          <h1 className="position-absolute text-uppercase text-primary">
            About Me
          </h1>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-5 pb-4 pb-lg-0">
            <img
              className="img-fluid w-100 rounded-circle shadow-sm"
              src={aboutImage}
              alt="Profile"
            />
          </div>
          <div className="col-lg-7">
            <h3 className="mb-4">Producer & Post Production Expert</h3>
            <p>
              I specialize in bridging creative vision with technical precision in media and post-production. Recently, as a Supervising Digital Intermediate Producer at Assembly, I led teams delivering content to major networks and streamers.
              <br /><br />
              A core strength is managing tight deadlines and intricate post schedules without compromising quality. By overseeing the post-production process end-to-end, I ensure meticulous attention to detail and a seamless client experience.
            </p>
            <div className="row mb-3">
              <div className="col-sm-6 py-2">
                <h6>
                  Name: <span className="text-secondary">Isabel Cafaro-Anderson</span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Experience: <span className="text-secondary">16 Years</span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Phone: <span className="text-secondary">203-715-4454</span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Email: <span className="text-secondary">cafaro.isabel@gmail.com</span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Freelance: <span className="text-secondary">Available</span>
                </h6>
              </div>
            </div>
            <a href="#" className="btn btn-outline-primary mr-4">
              Work With Me
            </a>
            <a href="#" className="btn btn-outline-primary">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

// src/components/sections/SkillsSection.tsx
import React from 'react';

const SkillsSection: React.FC = () => {
  return (
    <div className="container-fluid py-5" id="skill">
      <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1
            className="display-1 text-uppercase text-white text-stroke-header"
            style={{ WebkitTextStroke: '1px #dee2e6' }}
          >
            Skills
          </h1>
          <h1 className="position-absolute text-uppercase text-primary">
            My Skills
          </h1>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <h6 className="font-weight-bold">Digital Media</h6>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-valuenow={95}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: '95%' }}
                ></div>
              </div>
            </div>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <h6 className="font-weight-bold">Post Production</h6>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  aria-valuenow={85}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: '85%' }}
                ></div>
              </div>
            </div>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <h6 className="font-weight-bold">Logistics Management</h6>

              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: '90%' }}
                ></div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <h6 className="font-weight-bold">Team Leadership</h6>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: '90%' }}
                ></div>
              </div>
            </div>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <h6 className="font-weight-bold">Business Development</h6>
                
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-dark"
                  role="progressbar"
                  aria-valuenow={95}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: '95%' }}
                ></div>
              </div>
            </div>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <h6 className="font-weight-bold">Video Production</h6>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  aria-valuenow={85}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: '85%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;

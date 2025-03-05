// src/components/sections/QualificationSection.tsx
import React from 'react';

const QualificationSection: React.FC = () => {
  return (
    <div className="container-fluid py-5" id="qualification">
      <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1
            className="display-1 text-uppercase text-white text-stroke-header"
            style={{ WebkitTextStroke: '1px #dee2e6' }}
          >
            Experience
          </h1>
          <h1 className="position-absolute text-uppercase text-primary">
            Professional Experience
          </h1>
        </div>
        <div className="row justify-content-center">
          {/* Experience */}
          <div className="col-lg-10">
            <div className="border-left border-primary pt-2 pl-4 ml-2">
              {/* Experience Item 1 */}
              <div className="position-relative mb-5">
                <i
                  className="far fa-dot-circle text-primary position-absolute"
                  style={{ top: '2px', left: '-32px' }}
                ></i>
                <h5 className="font-weight-bold mb-1">Supervising DI Producer / Business Development Manager</h5>
                <p className="mb-2">
                  <strong>Assembly</strong> | <small>2021 – 2024</small>
                </p>
                <p>
                  In this biz dev driven leadership role, I oversaw the entire finishing process for feature films, documentaries, and episodic content, ensuring consistent quality and timely delivery in a hybrid production environment. My responsibilities included coordinating color correction and editorial, interfacing directly with clients, and managing a multidisciplinary team to meet demanding post-production schedules.
                </p>
              </div>
              {/* Experience Item 2 */}
              <div className="position-relative mb-5">
                <i
                  className="far fa-dot-circle text-primary position-absolute"
                  style={{ top: '2px', left: '-32px' }}
                ></i>
                <h5 className="font-weight-bold mb-1">Senior DI Producer</h5>
                <p className="mb-2">
                  <strong>Light Iron, A Panavision Company</strong> | <small>2019 – 2021</small>
                </p>
                <p>
                  I began as a Digital Intermediate Producer, managing post schedules and facilitating the finishing of feature films, documentaries, and episodics on tight timelines. Promoted to Senior Producer, I took on greater responsibility for client billing, day-to-day team oversight, and was appointed as interim Producer Lead in New York, further refining my leadership and project management skills.
                </p>
              </div>
              {/* Experience Item 3 */}
              <div className="position-relative mb-5">
                <i
                  className="far fa-dot-circle text-primary position-absolute"
                  style={{ top: '2px', left: '-32px' }}
                ></i>
                <h5 className="font-weight-bold mb-1">Digital Intermediate Producer</h5>
                <p className="mb-2">
                  <strong>Technicolor-PostWorks NY</strong> | <small>2015 - 2019</small>
                </p>
                <p>
                  As the primary point of contact for high-profile clients, I supervised post-production workflows involving editorial, color correction, and visual effects for multiple feature films. Concurrent deadlines required frequent coordination with creative teams and vendors, while my role also included maintaining accurate billing and ensuring the seamless handoff of deliverables.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualificationSection;
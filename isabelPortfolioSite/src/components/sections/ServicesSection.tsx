// src/components/sections/ServicesSection.tsx

import React from 'react';

const ServicesSection: React.FC = () => {
  return (
    <div className="container-fluid pt-5" id="service">
      <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1
            className="display-1 text-uppercase text-white text-stroke-header"
            style={{ WebkitTextStroke: "1px #dee2e6" }}
          >
            Service
          </h1>
          <h1 className="position-absolute text-uppercase text-primary">
            My Services
          </h1>
        </div>
        <div className="row pb-3">
          {/* Service Item 1 */}
          <div className="col-lg-4 col-md-6 text-center mb-5">
            <div className="d-flex align-items-center justify-content-center mb-4">
              <h4 className="font-weight-bold m-0">
                <span className="text-primary">Partnerships</span> That Scale
              </h4>
            </div>
            <p>
              I've cultivated high-value client relationships across the industry to drive sustainable revenue growth. By identifying untapped opportunities and optimizing client engagement throughout the post-production pipeline, I turn creative projects into win-win relationships.
            </p>
          </div>

          {/* Service Item 2 */}
          <div className="col-lg-4 col-md-6 text-center mb-5">
            <div className="d-flex align-items-center justify-content-center mb-4">
              <h4 className="font-weight-bold m-0">
                Creative <span className="text-primary">Development</span> & Consulting
              </h4>
            </div>
            <p>
              Leveraging my background in pitching projects to major networks, I
              offer insights on narrative structure, tone, and visual style. I help
              refine concepts and scripts so your film, documentary, or episodic
              resonates with both audiences and stakeholders.
            </p>
          </div>

          {/* Service Item 3 */}
          <div className="col-lg-4 col-md-6 text-center mb-5">
            <div className="d-flex align-items-center justify-content-center mb-4">
              <h4 className="font-weight-bold m-0">
                Billing & <span className="text-primary">Budget</span> Oversight
              </h4>
            </div>
            <p>
              Balancing creativity with financial responsibility is one of my
              specialties. From timely billing to budget forecasting, I ensure that
              every project meets financial targets without compromising on quality
              or deadlines.
            </p>
          </div>

          {/* Service Item 4 */}
          <div className="col-lg-4 col-md-6 text-center mb-5">
            <div className="d-flex align-items-center justify-content-center mb-4">
              <h4 className="font-weight-bold m-0">
                Production <span className="text-primary">Coordination</span> & Scheduling
              </h4>
            </div>
            <p>
              I excel in managing complex timelines, juggling multiple deadlines,
              and ensuring projects stay on track. From editorial sync to final
              delivery, my coordination keeps every stakeholder in the loop and
              every phase running smoothly.
            </p>
          </div>

          {/* Service Item 5 */}
          <div className="col-lg-4 col-md-6 text-center mb-5">
            <div className="d-flex align-items-center justify-content-center mb-4">
              <h4 className="font-weight-bold m-0">
                Workflow <span className="text-primary">Optimization</span> & Team Management
              </h4>
            </div>
            <p>
              Having led teams in high-pressure environments, I implement systems
              that boost productivity and clarity. Whether onboarding new hires or
              refining processes, I ensure each department collaborates efficiently
              to deliver top-quality results.
            </p>
          </div>

          {/* Service Item 6 */}
          <div className="col-lg-4 col-md-6 text-center mb-5">
            <div className="d-flex align-items-center justify-content-center mb-4">
              <h4 className="font-weight-bold m-0">
                <span className="text-primary">Post-Production</span> Management
              </h4>
            </div>
            <p>
              Drawing on years of experience as a Digital Intermediate Producer, I
              oversee every stage of post-production. From editorial workflows to
              color correction and final mastering, I ensure your deliverables meet
              tight deadlines and exacting industry standards.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
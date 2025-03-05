// src/components/sections/SkillsSection.tsx
import React, { useState, useEffect, useRef } from 'react';

const SkillsSection: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Skills data with their percentages
  const skills = [
    { name: 'Digital Media', percent: 95, color: 'bg-primary' },
    { name: 'Post Production', percent: 85, color: 'bg-warning' },
    { name: 'Logistics Management', percent: 90, color: 'bg-danger' },
    { name: 'Team Leadership', percent: 90, color: 'bg-danger' },
    { name: 'Business Development', percent: 95, color: 'bg-dark' },
    { name: 'Video Production', percent: 85, color: 'bg-info' }
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
    <div className="container-fluid py-5" id="skill" ref={sectionRef}>
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
            {skills.slice(0, 3).map((skill, index) => (
              <div className="skill mb-4" key={index}>
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">{skill.name}</h6>
                </div>
                <div className="progress">
                  <div
                    className={`progress-bar ${skill.color}`}
                    role="progressbar"
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{
                      width: animate ? `${skill.percent}%` : '0%',
                      transition: 'width 1.5s ease-in-out'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-6">
            {skills.slice(3).map((skill, index) => (
              <div className="skill mb-4" key={index}>
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">{skill.name}</h6>
                </div>
                <div className="progress">
                  <div
                    className={`progress-bar ${skill.color}`}
                    role="progressbar"
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{
                      width: animate ? `${skill.percent}%` : '0%',
                      transition: 'width 1.5s ease-in-out'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
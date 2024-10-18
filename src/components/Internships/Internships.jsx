import React, { useState } from 'react';
import './Internships.css';

const Internships = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const internships = [
    {
      id: 1,
      company: 'Palcoa pvt. ltd.',
      role: 'ML Intern',
      period: 'Aug 2024 - present',
      experience: 'Worked on developing new features, fixed bugs, and collaborated with senior developers in an Agile environment.'
    },
    {
      id: 2,
      company: 'Palcoa pvt. ltd.',
      role: 'Frontend Developer Intern',
      period: 'june 2024 - aug 2024',
      experience: 'Designed user interfaces and improved website performance, gaining significant experience with React and Redux.'
    },
  ];

  const toggleExperience = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="internships-container">
      {internships.map((internship, index) => (
        <div key={internship.id} className="internship-item">
          <div className="timeline"></div>
          <div className="internship-info" onClick={() => toggleExperience(index)}>
            <h3>{internship.company}</h3>
            <p>{internship.role}</p>
            <p>{internship.period}</p>
            {activeIndex === index && (
              <div className="experience">
                <p>{internship.experience}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Internships;

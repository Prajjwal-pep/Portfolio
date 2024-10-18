import React from 'react';
import './Projects.css';

const Projects = () => {
  const techStack = {
    cloud: [
      { name: 'AWS', iconUrl: 'https://cdn.iconscout.com/icon/free/png-256/aws-1869025-1583149.png' },
      { name: 'GCP', iconUrl: 'https://cdn.iconscout.com/icon/free/png-256/google-cloud-2038785-1721675.png' },
    ],
    languages: [
      { name: 'Java', iconUrl: 'https://cdn.iconscout.com/icon/free/png-256/java-60-1174953.png' },
      { name: 'JavaScript', iconUrl: 'https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png' },
      { name: 'Python', iconUrl: 'https://cdn.iconscout.com/icon/free/png-256/python-3521655-2945099.png' },
    ],
    database: [
      { name: 'SQL', iconUrl: 'https://cdn.iconscout.com/icon/free/png-256/sql-4-190807.png' },
      { name: 'MongoDB', iconUrl: 'https://cdn.iconscout.com/icon/free/png-256/mongodb-4-1175139.png' },
    ],
    testing: [
      { name: 'Jenkins', iconUrl: 'https://cdn.iconscout.com/icon/free/png-256/jenkins-2-1174938.png' },
    ],
    tools: [
      { name: 'Git', iconUrl: 'https://cdn.iconscout.com/icon/free/png-256/git-8-1175207.png' },
      { name: 'Docker', iconUrl: 'https://cdn.iconscout.com/icon/free/png-256/docker-226091.png' },
      { name: 'Figma', iconUrl: 'https://cdn.iconscout.com/icon/free/png-256/figma-3521425-2945025.png' },
      { name: 'Postman', iconUrl: 'https://cdn.iconscout.com/icon/free/png-256/postman-3521648-2945089.png' },
      { name: 'Canva', iconUrl: 'https://cdn.iconscout.com/icon/free/png-256/canva-2333287-1953627.png' },
      { name: 'DaVinci', iconUrl: 'https://cdn.iconscout.com/icon/free/png-256/davinci-resolve-226091.png' },
    ]
  };

  const projects = [
    {
      name: 'Timetable Generator',
      description: 'An app that generates school timetables with optimized teacher and room assignments.',
      stack: ['JavaScript', 'MongoDB', 'Git']
    },
    {
      name: 'Inventory Management System',
      description: 'A system to track and manage inventory with supplier details and stock updates.',
      stack: ['Java', 'SQL', 'Jenkins', 'Docker']
    },
    {
      name: 'Portfolio Website',
      description: 'A personal portfolio website to showcase my skills, projects, and certifications.',
      stack: ['React', 'Git', 'Figma', 'Postman']
    }
  ];

  return (
    <div className="projects-container">
      <h2>Tech Stack</h2>
      <div className="tech-stack">
        {Object.keys(techStack).map((category) => (
          <div key={category} className="tech-category">
            <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
            <div className="tech-icons">
              {techStack[category].map((tech) => (
                <div key={tech.name} className="tech-item">
                  <img src={tech.iconUrl} alt={`${tech.name} icon`} className="tech-icon" />
                  {/* <p>{tech.name}</p> */}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h2>Personal Projects</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.name} className="project-item">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="project-stack">
              {project.stack.map((tech) => (
                <span key={tech} className="tech-stack-item">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

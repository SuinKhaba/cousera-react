import React from 'react';
import project1Image from '../assets/project1.jpg'; // Example image
import project2Image from '../assets/project2.jpg';

const Projects = () => (
  <div className="section">
    <h2>My Projects</h2>
    <p>Here are some of the projects I’ve worked on recently:</p>

    <div className="projects-container">
      {/* Project 1 */}
      <div className="project-card">
        <img src={project1Image} alt="Project 1" className="project-image" />
        <h3>Project 1</h3>
        <p>
          This is a File Management System. Where users can Upload and share Files Securely . I used HTML,CSS,JS for this project.
        </p>
      </div>

      {/* Project 2 */}
      <div className="project-card">
        <img src={project2Image} alt="Project 2" className="project-image" />
        <h3>Project 2</h3>
        <p>
          This is Recipe Book . where user can search for recipes and it shows the recipe along with incredients and a video .I used HTML,CSS,JS for this project.
        </p>
      </div>

      
    </div>
  </div>
);

export default Projects;

import React from "react";
import "./Project.css";
import projects from "./ProjectData";

function Projects() {
  return (
    <div className="projects-page">
<hr color="black"/>
      <div className="projects-header">
        <h1>Our Projects</h1>
        <p>Excellence Delivered Across 1000+ Projects.</p>
      </div>

      <div className="projects-grid">

        {projects.map((project) => (
          <div className="project-card" key={project.id}>

            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="location">{project.location}</p>
              <p>{project.description}</p>
              <button>View Details</button>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Projects;
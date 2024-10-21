import React from 'react';
//allows to access the URL paramateres
import { useParams } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

function ProjectDetails() {
  // Get the project ID from the URL
  const { id } = useParams();
  
  // Find the project using the ID
  const project = projectsData.find((project) => project.id.toString() === id);

  // If no project is found, return a message
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{project.title}</h2>
        <p>{project.details}</p>
        <img src={project.image} alt={project.title} className="project-image" />
        <a href={project.repoLink} className="btn btn-primary project-link" target="_blank" rel="noopener noreferrer">
          View Repository
        </a>
      </div>
    </div>
  );
}

export default ProjectDetails;

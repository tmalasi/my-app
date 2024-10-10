import React from "react";

function ProjectCard({ category, title, image, description, repoLink, onClick }) {
  return (
    <div className="project-card" data-category={category} onClick={onClick}>
      <img src={image} alt={title} className="card-img-top project-image img-fluid" />
      <div className="card-body">
        <h3 className="card-title project-title">{title}</h3>
        <p className="card-text project-description">{description}</p>
        <a href={repoLink} className="btn btn-primary project-link" target="_blank" rel="noopener noreferrer">
          Repository
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;

function ProjectCard({ project }){
    return (
      <div className="project-card" data-category={project.category}>
        <img src={project.image} alt={project.title} className="card-img-top project-image img-fluid" />
        <div className="card-body">
          <h3 className="card-title project-title">{project.title}</h3>
          <p className="card-text project-description">{project.description}</p>
          <a href={project.repoLink} className="btn btn-primary project-link" target="_blank" rel="noopener noreferrer">Repository</a>
        </div>
      </div>
    );
};

export default ProjectCard;
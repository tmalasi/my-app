function Modal ({project}){
    return (
        <div class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>{project.title}</h2>
            <p>{project.details}</p>
            <img src={project.image} alt={project.title} className="project-image" />
        <a href={project.repoLink} className="btn btn-primary project-link" target="_blank" rel="noreferrer">View Repository</a>
    </div>  
    </div>
    );
}
export default Modal;
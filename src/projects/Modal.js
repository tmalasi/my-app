import React from "react";

function Modal({onClose, title, details, image, repoLink }) {


  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>{title}</h2>
        <p>{details}</p>
        <img src={image} alt={title} className="project-image" />
        <a href={repoLink} className="btn btn-primary project-link" target="_blank" rel="noopener noreferrer">
          View Repository
        </a>
      </div>
    </div>
  );
}

export default Modal;

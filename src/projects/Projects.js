import React, { useState } from "react";
import Filter from "./Filter";
import ProjectCard from "./ProjectCard";
import Modal from "./Modal";
import { projectsData } from "../data/projectsData";
import { filtersData } from "../data/filtersData";

function Projects() {
  const [modalData, setModalData] = useState(null);
  const [filteredData, setFilteredData] = useState(projectsData); // Set initial data to projectsData

  const openModal = (project) => {
    setModalData(project);
  };

  const closeModal = () => {
    setModalData(null);
  };

  // Filtering function
  const filterProjects = (category) => {
    if (category === "All") {
      setFilteredData(projectsData); // Show all projects
    } else {
      // The filter method creates a new array filled with elements that pass a certain condition specified in a callback function. 
      //It does not modify the original array.
      const filteredProjects = projectsData.filter(
        (project) => project.category === category
      );
      setFilteredData(filteredProjects); // Show filtered projects
    }
  };

  return (
    <section className="projects" id="projects">
      <h1 className="section-title text-center">My Projects</h1>
      <Filter filters={filtersData} onFilterChange={filterProjects} />{" "}
      {/* Pass filter function */}
      <div className="container containerProject">
        {filteredData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            category={project.category}
            image={project.image}
            description={project.description}
            repoLink={project.repoLink}
            onClick={() => openModal(project)}
          />
        ))}
      </div>
      {modalData && (
        <Modal
          onClose={closeModal}
          title={modalData.title}
          details={modalData.details}
          image={modalData.image}
          repoLink={modalData.repoLink}
        />
      )}
    </section>
  );
}

export default Projects;

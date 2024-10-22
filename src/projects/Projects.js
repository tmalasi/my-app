import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ProjectCard from "./ProjectCard"; // Assuming you have a ProjectCard component
import Modal from "./Modal"; // Your custom Modal component
import { projectsData } from "../data/projectsData"; // Adjust the path as necessary
import Filter from "./Filter"; // Your filter component
import Header from "../header/Header"; // Your header component
import { filtersData } from "../data/filtersData";

function Projects() {
  const [modalData, setModalData] = useState(null);
  const [filteredData, setFilteredData] = useState(projectsData);
  const navigate = useNavigate();
  const location = useLocation();

  // Effect to update modal data based on URL
  useEffect(() => {
    const id = location.pathname.split("/").pop(); // Get the project ID from the URL
    const project = projectsData.find((p) => p.id === parseInt(id)); // Find project by ID

    if (project) {
      setModalData(project); // Set modal data if project exists
    } else {
      setModalData(null); // Reset modal data if not found
    }
  }, [location.pathname]); // Runs when the pathname changes

  const openModal = (project) => {
    setModalData(project);
    navigate(`/dashboard/projects/${project.id}`); // Update URL
  };

  const closeModal = () => {
    setModalData(null);
    navigate("/dashboard/projects"); // Navigate back to the project list
  };

  const filterProjects = (category) => {
    if (category === "All") {
      setFilteredData(projectsData); // Show all projects
    } else {
      const filteredProjects = projectsData.filter(
        (project) => project.category === category
      );
      setFilteredData(filteredProjects); // Show filtered projects
    }
  };

  return (
    <>
      <Header />
      <section className="projects" id="projects">
        <h1 className="section-title text-center">My Projects</h1>
        <Filter filters={filtersData} onFilterChange={filterProjects} />
        <div className="container containerProject">
          {filteredData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              category={project.category}
              image={project.image}
              description={project.description}
              repoLink={project.repoLink}
              onClick={() => openModal(project)} // Open modal on card click
            />
          ))}
        </div>
        {modalData && ( // Render Modal if modalData is set
          <Modal
            onClose={closeModal}
            title={modalData.title}
            details={modalData.details} // Use appropriate property
            image={modalData.image}
            repoLink={modalData.repoLink}
          />
        )}
      </section>
    </>
  );
}

export default Projects;

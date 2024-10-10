import Filter from "./Filter";
import ProjectCard from "./ProjectCard";
import Modal from "./Modal";

const projects = [
    {
      id: 1,
      title: 'Emotion Recognition Based on EEG Signals',
      description: 'Utilizing EEG signals for emotion recognition.',
      image: 'images/bachelor-thesis.JPG',
      repoLink: 'https://github.com/tmalasi/Bachelor-Thesis',
      category: 'machine-learning',
      details: 'Investigated the feasibility and efficacy of utilizing EEG signals for emotion recognition. Emphasized methodologies in machine learning and deep learning, with a focus on the DREAMER dataset.',
    },
    {
      id: 2,
      title: 'Library Management System Testing',
      description: 'Conducted comprehensive testing covering various methodologies.',
      image: 'images/library-testing.png',
      repoLink: 'https://github.com/tmalasi/tamam',
      category: 'software-testing',
      details: 'This project involved comprehensive testing of a library management system, focusing on multiple testing methodologies, including specification-based testing, code-based testing, integration testing, mock testing, basis path testing, and mutation testing.',
    },
    {
      id: 3,
      title: 'B-Tree Visualization',
      description: 'Developed a visual representation of a B-tree using JavaFX.',
      image: 'images/btree-viz.png',
      repoLink: 'https://github.com/tmalasi/BTreevisualization',
      category: 'data-structures',
      details: 'Created a visual representation of a B-Tree using JavaFX, allowing users to visualize the insertion and deletion operations dynamically.',
    },
    {
      id: 4,
      title: 'Car Shop Project',
      description: 'Completed a web development project to create a car shop application, showcasing web development skills.',
      image: 'images/car-shop.png',
      repoLink: 'https://github.com/XhesBaze/CarShopWEBProject',
      category: 'web-development',
      details: 'Developed a car shop application as part of a web development course. It allows users to browse, filter, and manage car listings in a user-friendly interface.',
    },
    {
      id: 5,
      title: 'Software Modeling Project',
      description: 'Developed a comprehensive software model for a website, detailing the system\'s behavior using UML diagrams.',
      image: 'images/class-diagram-example.png',
      repoLink: 'https://github.com/XhesBaze/group15_TravelServices',
      category: 'software-modeling',
      details: 'Focused on developing a software model for a comprehensive website, involving creating UML diagrams such as use case, class, sequence, and activity diagrams to illustrate system behavior.',
    },
    {
      id: 6,
      title: 'Project Manager: Student Management System',
      description: 'Created a functional management system to enhance student housing management, streamline processes, and improve communication.',
      image: 'images/Project-manager.png',
      repoLink: 'https://github.com/ezaimi/kosherja',
      category: 'web-development',
      details: 'Managed and developed a Student Accommodation Management System for a private company offering dormitory services. The platform enhances administrative processes, facilitates communication, and improves student satisfaction.',
    },
  ];
  

  function Projects(){
    return (
        <section className="projects" id="projects">
          <h1 className="section-title text-center">My Projects</h1>
          <Filter filters={['All', 'Web Development', 'Machine Learning', 'Data Structures', 'Software Testing', 'Software Modeling']} />
              <div className="container containerProject">
                       {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          {projects.map((project) => (
            <Modal key={project.id} project={project} />
          ))}
        </section>
      );
    };
    
    export default Projects;
  
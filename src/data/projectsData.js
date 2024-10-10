import img1 from "../image/bachelor-thesis.JPG";
import img2 from "../image/library-testing.png";
import img3 from "../image/btree-viz.png";
import img4 from "../image/car-shop.png";
import img5 from "../image/class-diagram-example.png";
import img6 from "../image/Project-manager.png";

export const projectsData = [
  {
    id: 1,
    title: "Emotion Recognition Based on EEG Signals",
    description: "Utilizing EEG signals for emotion recognition.",
    image: img1,
    repoLink: "https://github.com/tmalasi/Bachelor-Thesis",
    category: "Machine Learning",
    details:
      "Investigated the feasibility and efficacy of utilizing EEG signals for emotion recognition. Emphasized methodologies in machine learning and deep learning, with a focus on the DREAMER dataset.",
  },
  {
    id: 2,
    title: "Library Management System Testing",
    description:
      "Conducted comprehensive testing covering various methodologies.",
    image: img2,
    repoLink: "https://github.com/tmalasi/tamam",
    category: "Software Testing",
    details: `
    <p>This project involved the comprehensive testing of a library management system, focusing on multiple testing methodologies:</p>
    <ul>
      <li><strong>Specification-Based Testing:</strong> Boundary value and equivalence testing to ensure the system’s correctness.</li>
      <li><strong>Code-Based Testing:</strong> Achieved 100% line coverage, ensuring all parts of the code were verified.</li>
      <li><strong>Integration Testing:</strong> Verified the interaction between different modules within the system.</li>
      <li><strong>Mock Testing:</strong> Simulated external dependencies to test isolated modules.</li>
      <li><strong>Basis Path Testing:</strong> Ensured all control paths were covered.</li>
      <li><strong>Mutation Testing:</strong> Verified the robustness of the code by introducing variations.</li>
    </ul>
    <p>Technologies and tools used in this project included Java, JavaFX, and various testing frameworks to ensure a reliable and efficient system.</p>
  `},
  {
    id: 3,
    title: "B-Tree Visualization",
    description: "Developed a visual representation of a B-tree using JavaFX.",
    image: img3,
    repoLink: "https://github.com/tmalasi/BTreevisualization",
    category: "Data Structures",
    details:
      "Created a visual representation of a B-Tree using JavaFX, allowing users to visualize the insertion and deletion operations dynamically.",
  },
  {
    id: 4,
    title: "Car Shop Project",
    description:
      "Completed a web development project to create a car shop application, showcasing web development skills.",
    image: img4,
    repoLink: "https://github.com/XhesBaze/CarShopWEBProject",
    category: "Web Development",
    details:
      "Developed a car shop application as part of a web development course. It allows users to browse, filter, and manage car listings in a user-friendly interface.",
  },
  {
    id: 5,
    title: "Software Modeling Project",
    description:
      "Developed a comprehensive software model for a website, detailing the system's behavior using UML diagrams.",
    image: img5,
    repoLink: "https://github.com/XhesBaze/group15_TravelServices",
    category: "Software Modeling",
    details:
      "Focused on developing a software model for a comprehensive website, involving creating UML diagrams such as use case, class, sequence, and activity diagrams to illustrate system behavior.",
  },
  {
    id: 6,
    title: "Project Manager: Student Management System",
    description:
      "Created a functional management system to enhance student housing management, streamline processes, and improve communication.",
    image: img6,
    repoLink: "https://github.com/ezaimi/kosherja",
    category: "Web Development",
    details:
      "Managed and developed a Student Accommodation Management System for a private company offering dormitory services. The platform enhances administrative processes, facilitates communication, and improves student satisfaction.",
  },
];

import React from "react";
import ProjectCard from "./ProductCard"; // Updated to match the new naming
import "./ProductCard.css"; // Updated to match the new naming

const projectsData = [
  {
    id: 1,
    title: "3D Loading Animation with Flip Text",
    description:
      "A colorful 3D flip animation that spells out 'LOADING' using CSS and keyframes. Fully responsive and visually engaging, perfect for web project preloaders.",
    price: "Free",
    rating: 4.8,
    downloads: 850,
    isBestSeller: true,
    driveFile:
      "https://drive.google.com/file/d/15ARx6fw4ceCAA7MwgLF2QNohKpt0htJm/view?usp=sharing", // Replace with actual file link
    thumbnailVideo: "https://youtu.be/y_s2fiZVqRk",
  },
  {
    id: 2,
    title: "Advanced React Hooks Tutorial",
    description:
      "Learn advanced React Hooks, context API, and custom hooks for scalable applications.",
    price: "Free",
    rating: 4.7,
    downloads: 800,
    isBestSeller: false,
    driveFile: "#",
    thumbnailVideo: "https://youtu.be/y_s2fiZVqRk",
  },
  {
    id: 3,
    title: "Node.js API Development Guide",
    description:
      "Master building RESTful APIs with Node.js, Express, and MongoDB.",
    price: "Free",
    rating: 4.8,
    downloads: 1500,
    isBestSeller: true,
    driveFile: "#",
    thumbnailVideo: "https://youtu.be/y_s2fiZVqRk",
  },
  {
    id: 4,
    title: "Responsive Amazon Clone",
    description:
      "Amazon homepage clone with responsive design and product grids.",
    price: "Free",
    rating: 4.7,
    downloads: 756,
    isBestSeller: false,
    driveFile: "#",
    thumbnailVideo: "https://youtu.be/y_s2fiZVqRk",
  },
  {
    id: 5,
    title: "React Weather App with API",
    description: "React.js weather app with live data and responsive UI.",
    price: "Free",
    rating: 4.8,
    downloads: 634,
    isBestSeller: false,
    driveFile: "#",
    thumbnailVideo: "https://youtu.be/y_s2fiZVqRk",
  },
  {
    id: 6,
    title: "Interactive JavaScript Todo App",
    description: "Todo app with drag/drop, local storage, filters, and more.",
    price: "Free",
    rating: 4.6,
    downloads: 543,
    isBestSeller: false,
    driveFile: "#",
    thumbnailVideo: "https://youtu.be/y_s2fiZVqRk",
  },
  {
    id: 7,
    title: "3D Loading Animation with Flip Text",
    description:
      "A colorful 3D flip animation that spells out 'LOADING' using CSS and keyframes. Fully responsive and visually engaging, perfect for web project preloaders.",
    price: "Free",
    rating: 4.8,
    downloads: 850,
    isBestSeller: true,
    driveFile:
      "https://drive.google.com/file/d/15ARx6fw4ceCAA7MwgLF2QNohKpt0htJm/view?usp=sharing", // Replace with actual file link
    thumbnailVideo: "https://youtu.be/y_s2fiZVqRk",
  },
  {
    id: 8,
    title: "Advanced React Hooks Tutorial",
    description:
      "Learn advanced React Hooks, context API, and custom hooks for scalable applications.",
    price: "Free",
    rating: 4.7,
    downloads: 800,
    isBestSeller: false,
    driveFile: "#",
    thumbnailVideo: "https://youtu.be/y_s2fiZVqRk",
  },
  {
    id: 9,
    title: "Node.js API Development Guide",
    description:
      "Master building RESTful APIs with Node.js, Express, and MongoDB.",
    price: "Free",
    rating: 4.8,
    downloads: 1500,
    isBestSeller: true,
    driveFile: "#",
    thumbnailVideo: "https://youtu.be/y_s2fiZVqRk",
  },
  {
    id: 10,
    title: "Responsive Amazon Clone",
    description:
      "Amazon homepage clone with responsive design and product grids.",
    price: "Free",
    rating: 4.7,
    downloads: 756,
    isBestSeller: false,
    driveFile: "#",
    thumbnailVideo: "https://youtu.be/y_s2fiZVqRk",
  },
  {
    id: 11,
    title: "React Weather App with API",
    description: "React.js weather app with live data and responsive UI.",
    price: "Free",
    rating: 4.8,
    downloads: 634,
    isBestSeller: false,
    driveFile: "#",
    thumbnailVideo: "https://youtu.be/y_s2fiZVqRk",
  },
  {
    id: 12,
    title: "Interactive JavaScript Todo App",
    description: "Todo app with drag/drop, local storage, filters, and more.",
    price: "Free",
    rating: 4.6,
    downloads: 543,
    isBestSeller: false,
    driveFile: "#",
    thumbnailVideo: "https://youtu.be/y_s2fiZVqRk",
  },
];

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">Free Code Packages</h2>
      <p className="section-subtitle">
        Get complete source code, documentation, and assets for modern web
        applications.
      </p>
      <div className="project-grid">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

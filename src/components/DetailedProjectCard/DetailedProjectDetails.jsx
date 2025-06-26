import React from "react";
import { useParams } from "react-router-dom";
import DetailedProjectCard from "./DetailedProjectCard";
import "./DetailedProjectCard.css"; // New CSS file for the container

const projectsData = [
  {
    id: 1,
    title: "Multi Page Responsive Website Source Code",
    description:
      "Complete HTML, CSS & JavaScript source code to build a stunning website quickly and efficiently. Fully responsive and modern design.",
    thumbnail:
      "https://res.cloudinary.com/dqhk94co9/image/upload/v1750754868/Screenshot_2025-06-07_114054_d0skli.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    theme: "Light / Clean",
    livePreview: "https://veereshaha.ccbp.tech",
    price: 0,
    driveFile:
      "https://drive.google.com/file/d/15ARx6fw4ceCAA7MwgLF2QNohKpt0htJm/view?usp=sharing",
    testimonial:
      "Avinash Kumar is highly regarded for his informative resources, effective teaching style, and supportive engagement with learners, significantly boosting their coding skills.",
  },
  {
    id: 2,
    title: "Single Page App with Smooth Scroll",
    description:
      "Build a clean SPA using JavaScript with smooth scroll, sticky nav, and modern sections.",
    thumbnail: "https://res.cloudinary.com/demo/image/upload/spa-scroll.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    theme: "Modern / Minimal",
    livePreview: "https://veeru-spa.ccbp.tech",
    price: 0,
    driveFile: "https://drive.google.com/file/d/1SPA123ABC/view?usp=sharing",
    testimonial:
      "Clear and concise code. Helped me understand smooth scrolling and JS interactivity better.",
  },
  {
    id: 3,
    title: "Dark Themed Portfolio Template",
    description:
      "Responsive dark mode portfolio template perfect for developers and designers.",
    thumbnail:
      "https://res.cloudinary.com/demo/image/upload/dark-portfolio.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    theme: "Dark / Techy",
    livePreview: "https://veeru-dark.ccbp.tech",
    price: 0,
    driveFile:
      "https://drive.google.com/file/d/1DARKPORTFOLIO/view?usp=sharing",
    testimonial:
      "Looks amazing and works perfectly across devices. Loved the aesthetic.",
  },
  {
    id: 4,
    title: "To-Do List Web App",
    description:
      "Interactive to-do list web app with add, delete, and filter functionalities.",
    thumbnail: "https://res.cloudinary.com/demo/image/upload/todo-app.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    theme: "Productivity / App UI",
    livePreview: "https://veeru-todo.ccbp.tech",
    price: 0,
    driveFile: "https://drive.google.com/file/d/1TODOAPP123/view?usp=sharing",
    testimonial:
      "Great example of DOM manipulation and JS logic. Very helpful!",
  },
  {
    id: 5,
    title: "Weather App using OpenWeather API",
    description:
      "Fetch real-time weather data using OpenWeather API and display with dynamic icons.",
    thumbnail: "https://res.cloudinary.com/demo/image/upload/weather-app.png",
    technologies: ["HTML", "CSS", "JavaScript", "API"],
    theme: "Utility / Weather",
    livePreview: "https://veeru-weather.ccbp.tech",
    price: 0,
    driveFile: "https://drive.google.com/file/d/1WEATHER123/view?usp=sharing",
    testimonial:
      "Loved the API integration and simplicity. Beginner friendly yet complete.",
  },
  {
    id: 6,
    title: "Responsive Product Landing Page",
    description:
      "Modern landing page template ideal for showcasing SaaS or digital products.",
    thumbnail:
      "https://res.cloudinary.com/demo/image/upload/product-landing.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    theme: "Business / Landing",
    livePreview: "https://veeru-product.ccbp.tech",
    price: 0,
    driveFile: "https://drive.google.com/file/d/1LANDING123/view?usp=sharing",
    testimonial:
      "Highly professional design. The layout is pixel-perfect and mobile-friendly.",
  },
  {
    id: 7,
    title: "Digital Clock Web App",
    description:
      "A real-time digital clock built using pure JavaScript and styled with CSS.",
    thumbnail: "https://res.cloudinary.com/demo/image/upload/digital-clock.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    theme: "Minimal / Functional",
    livePreview: "https://veeru-clock.ccbp.tech",
    price: 0,
    driveFile: "https://drive.google.com/file/d/1CLOCK123/view?usp=sharing",
    testimonial:
      "Simple yet very useful. Helped me understand intervals and JS Date.",
  },
  {
    id: 8,
    title: "Simple Calculator UI",
    description:
      "A basic calculator with functionality to perform arithmetic operations.",
    thumbnail: "https://res.cloudinary.com/demo/image/upload/calculator-ui.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    theme: "Utility / Light UI",
    livePreview: "https://veeru-calc.ccbp.tech",
    price: 0,
    driveFile: "https://drive.google.com/file/d/1CALC123/view?usp=sharing",
    testimonial:
      "Perfect practice project. The layout and logic are easy to follow.",
  },
  {
    id: 9,
    title: "Typing Speed Test Game",
    description:
      "Interactive game to test your typing speed with timer and random sentences.",
    thumbnail: "https://res.cloudinary.com/demo/image/upload/typing-test.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    theme: "Game / Challenge",
    livePreview: "https://veeru-type.ccbp.tech",
    price: 0,
    driveFile: "https://drive.google.com/file/d/1TYPE123/view?usp=sharing",
    testimonial: "Fun and educational. Enjoyed testing my typing speed.",
  },
  {
    id: 10,
    title: "Responsive Image Gallery",
    description:
      "Clean and elegant responsive image gallery using CSS Grid and Flexbox.",
    thumbnail: "https://res.cloudinary.com/demo/image/upload/image-gallery.png",
    technologies: ["HTML", "CSS"],
    theme: "Creative / Grid",
    livePreview: "https://veeru-gallery.ccbp.tech",
    price: 0,
    driveFile: "https://drive.google.com/file/d/1GALLERY123/view?usp=sharing",
    testimonial: "Learned a lot about responsive design and image layouts.",
  },
  {
    id: 11,
    title: "Portfolio with Floating Animations",
    description:
      "Portfolio layout with animated floating badges and smooth intro transitions.",
    thumbnail:
      "https://res.cloudinary.com/demo/image/upload/floating-portfolio.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    theme: "Creative / Animated",
    livePreview: "https://veeru-animate.ccbp.tech",
    price: 0,
    driveFile: "https://drive.google.com/file/d/1FLOAT123/view?usp=sharing",
    testimonial:
      "The animations are very impressive. Loved the attention to detail.",
  },
  {
    id: 12,
    title: "CSS Animated Button Effects",
    description:
      "Collection of beautiful animated buttons using only CSS transitions and hover effects.",
    thumbnail:
      "https://res.cloudinary.com/demo/image/upload/button-effects.png",
    technologies: ["HTML", "CSS"],
    theme: "UI / Effects",
    livePreview: "https://veeru-buttons.ccbp.tech",
    price: 0,
    driveFile: "https://drive.google.com/file/d/1BUTTONS123/view?usp=sharing",
    testimonial:
      "Great reference for UI devs. The hover effects are slick and inspiring.",
  },
];

function DetailedProjectDetails() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) return <h2>Project Not Found</h2>;

  return (
    <div className="project-details-container">
      <DetailedProjectCard project={project} />
    </div>
  );
}

export default DetailedProjectDetails;

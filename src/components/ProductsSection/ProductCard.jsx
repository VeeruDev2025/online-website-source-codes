import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css"; // Make sure this path is correct

const ProjectCard = ({ project }) => {
  const {
    id, // ✅ You forgot to extract this!
    title,
    description,
    price,
    rating,
    downloads,
    isBestSeller,
    driveFile,
    thumbnailVideo,
  } = project;

  return (
    <div className="project-card">
      <div className="product-thumbnail">
        {isBestSeller && <div className="badge">Best Seller</div>}
        {/* <img src={thumbnailVideo} alt={title} className="product-img"/> */}
        <iframe
          src={`https://www.youtube.com/embed/${
            thumbnailVideo.split("youtu.be/")[1]
          }?autoplay=1&mute=1&loop=1&playlist=${
            thumbnailVideo.split("youtu.be/")[1]
          }`}
          className="product-img"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title={title}
        ></iframe>

        <Link to={`/project/${id}`} className="view-btn" target="_blank">
          View Details →
          {/* <img
            src="https://res.cloudinary.com/dqhk94co9/image/upload/v1750848980/moving_fdiyod.png"
            alt="Arrow Right"
            className="arrow-icon"
          /> */}
        </Link>
      </div>

      <div className="project-content">
        <div className="project-info">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        <div className="project-bottom">
          <div className="meta">
            <span className="rating">{rating}</span>
            <span className="downloads">{downloads}+ downloads</span>
          </div>

          <div className="price-bar">
            <div className="price">
              <strong>₹{price}</strong>
            </div>
            <a
              href={driveFile}
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="#fde4e1"
                  d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"
                ></path>
              </svg>
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

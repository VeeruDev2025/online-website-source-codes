import React from "react";
import "./DetailedProjectCard.css"; // Importing the CSS for styling

const DetailedProjectCard = ({ project }) => {
  const {
    title,
    description,
    thumbnail,
    technologies,
    theme,
    livePreview,
    price,
    driveFile,
    testimonial,
  } = project;

  return (
    <div className="ai-ui-card">
      <div className="ai-ui-header">
        <h2 className="ai-ui-title">{title}</h2>
        <div className="ai-ui-tags">
          <span className="ai-ui-tag">Digital Product</span>
          <span className="ai-ui-tag">Mentor Helpful</span>
        </div>
      </div>

      <div className="ai-ui-content">
        <img src={thumbnail} alt={title} className="ai-ui-thumbnail" />

        <div className="ai-ui-description">
          <p>{description}</p>
          <div className="ai-ui-tech-theme">
            <div className="ai-ui-tech">
              <strong>Technologies: </strong>
              <span>{technologies.join(", ")}</span>
            </div>
            <div className="ai-ui-theme">
              <strong>Theme: </strong>
              <span>{theme}</span>
            </div>
          </div>

          {testimonial && (
            <div className="ai-ui-testimonial">
              <p>"{testimonial}"</p>
              <p className="ai-ui-testimonial-note">
                All-generated based on testimonials
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="ai-ui-footer">
        <div className="ai-ui-price">{price > 0 ? `₹${price}` : "₹FREE"}</div>
        <div className="ai-ui-actions">
          <a
            href={livePreview}
            className="ai-ui-button"
            target="_blank"
            rel="noreferrer"
          >
            Live Preview
          </a>
          <a
            href={driveFile}
            className="ai-ui-button primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default DetailedProjectCard;

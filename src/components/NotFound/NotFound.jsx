import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Code Not Found</h2>
        <p className="not-found-text">
          The source code you're looking for doesn't exist or has been moved.
        </p>
        <div className="not-found-stats">
          <div className="stat-item">
            <div className="stat-number">1000+</div>
            <div className="stat-label">Developers Trust Us</div>
          </div>
        </div>
        <Link to="/" className="not-found-btn">
          ← Back to Premium Code Packages
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

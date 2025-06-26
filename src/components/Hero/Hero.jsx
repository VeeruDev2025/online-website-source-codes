// src/components/HeroSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-bg-gradient"></div>

      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-content-inner">
              <div className="rating-badge">
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <span className="rating-text">Trusted by 1000+ developers</span>
              </div>

              <h1 className="hero-title">
                Premium <span className="gradient-text"> Code Packages</span>
              </h1>

              <p className="hero-description">
                Get complete source code for modern web applications. Each
                package includes video tutorials, documentation, and everything
                you need to build amazing projects.
              </p>

              <div className="hero-cta">
                <Link to="/projects" className="primary-btn">
                  Browse Packages <i className="fas fa-arrow-right"></i>
                </Link>

                <button className="secondary-btn">
                  <i className="fas fa-play"></i> Watch Demo
                </button>
              </div>

              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Projects</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">
                    ₹<span className="highlight-free">Free</span>
                  </div>
                  <div className="stat-label">Per Package</div>
                </div>

                <div className="stat-item">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Support</div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-card-wrapper">
            <div className="product-card">
              <div className="card-preview">
                <iframe
                  className="preview-video"
                  src="https://res.cloudinary.com/dqhk94co9/video/upload/v1750851466/Promotional_video_for_web_development_source_code._Animated_floating_text_elements_with_soft_glow_effects._Show_a_click_animation_on_the_View_More_button_then_transition_to_a_Download_Now_button_appearing_with_nnitc3.mp4"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  loop
                ></iframe>
              </div>

              <div className="card-body">
                <h3 className="card-title">Multi Page Responsive Website</h3>
                <p className="card-description">
                  Complete HTML, CSS & JavaScript source code with modern design
                  patterns
                </p>

                <div className="card-footer">
                  <div className="product-type">
                    <i className="fas fa-code"></i>
                    <span>Digital Product</span>
                  </div>
                  <div className="product-price">₹Free</div>
                </div>
              </div>
            </div>

            <div className="floating-circle yellow"></div>
            <div className="floating-circle pink"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

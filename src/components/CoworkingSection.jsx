import React from "react";
import "./CoworkingSection.css";

const CoworkingSection = () => {
  return (
    <div className="coworking-section">
      <div className="section-header">
        <h2 className="section-title">Belapur's Premier Coworking Space</h2>
        <p className="section-subtitle">Where productivity meets inspiration</p>
      </div>

      <div className="features-container">
        <div className="feature-card">
          <div className="feature-image-container">
            <img 
              src="https://images.timesproperty.com/blog/9128/1737378827_blogimage.webp" 
              alt="Modern Workspace" 
              className="feature-image"
            />
            <div className="image-overlay"></div>
          </div>
          <div className="feature-content">
            <h3 className="feature-title">Modern Workspace</h3>
            <p className="feature-description">Ergonomic furniture, natural lighting, and tech-ready setups for maximum productivity and comfort.</p>
            <div className="feature-icon">🚀</div>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-image-container">
            <img
              src="https://jll-global-gdim-res.cloudinary.com/image/upload/c_fill,h_600,w_1200/v1566403601/IN_ML20190821/AGILE-M_176667_20190821_001.jpg"
              alt="Vibrant Community"
              className="feature-image"
            />
            <div className="image-overlay"></div>
          </div>
          <div className="feature-content">
            <h3 className="feature-title">Vibrant Community</h3>
            <p className="feature-description">Connect with like-minded professionals through our networking events and collaborative spaces.</p>
            <div className="feature-icon">👥</div>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-image-container">
            <img
              src="https://s3.ap-south-1.amazonaws.com/worker-app/details_images/381/381_230509.jpeg"
              alt="Convenient Amenities"
              className="feature-image"
            />
            <div className="image-overlay"></div>
          </div>
          <div className="feature-content">
            <h3 className="feature-title">Convenient Amenities</h3>
            <p className="feature-description">High-speed WiFi, meeting rooms, printing services, and complimentary refreshments.</p>
            <div className="feature-icon">☕</div>
          </div>
        </div>
      </div>

      <button className="cta-button">Book a Tour Today</button>
    </div>
  );
};

export default CoworkingSection;
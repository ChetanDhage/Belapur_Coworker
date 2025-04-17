import React from 'react';
import './LocationAmenities.css';

const VibrantCommunity = () => {
  return (
    <div className="location-container">
      <h2 className="location-heading">
        Vibrant Community and Networking Events
      </h2>
      <div className="location-cards">
        <div className="location-card">
          <img src="https://jll-global-gdim-res.cloudinary.com/image/upload/c_fill,h_600,w_1200/v1566403601/IN_ML20190821/AGILE-M_176667_20190821_001.jpg" alt="Central Location" />
          <h3>Networking Events</h3>
          <p>
          We host regular networking events, providing opportunities to connect with other members, share ideas, and build relationships.</p>
        </div>
        <div className="location-card">
          <img src="https://images.timesproperty.com/blog/9128/1737378827_blogimage.webp" alt="Transport Access" />
          <h3>Collaborative Workspace</h3>
          <p>
          Our coworking space fosters a collaborative environment, allowing you to share ideas and work together on projects.</p>
        </div>
        <div className="location-card">
          <img src="https://s3.ap-south-1.amazonaws.com/worker-app/details_images/381/381_230509.jpeg" alt="Surrounding Amenities" />
          <h3>Social Activities</h3>
          <p>
          Participate in social activities and meet new people from diverse backgrounds.</p>
        </div>
      </div>
    </div>
  );
};

export default VibrantCommunity;

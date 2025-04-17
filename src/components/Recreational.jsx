import React from 'react';
import './LocationAmenities.css';

const Recreational = () => {
  return (
    <div className="location-container">
      <h2 className="location-heading">
        Recreational Amenities
      </h2>
      <div className="location-cards">
        <div className="location-card">
          <img src="https://jll-global-gdim-res.cloudinary.com/image/upload/c_fill,h_600,w_1200/v1566403601/IN_ML20190821/AGILE-M_176667_20190821_001.jpg" alt="Central Location" />
          <h3>Foosball</h3>
          <p>
          Challenge colleagues to a friendly match!</p>
        </div>
        <div className="location-card">
          <img src="https://images.timesproperty.com/blog/9128/1737378827_blogimage.webp" alt="Transport Access" />
          <h3>Carrom</h3>
          <p>
           Sharpen your skills</p>
        </div>
      
      </div>
    </div>
  );
};

export default Recreational;

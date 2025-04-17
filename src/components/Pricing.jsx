import React from 'react';
import './LocationAmenities.css';

const Pricing = () => {
  return (
    <div className="location-container">
      <h2 className="location-heading">Pricing and Membership Plans</h2>
      <div className="location-cards">
        <div className="location-card">
          <img
            src="https://jll-global-gdim-res.cloudinary.com/image/upload/c_fill,h_600,w_1200/v1566403601/IN_ML20190821/AGILE-M_176667_20190821_001.jpg"
            alt="Individual Desk"
          />
          <h3>Individual Desk</h3>
          <p>₹5,000/month. Shared workspace, high-speed internet, printing.</p>
        </div>

        <div className="location-card">
          <img
            src="https://images.timesproperty.com/blog/9128/1737378827_blogimage.webp"
            alt="Dedicated Desk"
          />
          <h3>Dedicated Desk</h3>
          <p>₹7,000/month. Dedicated desk with personal locker.</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

import React from 'react';
import './LocationAmenities.css';

const Ergonomic = () => {
  return (
    <div className="location-container">
      <h2 className="location-heading">
        Ergonomic Workspace
      </h2>
      <div className="location-cards">
        <div className="location-card">
          <img src="https://jll-global-gdim-res.cloudinary.com/image/upload/c_fill,h_600,w_1200/v1566403601/IN_ML20190821/AGILE-M_176667_20190821_001.jpg" alt="Central Location" />
          <h3>Ergonomic Chairs</h3>
          <p>
          Comfortable ergonomic chairs designed to promote proper posture and reduce strain.</p>
        </div>
        <div className="location-card">
          <img src="https://images.timesproperty.com/blog/9128/1737378827_blogimage.webp" alt="Transport Access" />
          <h3>Dedicated Desks</h3>
          <p>
          Each dedicated desk features individual power outlets and ample workspace.</p>
        </div>
        <div className="location-card">
          <img src="https://s3.ap-south-1.amazonaws.com/worker-app/details_images/381/381_230509.jpeg" alt="Surrounding Amenities" />
          <h3>Personal Lockers</h3>
          <p>
          Secure storage for your belongings.</p>
        </div>
      </div>
    </div>
  );
};

export default Ergonomic;

import React from 'react';
import './LocationAmenities.css';

const LocationAmenities = () => {
  return (
    <div className="location-container">
      <h2 className="location-heading">
        Convenient Location and Accessible Amenities
      </h2>
      <div className="location-cards">
        <div className="location-card">
          <img src="https://jll-global-gdim-res.cloudinary.com/image/upload/c_fill,h_600,w_1200/v1566403601/IN_ML20190821/AGILE-M_176667_20190821_001.jpg" alt="Central Location" />
          <h3>Central Location</h3>
          <p>
            Our coworking space is strategically located in the heart of Belapur.
          </p>
        </div>
        <div className="location-card">
          <img src="https://images.timesproperty.com/blog/9128/1737378827_blogimage.webp" alt="Transport Access" />
          <h3>Easy Access to Transport Hubs</h3>
          <p>
            Easy access to major transportation hubs, including the railway
            station and the Mumbai-Pune Expressway.
          </p>
        </div>
        <div className="location-card">
          <img src="https://s3.ap-south-1.amazonaws.com/worker-app/details_images/381/381_230509.jpeg" alt="Surrounding Amenities" />
          <h3>Surrounding Amenities</h3>
          <p>
            We are surrounded by a wide range of restaurants, cafes, and banks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocationAmenities;

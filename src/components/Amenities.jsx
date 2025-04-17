import React from 'react';
import './LocationAmenities.css';

const Amenities = () => {
  return (
    <div className="location-container">
      <h2 className="location-heading">Amenities</h2>
      <div className="location-cards">
        <div className="location-card">
          <img
            src="https://jll-global-gdim-res.cloudinary.com/image/upload/c_fill,h_600,w_1200/v1566403601/IN_ML20190821/AGILE-M_176667_20190821_001.jpg"
            alt="Workspace Essentials"
          />
          <h3>Workspace Essentials</h3>
          <p>
            Enjoy ergonomic chairs, ample natural light, and individual power outlets at each dedicated desk and in every private office.
          </p>
        </div>

        <div className="location-card">
          <img
            src="https://images.timesproperty.com/blog/9128/1737378827_blogimage.webp"
            alt="Meeting Rooms"
          />
          <h3>Meeting Rooms</h3>
          <p>
            Book our modern, well-equipped meeting rooms, featuring interactive whiteboards, high-definition video conferencing capabilities, and comfortable seating for up to 10 people. Ideal for client presentations, team brainstorming, or informal gatherings.
          </p>
        </div>

        <div className="location-card">
          <img
            src="https://s3.ap-south-1.amazonaws.com/worker-app/details_images/381/381_230509.jpeg"
            alt="Convenient Location"
          />
          <h3>Convenient Location & Services</h3>
          <p>
            Our Belapur location, easily accessible via the Mumbai-Pune Expressway, offers nearby restaurants, cafes, and banks. We also provide convenient courier handling services to streamline your shipping needs.
          </p>
        </div>

        <div className="location-card">
          <img
            src="https://s3.ap-south-1.amazonaws.com/worker-app/details_images/381/381_230509.jpeg"
            alt="IT Support"
          />
          <h3>High-Speed Wi-Fi & IT Support</h3>
          <p>
            Stay connected with reliable, high-speed internet and onsite IT support to ensure your workday runs smoothly without any technical interruptions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Amenities;

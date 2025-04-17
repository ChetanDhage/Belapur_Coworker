import React from 'react';
import './OpeningHoursContact.css';

const OpeningHoursContact = () => {
  return (
    <div className="info-container">
      <h2 className="info-heading">Our Opening Hours</h2>
      <p className="info-text">
        Monday-Saturday: 9 AM - 8 PM. Weekend hours may vary on holidays; updates will be posted.
      </p>

      <h3 className="info-subheading">Contact Us:</h3>
      <p className="info-bold">Ready to elevate your workspace?</p>
      <p className="info-text">
        Contact us today for a personalized quote and learn more about our flexible membership options.
        We're happy to help you find the perfect fit for your business needs!
      </p>

      <ol className="info-list">
        <li>
          For more information or to book a tour, contact us at{' '}
          <a href="tel:+917021358462" className="info-link">+91 7021358462</a>{' '}
          or <a href="mailto:spaceaxis3@gmail.com" className="info-link">spaceaxis3@gmail.com</a>.
        </li>
      </ol>
    </div>
  );
};

export default OpeningHoursContact;

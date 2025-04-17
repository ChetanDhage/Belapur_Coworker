import React from 'react';
import './OpeningHoursContact.css';

const OpeningHoursContact = () => {
  return (
    <div className="info-section">
      <div className="info-container">
        <div className="section-header">
          <h2 className="section-title">Our Opening Hours</h2>
          <div className="hours-card">
            <div className="time-icon">🕘</div>
            <div className="time-content">
              <p className="time-main">Monday - Saturday</p>
              <p className="time-range">9:00 AM - 8:00 PM</p>
              <p className="time-note">Weekend hours may vary on holidays</p>
            </div>
          </div>
        </div>

        <div className="contact-section">
          <h3 className="section-subtitle">Ready to Elevate Your Workspace?</h3>
          <p className="contact-text">
            Contact us today for a personalized quote and learn more about our flexible membership options.
            We're happy to help you find the perfect fit for your business needs!
          </p>

          <div className="contact-methods">
            <a href="tel:+917021358462" className="contact-card phone">
              <div className="contact-icon">📞</div>
              <div className="contact-details">
                <span className="contact-label">Call Us</span>
                <span className="contact-value">+91 7021358462</span>
              </div>
            </a>

            <a href="mailto:spaceaxis3@gmail.com" className="contact-card email">
              <div className="contact-icon">✉️</div>
              <div className="contact-details">
                <span className="contact-label">Email Us</span>
                <span className="contact-value">spaceaxis3@gmail.com</span>
              </div>
            </a>
          </div>

          <button className="cta-button">Book a Tour Now</button>
        </div>
      </div>
    </div>
  );
};

export default OpeningHoursContact;
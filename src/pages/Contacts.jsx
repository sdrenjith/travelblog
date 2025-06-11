import React from 'react';
import { Link } from 'react-router-dom';
import './Contacts.css';

function Contacts() {
  return (
    <div className="contacts-page">
      {/* Google Fonts - Satisfy */}
      <link
        href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap"
        rel="stylesheet"
      />
      
      <div className="hero-section">
        <div className="hero-overlay">
          <div className="breadcrumb">
            <Link to="/">HOME</Link>
            <span className="separator">/</span>
            <span className="current">CONTACTS</span>
          </div>
          <h1 className="page-title">CONTACTS</h1>
        </div>
      </div>

      <div className="contact-content">
        <h2>Have a Question ?</h2>
        <h3 className="drop-line">DROP A LINE</h3>
        
        <div className="contact-form-container">
          <form className="contact-form">
            <div className="form-row">
              <input 
                type="text" 
                placeholder="Your name" 
                className="form-input"
              />
              <input 
                type="email" 
                placeholder="Your e-mail" 
                className="form-input"
              />
            </div>
            <div className="form-row">
              <textarea 
                placeholder="Your message" 
                className="form-input message-input"
                rows="8"
              ></textarea>
            </div>
            <button type="submit" className="send-message-btn">
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.1389799172547!2d-71.5429677!3d-16.4090474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a487785b9b3%3A0xa3c4a612b9942036!2sArequipa%2C%20Peru!5e0!3m2!1sen!2sus!4v1624451234567!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Social Media Section
        <div className="social-media-section">
          <div className="social-links">
            <a href="#" className="social-link">
              <div className="icon-container">
                <i className="fab fa-facebook-f"></i>
              </div>
              <span>Like us on Facebook!</span>
            </a>
            <a href="#" className="social-link">
              <div className="icon-container">
                <i className="fab fa-x-twitter"></i>
              </div>
              <span>Follow us on X</span>
            </a>
            <a href="#" className="social-link">
              <div className="icon-container">
                <i className="fab fa-youtube"></i>
              </div>
              <span>Watch us on Youtube</span>
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Contacts; 
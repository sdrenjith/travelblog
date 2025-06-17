import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Contacts.css';

function Contacts() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#enquiry') {
      const element = document.getElementById('enquiry');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const handleInstagramClick = () => {
    // Replace 'your_instagram_username' with the actual Instagram username
    window.open('https://www.instagram.com/your_instagram_username/', '_blank');
  };

  const handleWhatsAppClick = () => {
    // Replace 'your_phone_number' with your actual WhatsApp number (include country code without + symbol)
    // Example: 1234567890 for +1 234 567 890
    window.open('https://wa.me/your_phone_number', '_blank');
  };

  return (
    <div className="contacts-page">
      {/* Google Fonts - Satisfy */}
      <link
        href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap"
        rel="stylesheet"
      />
      
      {/* Font Awesome for icons */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
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

      <div className="contact-content" id="enquiry">
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

        {/* Floating Social Icons */}
        <div className="floating-social-icons">
          <div className="social-icon instagram-icon" onClick={handleInstagramClick}>
            <i className="fab fa-instagram"></i>
          </div>
          <div className="social-icon whatsapp-icon" onClick={handleWhatsAppClick}>
            <i className="fab fa-whatsapp"></i>
          </div>
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

        {/* Social Media Section */}
        
      </div>

      <style jsx>{`
        /* Floating Social Icons */
        .floating-social-icons {
          position: fixed;
          right: 30px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1000;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .social-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          transform: scale(1.1);
        }

        .social-icon i {
          font-size: 24px;
          color: white;
        }

        /* Instagram Icon Styles */
        .instagram-icon {
          background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
          box-shadow: 0 4px 15px rgba(240, 148, 51, 0.4);
        }

        .instagram-icon:hover {
          box-shadow: 0 6px 20px rgba(240, 148, 51, 0.6);
        }

        /* WhatsApp Icon Styles */
        .whatsapp-icon {
          background: #25D366;
          box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
        }

        .whatsapp-icon:hover {
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .floating-social-icons {
            right: 20px;
            gap: 12px;
          }
          
          .social-icon {
            width: 45px;
            height: 45px;
          }
          
          .social-icon i {
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  );
}

export default Contacts;
import React, { useState, useEffect } from 'react';
import { X, Facebook, Instagram } from "lucide-react";
import logo from '../public/logo.png'

const ModernFooter = () => {
  const [email, setEmail] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNewsletterSubmit = () => {
    if (email.trim()) {
      alert('Thank you for subscribing! You will receive a confirmation email shortly.');
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const infoLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Travel', href: '#travel' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Where to stay', href: '#stay' },
    { name: 'Blog', href: '#blog' }
  ];

  const blogPosts = [
    { title: 'Exploring Argentina and Chile by Bus', href: '#argentina' },
    { title: 'Spirit of Tasmania', href: '#tasmania' },
    { title: 'How to Travel to Machu Picchu', href: '#machu' }
  ];

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: 'fab fa-twitter' },
    { name: 'Facebook', href: '#', icon: 'fab fa-facebook-f' },
    { name: 'Instagram', href: '#', icon: 'fab fa-instagram' }
  ];

  return (
    <>
      {/* Bootstrap CSS CDN */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        rel="stylesheet" 
      />
      
      <style jsx>{`
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          margin: 0;
          padding: 0;
        }

        /* Demo content for spacing */
        .demo-content {
          height: 150vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 2rem;
          text-align: center;
        }

        /* Modern Footer Styles */
        .modern-footer {
          background: #3a3a3a;
          color: #b2bec3;
          padding: 60px 0 0;
          position: relative;
          margin-top: 80px;
        }

        .footer-main {
          padding-bottom: 40px;
        }

        .footer-section {
          margin-bottom: 100px;
        }

        .footer-title {
          color: #ffffff;
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 25px;
          text-transform: uppercase;
          letter-spacing: 1.2px;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 8px;
        }

        .footer-link {
          color: #b2bec3;
          text-decoration: none;
          font-size: 13px;
          line-height: 1.6;
          transition: all 0.3s ease;
          display: block;
        }

        .footer-link:hover {
          color: #ffffff;
          text-decoration: none;
        }

        .contact-info {
          font-size: 13px;
          line-height: 1.8;
        }

        .contact-info p {
          margin-bottom: 8px;
          color: #b2bec3;
        }

        .contact-info .fw-bold {
          color: #ffffff;
          font-weight: 600;
        }

        .contact-link {
          color: #b2bec3;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .contact-link:hover {
          color: #ffffff;
          text-decoration: none;
        }

        .newsletter-text {
          margin-bottom: 20px;
          font-size: 13px;
          line-height: 1.6;
          color: #b2bec3;
        }

        .newsletter-input {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 4px;
          color: #ffffff;
          font-size: 13px;
          padding: 10px 12px;
          width: 100%;
        }

        .newsletter-input::placeholder {
          color: #b2bec3;
        }

        .newsletter-input:focus {
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 0 0 2px rgba(255, 193, 7, 0.3);
          border-color: #ffc107;
          color: #ffffff;
          outline: none;
        }

        .newsletter-btn {
          background: #ffc107;
          color: #000000;
          border: none;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 700;
          padding: 10px 20px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
          width: 100%;
        }

        .newsletter-btn:hover {
          background: #ffb300;
          color: #000000;
        }

        .footer-bottom {
          background: #2a2a2a;
          padding: 20px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-bottom-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .logo-icon {
          width: 35px;
          height: 35px;
          background: #666;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 16px;
        }

        .logo-text {
          font-size: 16px;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 1px;
        }

        .copyright {
          font-size: 12px;
          color: #b2bec3;
        }

        .brand-name {
          color: #ffc107;
          font-weight: 600;
        }

        .social-links {
          display: flex;
          gap: 12px;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 35px;
          height: 35px;
          background: #555;
          border-radius: 50%;
          color: #b2bec3;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 14px;
        }

        .social-link:hover {
          background: #ffc107;
          color: #000000;
          text-decoration: none;
        }

        .scroll-top-btn {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 50px;
          height: 50px;
          background: #ffc107;
          border: none;
          border-radius: 50%;
          color: #000000;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(255, 193, 7, 0.3);
          z-index: 1000;
        }

        .scroll-top-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(255, 193, 7, 0.5);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
          }
          
          .social-links {
            justify-content: center;
          }

          .modern-footer {
            margin-top: 20px;
          }
        }
      `}</style>

      {/* Demo content to show scroll behavior */}
     

      <footer className="modern-footer">
        
          {/* Main Info Row: Info, Blog, Contacts */}
          <div className="row g-1 footer-main justify-content-center align-items-start mb-0">
            <div className="col-md-2 col-12">
              <div className="footer-section">
                <h3 className="footer-title">Info</h3>
                <ul className="footer-links">
                  {infoLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="footer-link">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="footer-section">
                <h3 className="footer-title">Blog</h3>
                <ul className="footer-links">
                  {blogPosts.map((post, index) => (
                    <li key={index}>
                      <a href={post.href} className="footer-link">
                        {post.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="footer-section">
                <h3 className="footer-title">Contacts</h3>
                <div className="ontact-info">
                  <p className="fw-bold">Andaman Reef Tours and Travels</p>
                  <p>Port Blair, Andaman & Nicobar Islands</p>
                  <p>
                    <a href="mailto:andamanbeacontoursandtravels@gmail.com" className="contact-link">
                      andamanbeacontoursandtravels@gmail.com
                    </a>
                  </p>
                  <p>
                    <a href="tel:18001234567" className="contact-link">
                      1 800 123 4567
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section: below main info row */}
          <div className="row justify-content-center mt-0 mb-4">
            <div className="col-md-6 col-12">
              <div className="footer-section text-center">
                <h3 className="footer-title">Newsletter Sign Up</h3>
                <p className="newsletter-text">
                  Subscribe now and receive a 20% discount on your next guidebook purchase
                </p>
                <div className="newsletter-form d-flex flex-column flex-sm-row gap-2 justify-content-center align-items-center">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="newsletter-input mb-2 mb-sm-0"
                    style={{ minWidth: '220px' }}
                  />
                  <button
                    onClick={handleNewsletterSubmit}
                    className="newsletter-btn"
                  >
                    SIGN UP
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom mt-4">
            <div className="footer-bottom-content d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
              <div className="footer-logo d-flex align-items-center mb-2 mb-md-0">
                <div className="logo-icon"><img style={{width: '60px',height:'40px',borderRadius: '100px'}} src={logo} alt="" /></div>
                <span className="logo-text ms-2">Andaman Reef Tours and Travels</span>
              </div>
              <div className="copyright text-center mb-2 mb-md-0">
                <span>© 2025 Andaman Reef Tours and Travels. All rights reserved.</span>
              </div>
              <div className="social-links d-flex gap-2">
                <a href="#" title="Twitter" className="social-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" title="Facebook" className="social-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://instagram.com/" title="Instagram" className="social-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
       
        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="scroll-top-btn"
            title="Scroll to top"
          >
            <i className="fas fa-arrow-up"></i>
          </button>
        )}
      </footer>

      {/* Bootstrap JS */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.bundle.min.js"></script>
    </>
  );
};

export default ModernFooter;
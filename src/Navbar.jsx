import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from '../public/navlog.png'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.navbar-custom')) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Mock Link component for demonstration (replace with actual react-router-dom Link)
  const Link = ({ to, children, className, onClick }) => (
    <a href={to} className={className} onClick={onClick}>
      {children}
    </a>
  );

  //when click booktravel button go to booking page
  const handleBookClick = () => {
    Navigate('/Booking');
  }

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <>
      <nav className={`navbar-custom ${isScrolled ? 'scrolled' : ''}`} style={{overflowX: "hidden", width: "100%", position: "fixed", top: 0, left: 0, right: 0}}>
        <div className="container" style={{maxWidth: "100%", padding: "0 20px",overflowX: 'hidden'}}>
          <Link className="navbar-brand" to="/">
            <img
            width={'900px'}
            height={'700px'} 
              src={Logo} 
              alt="UniTravel Logo"
            />
          </Link>
          
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <Link className={`nav-link home ${isActive('/')}`} to="/" onClick={closeMenu}>HOME</Link>
            <Link className={`nav-link about ${isActive('/about')}`} to="/about" onClick={closeMenu}>ABOUT</Link>
            <Link className={`nav-link packages ${isActive('/packages')}`} to="/packages" onClick={closeMenu}>PACKAGES</Link>
            <Link className={`nav-link Destination ${isActive('/Destination')}`} to="/Destination" onClick={closeMenu}>DESTINATIONS</Link>
            <Link className={`nav-link stay ${isActive('/stay')}`} to="/stay" onClick={closeMenu}>ACTIVITIES</Link>
            <Link className={`nav-link booking ${isActive('/booking')}`} to="/booking" onClick={closeMenu}>BOOKING</Link>
            <Link className={`nav-link contacts ${isActive('/contacts')}`} to="/contacts" onClick={closeMenu}>CONTACT US</Link>
          </div>

          <div className="contact-section">
            <div className="phone-number">
              <i className="fas fa-phone-alt"></i>
              <span>1 800 123 4567</span>
            </div>
            <Link className="book-travel-btn" to="/contacts#enquiry" onClick={handleBookClick}>ENQUIRY</Link>
          </div>

          <button 
            className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
      </nav>

      <style jsx>{`
        .navbar-custom {
          background-color: #ffffff;
          padding: 12px 0;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          width: 100%;
          position: fixed;
          top: 0;
          z-index: 1000;
          transition: all 0.3s ease;
          overflow-x: "hidden";
        }

        .navbar-custom.scrolled {
          background-color: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 10px rgba(0,0,0,0.15);
          padding: 8px 0;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          position: relative;
        }

        .navbar-brand {
          flex-shrink: 0;
          transition: transform 0.3s ease;
          z-index: 1001;
        }

        .navbar-brand:hover {
          transform: scale(1.05);
        }

        .navbar-brand img {
          height: 45px;
          width: auto;
          transition: filter 0.3s ease;
        }

        .navbar-brand:hover img {
          filter: brightness(1.1);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 15px;
          margin: 0;
          padding: 0 15px;
          font-size: 10px;
        }

        .nav-link {
          color: #86898d;
          font-size: 10px;
          font-weight: 500;
          text-decoration: none;
          text-transform: uppercase;
          transition: all 0.3s ease;
          white-space: nowrap;
          letter-spacing: 0.2px;
          position: relative;
          padding: 8px 12px;
          border-radius: 4px;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(45deg, #ffa726, #f57c00);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .nav-link:hover::before {
          width: 80%;
        }

        .nav-link:hover {
          color: rgb(239, 152, 22);
          text-decoration: none;
          background-color: rgba(255, 167, 38, 0.1);
          transform: translateY(-2px);
        }

        .nav-link.active {
          color: #ffa726;
          background-color: rgba(255, 167, 38, 0.1);
        }

        .nav-link.active::before {
          width: 80%;
        }

        .contact-section {
          display: flex;
          align-items: center;
          gap: 15px;
          flex-shrink: 0;
        }

        .phone-number {
          display: flex;
          align-items: center;
          gap: 4px;
          color: #86898d;
          font-size: 11px;
          font-weight: 500;
          white-space: nowrap;
          transition: all 0.3s ease;
          padding: 6px 10px;
          border-radius: 20px;
        }

        .phone-number:hover {
          background-color: rgba(255, 167, 38, 0.1);
          color: #ffa726;
          transform: scale(1.05);
        }

        .phone-number i {
          color: #ffa726;
          transform: rotate(90deg);
          font-size: 10px;
          transition: transform 0.3s ease;
        }

        .phone-number:hover i {
          transform: rotate(90deg) scale(1.2);
        }

        .book-travel-btn {
          background: linear-gradient(45deg, #ffa726, #f57c00);
          color: white;
          padding: 8px 16px;
          font-size: 10px;
          font-weight: 600;
          text-decoration: none;
          text-transform: uppercase;
          transition: all 0.3s ease;
          white-space: nowrap;
          letter-spacing: 0.2px;
          border-radius: 25px;
          box-shadow: 0 2px 8px rgba(255, 167, 38, 0.3);
          position: relative;
          overflow: hidden;
        }

        .book-travel-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }

        .book-travel-btn:hover::before {
          left: 100%;
        }

        .book-travel-btn:hover {
          background: linear-gradient(45deg, #f57c00, #e65100);
          color: white;
          text-decoration: none;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(255, 167, 38, 0.5);
        }

        .mobile-menu-toggle {
          display: none;
          flex-direction: column;
          justify-content: center;
          width: 30px;
          height: 30px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 1001;
        }

        .mobile-menu-toggle span {
          width: 25px;
          height: 3px;
          background-color: #86898d;
          margin: 3px 0;
          transition: 0.3s;
          border-radius: 2px;
        }

        .mobile-menu-toggle.active span:nth-child(1) {
          transform: rotate(-45deg) translate(-5px, 6px);
          background-color: #ffa726;
        }

        .mobile-menu-toggle.active span:nth-child(2) {
          opacity: 0;
        }

        .mobile-menu-toggle.active span:nth-child(3) {
          transform: rotate(45deg) translate(-5px, -6px);
          background-color: #ffa726;
        }

        .mobile-menu-overlay {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 999;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .mobile-menu-overlay.active {
          opacity: 1;
        }

        /* Tablet Responsive */
        @media (max-width: 1200px) {
          .container {
            padding: 0 15px;
            gap: 15px;
          }

          .nav-links {
            gap: 12px;
            padding: 0 10px;
          }

          .nav-link {
            padding: 6px 8px;
          }

          .contact-section {
            gap: 12px;
          }
        }

        @media (max-width: 992px) {
          .nav-links {
            gap: 8px;
            padding: 0 8px;
          }

          .nav-link {
            font-size: 9px;
            padding: 6px 6px;
          }

          .phone-number {
            font-size: 10px;
            padding: 4px 8px;
          }

          .book-travel-btn {
            font-size: 9px;
            padding: 6px 12px;
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .container {
            padding: 0 15px;
          }

          .mobile-menu-toggle {
            display: flex;
          }

          .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            width: 280px;
            height: 100vh;
            background-color: #ffffff;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            padding: 80px 30px 30px;
            box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
            transition: right 0.3s ease;
            z-index: 1000;
            gap: 0;
          }

          .nav-links.active {
            right: 0;
          }

          .mobile-menu-overlay {
            display: block;
          }

          .nav-link {
            width: 100%;
            padding: 15px 0;
            font-size: 14px;
            border-bottom: 1px solid #f0f0f0;
            border-radius: 0;
            text-align: left;
          }

          .nav-link:hover {
            transform: translateX(10px);
            background-color: rgba(255, 167, 38, 0.05);
          }

          .nav-link::before {
            left: 0;
            transform: none;
            width: 0;
            height: 100%;
            background: linear-gradient(90deg, #ffa726, #f57c00);
          }

          .nav-link:hover::before {
            width: 4px;
          }

          .contact-section {
            gap: 8px;
          }

          .phone-number {
            font-size: 9px;
            padding: 4px 8px;
          }

          .phone-number span {
            display: none;
          }

          .book-travel-btn {
            font-size: 8px;
            padding: 6px 10px;
          }
        }

        @media (max-width: 640px) {
          .container {
            padding: 0 10px;
          }

          .navbar-brand img {
            height: 24px;
          }

          .phone-number {
            display: none;
          }

          .book-travel-btn {
            font-size: 7px;
            padding: 5px 8px;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 8px;
          }

          .navbar-brand img {
            height: 22px;
          }

          .book-travel-btn {
            font-size: 6px;
            padding: 4px 6px;
          }

          .nav-links {
            width: 100%;
            right: -100%;
          }

          .nav-links.active {
            right: 0;
          }
        }

        /* Very small screens */
        @media (max-width: 360px) {
          .book-travel-btn {
            display: none;
          }

          .mobile-menu-toggle {
            width: 25px;
            height: 25px;
          }

          .mobile-menu-toggle span {
            width: 20px;
            height: 2px;
          }
        }

        /* Landscape orientation for mobile */
        @media (max-width: 768px) and (orientation: landscape) {
          .nav-links {
            padding: 60px 30px 20px;
          }

          .nav-link {
            padding: 10px 0;
            font-size: 12px;
          }
        }

        /* High DPI screens */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .navbar-brand img {
            image-rendering: -webkit-optimize-contrast;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;
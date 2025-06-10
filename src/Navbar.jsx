import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-custom" style={{display:"sticky"}}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img 
            src="https://unitravel.ancorathemes.com/wp-content/uploads/2017/01/logo1_x2.png" 
            alt="UniTravel Logo"
          />
        </Link>
        
        <div className="nav-links">
          <Link className="nav-link home" to="/">HOME</Link>
          <Link className="nav-link" to="/about">ABOUT</Link>
          <Link className="nav-link" to="/packages">PACKAGES</Link>
          <Link className="nav-link" to="/Destination">DESTINATIONS</Link>
          <Link className="nav-link" to="/stay">ACTIVITIES</Link>
          <Link className="nav-link" to="/booking">BOOKING</Link>

          
          <Link className="nav-link" to="/contacts">CONTACT US</Link>
        </div>

        <div className="contact-section">
          <div className="phone-number">
            <i className="fas fa-phone-alt"></i>
            <span>1 800 123 4567</span>
          </div>
          <Link to="/book" className="book-travel-btn">BOOK YOUR TRAVEL</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

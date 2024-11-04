import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css'; // Import your custom styles
import logo from './logo192.png'; // Import the logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <div className="event-banner">

<p><span>Yesp E-Shop Pre-Launch Event</span> <a href="https://events.yesptech.com">Join us for a virtual event </a></p>

</div>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        
        <div className={`navbar-brand ${scrolled ? 'scrolled' : ''}`}>
          <img src={logo} alt="Logo" className="logo" />
          <span className={`brand-name ${scrolled ? 'scrolled' : ''}`}>Yesp Tech</span>
        </div>
        <button className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`navbar-links ${isOpen ? 'open' : ''} ${scrolled ? 'scrolled' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="https://events.yesptech.com">Events</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Textual Event Banner */}
      
    </>
  );
};

export default Navbar;

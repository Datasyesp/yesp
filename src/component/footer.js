import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from './logo.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <div className="footer-logo">
                        <img src={logo} alt="Yesptech Logo" className="logo" />
                        <span className="company-name">Yesptech.</span>
                    </div>
                    <p className="description">
                        {/* Add description if needed */}
                    </p>
                    <p className="copyright">
                        © 2024 Yesptech Inc. All rights reserved.
                    </p>
                </div>
                <div className="footer-right">
                    <div className="footer-links">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about-us">About</Link></li>
                            <li><Link to="/Services">Services</Link></li>
                        </ul>
                        <ul>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/careers">Join Team</Link></li>
                            <li><Link to="/Developers">Developers</Link></li>
                        </ul>
                        <ul>
                            <li><Link to="/faq">FAQ's</Link></li>
                            <li><Link to="/news">News</Link></li>
                            <li><a href="https://admin.yesptech.com">Login</a></li>
                        </ul>
                    </div>
                    <div className="footer-icons">
                        <a href="https://www.facebook.com/yesptech" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="https://www.instagram.com/yesptech" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://x.com/YespTech" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} /> {/* Using faTwitter as a placeholder */}
                        </a>
                        <a href="https://in.linkedin.com/company/yesptech" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a href="mailto:contact@yesptech.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                        <a href="https://wa.me/9001270298" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

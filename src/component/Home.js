import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function HeroSection() {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleGetStartedClick = () => {
        navigate('/contact'); // Navigate to the Contact Us page
    };

    const handleLearnMoreClick = () => {
        navigate('/services'); // Navigate to the Services page
    };

    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Transform Your Business with Creative Digital Solutions</h1>
                <p className="hero-description">
                    We craft exceptional digital experiences that elevate your brand, captivate your audience, and drive success. 
                    Whether it's through cutting-edge web design, innovative digital marketing, or strategic branding, we are 
                    here to make your business shine in the digital world.
                </p>
                <div className="cta-container">
                    <button className="cta-button" onClick={handleGetStartedClick}>
                        Get Started Today
                    </button>
                    <button className="secondary-button" onClick={handleLearnMoreClick}>
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;

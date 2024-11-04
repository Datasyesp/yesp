import React from 'react';
import { Helmet } from 'react-helmet';

import WhoWeAre from '../AboutUs';
import Services from '../Services';
import ContactUs from '../contact';
import '../HomePage.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function App() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleGetStartedClick = () => {
      navigate('/contact'); // Navigate to the Contact Us page
  };

  const handleLearnMoreClick = () => {
      navigate('/services'); // Navigate to the Services page
  };

  return (
    <div>
      <Helmet>
        <title>Yesp Tech - Leading Web Development & Digital Solutions Provider</title>
        <meta
          name="description"
          content="Yesp Tech is a global leader in web development, digital marketing, and B2B solutions. We deliver innovative digital solutions tailored to your business needs. Learn more about our world-class services."
        />
        <meta
          name="keywords"
          content="Yesp Tech, web development, digital marketing, B2B solutions, SEO, custom software development, mobile application development"
        />
        <meta
          property="og:title"
          content="Yesp Tech - Leading Web Development & Digital Solutions Provider"
        />
        <meta
          property="og:description"
          content="Yesp Tech is a global leader in web development, digital marketing, and B2B solutions. We deliver innovative digital solutions tailored to your business needs."
        />
        <meta
          property="og:url"
          content="https://www.yesptech.com"
        />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:title"
          content="Yesp Tech - Leading Web Development & Digital Solutions Provider"
        />
        <meta
          name="twitter:description"
          content="Yesp Tech is a global leader in web development, digital marketing, and B2B solutions. Discover our innovative solutions tailored to your business needs."
        />
        <link rel="canonical" href="https://www.yesptech.com/" />
        <script type="application/ld+json">
        {`{
          "@context": "http://schema.org",
          "@type": "Organization",
          "name": "Yesp Tech",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Your Street, Erode",
            "addressLocality": "Erode",
            "addressRegion": "TN",
            "postalCode": "638001",
            "addressCountry": "IN"
          },
          "telephone": "+91-9001270298",
          "url": "https://www.yesptech.com",
          "logo": "https://www.yesptech.com/",
          "sameAs": [
            "https://www.instagram.com/yesptech/",
            "https://x.com/YespTech",
            "https://www.linkedin.com/company/yesptech/",
            "https://www.facebook.com/yesptech"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9001270298",
            "contactType": "Customer Support"
          }
        }`}
        </script>
      </Helmet>

      <section className="hero">
        <div className="hero-content">
          <h1>Elevate Your Business with Leading Digital Solutions</h1>
          <p className="hero-description">
            At Yesp Tech, we are committed to delivering cutting-edge web development, digital marketing, and B2B solutions. Our global expertise ensures innovative and impactful digital experiences that drive business success.
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

      <WhoWeAre />
      <Services />
      <ContactUs />
    </div>
  );
}

export default App;

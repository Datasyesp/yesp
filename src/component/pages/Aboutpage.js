import React from 'react';
import { Helmet } from 'react-helmet';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <Helmet>
        <title>About Us - Yesp Tech | Leading Web Development & Digital Marketing</title>
        <meta
          name="description"
          content="Discover Yesp Tech, a leader in web development and digital marketing. We offer innovative solutions to drive growth and efficiency for your business."
        />
        <meta
          name="keywords"
          content="Yesp Tech, Yesp, web development, digital marketing, technology solutions, B2B solutions, SEO management"
        />
        <meta
          property="og:title"
          content="About Us - Yesp Tech | Leading Web Development & Digital Marketing"
        />
        <meta
          property="og:description"
          content="Discover Yesp Tech, a leader in web development and digital marketing. We offer innovative solutions to drive growth and efficiency for your business."
        />
       
        <meta
          property="og:url"
          content="https://www.yesptech.com/about-us" // Replace with your page URL
        />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:title"
          content="About Us - Yesp Tech | Leading Web Development & Digital Marketing"
        />
        <meta
          name="twitter:description"
          content="Discover Yesp Tech, a leader in web development and digital marketing. We offer innovative solutions to drive growth and efficiency for your business."
        />
      
      </Helmet>
      
      <h1>Who We Are</h1>
      <p>
        At Yesptech, we believe in empowering businesses with innovative technology solutions 
        that drive growth and efficiency. Our team of experts is dedicated to delivering 
        top-notch services that are tailored to meet the unique needs of each client.
      </p>
      <p>
        Established with a vision to transform the way businesses operate, Yesptech has quickly 
        become a trusted partner for companies looking to harness the power of technology. 
        Our commitment to excellence has earned us recognition and numerous industry accolades.
      </p>

      <h2>Our Vision</h2>
      <p>
        Our vision is to be a leader in the technology industry, driving change through cutting-edge solutions 
        that empower businesses to thrive in the digital age. We aim to continuously innovate and provide 
        services that enhance productivity, streamline operations, and unlock new opportunities for growth.
      </p>

      <h2>Our Values</h2>
      <ul>
        <li><strong>Innovation:</strong> We strive to stay ahead of the curve by embracing new technologies and creative approaches.</li>
        <li><strong>Integrity:</strong> We operate with transparency and honesty in everything we do.</li>
        <li><strong>Customer-Centric:</strong> Our clients are at the heart of our business, and we go the extra mile to ensure their success.</li>
        <li><strong>Collaboration:</strong> We believe in the power of teamwork, both within our company and with our clients.</li>
      </ul>

      <h2>Why Choose Us?</h2>
      <p>
        At Yesptech, we go beyond simply providing technology solutions. We are your partners in progress. 
        Here’s why you should choose us:
      </p>
      <ul>
        <li><strong>Expertise:</strong> Our team consists of industry veterans with years of experience in delivering top-notch technology solutions.</li>
        <li><strong>Tailored Solutions:</strong> We understand that every business is unique, so we customize our services to meet your specific needs.</li>
        <li><strong>Commitment to Excellence:</strong> We are dedicated to delivering results that exceed expectations, every time.</li>
        <li><strong>Proven Track Record:</strong> Our portfolio includes successful projects across a wide range of industries.</li>
      </ul>
    </div>
  );
};

export default AboutUs;

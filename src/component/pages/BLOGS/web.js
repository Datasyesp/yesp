// WebDevelopmentPage.js
import React from 'react';
import { Helmet } from 'react-helmet';
import './page.css'; // Assuming you have a CSS file for styling

const WebDevelopmentPage = () => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Top Web Development Company in Erode | Yesp Tech</title>
        <meta
          name="description"
          content="Looking for a top web development company in Erode? Yesp Tech offers expert web development services, including custom solutions, e-commerce, and corporate websites. Transform your online presence with our professional team."
        />
      </Helmet>

      <header className="header">
        <h1>Premier Web Development Company in Erode</h1>
      </header>

      <section className="intro">
        <p>
          Welcome to Yesp Tech, the leading web development company in Erode. We specialize in creating innovative and effective web solutions tailored to your business needs. Whether you're looking to build a new website, enhance your current site, or develop a custom web application, our team of experts is here to help.
        </p>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Yesp Tech for Your Web Development Needs?</h2>
        <h3>Expert Web Development Services</h3>
        <p>
          At Yesp Tech, we offer a wide range of web development services designed to meet your specific requirements:
        </p>
        <ul>
          <li><strong>Custom Website Development:</strong> We build websites from the ground up to ensure they meet your unique business needs.</li>
          <li><strong>E-commerce Development:</strong> Create an online store that drives sales and engages customers with our tailored e-commerce solutions.</li>
          <li><strong>Corporate Website Design:</strong> Enhance your corporate image with professional website design and development.</li>
        </ul>

        <h3>Our Proven Process</h3>
        <ol>
          <li><strong>Consultation and Planning:</strong> We start by understanding your business goals and requirements.</li>
          <li><strong>Design and Development:</strong> Our team creates a custom design and develops your website with the latest technologies.</li>
          <li><strong>Testing and Launch:</strong> We rigorously test your website to ensure it performs flawlessly before launching.</li>
          <li><strong>Ongoing Support:</strong> We offer continued support and maintenance to keep your website running smoothly.</li>
        </ol>
      </section>

      <section className="our-expertise">
        <h2>Our Expertise</h2>
        <h3>Industries We Serve</h3>
        <ul>
          <li><strong>Retail and E-commerce:</strong> Build a robust online store to reach a wider audience.</li>
          <li><strong>Healthcare:</strong> Develop secure and user-friendly websites for healthcare providers.</li>
          <li><strong>Finance:</strong> Create reliable and compliant websites for financial services.</li>
          <li><strong>Education:</strong> Design engaging and informative websites for educational institutions.</li>
        </ul>

        <h3>Technologies We Use</h3>
        <ul>
          <li><strong>Front-End Technologies:</strong> HTML5, CSS3, JavaScript, React, Angular</li>
          <li><strong>Back-End Technologies:</strong> Node.js, PHP, Python, Ruby on Rails</li>
          <li><strong>Content Management Systems (CMS):</strong> WordPress, Joomla, Drupal</li>
        </ul>
      </section>

      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <h3>What is web development?</h3>
        <p>Web development involves creating and maintaining websites. It includes everything from building the site’s structure and layout to coding and adding functionality.</p>

        <h3>Why is having a professional website important?</h3>
        <p>A professional website enhances your business's credibility, provides a platform for online marketing, and helps attract and retain customers.</p>

        <h3>How long does it take to develop a website?</h3>
        <p>The timeline for developing a website varies based on complexity. On average, a basic site takes 4-6 weeks, while more complex sites may take several months.</p>

        <h3>Can Yesp Tech help with SEO?</h3>
        <p>Yes, we offer comprehensive SEO services to ensure your website ranks well on search engines and attracts more traffic.</p>

        <h3>What industries do Yesp Tech’s B2B solutions cater to?</h3>
        <p>Our B2B solutions are versatile and can be customized for various industries, including manufacturing, retail, logistics, and professional services.</p>
      </section>

      <section className="contact">
        <h2>Contact Us Today</h2>
        <p>
          Ready to take your online presence to the next level? Contact Yesp Tech, the top web development company in Erode, and let’s discuss how we can help you achieve your goals.
        </p>
     
        <a href="/contact" className="btn">Request a Quote</a>
      </section>
    </div>
  );
};

export default WebDevelopmentPage;

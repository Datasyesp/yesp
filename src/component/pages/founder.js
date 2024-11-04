import React from 'react';
import { Helmet } from 'react-helmet';
import founderPhoto from '../srinithinsomasundaram.jpg'; // Update the path to your local image
import './AboutFounder.css'; // Ensure you have the necessary CSS file

const AboutFounder = () => {
  return (
    <div className="about-founder">
      <Helmet>
        <title>About the Founder - Yesp Tech</title>
        <meta
          name="description"
          content="Learn about Srinithin Somasundaram, the founder and CEO of Yesp Tech. Discover his journey, achievements, and the vision behind Yesp Tech."
        />
        <meta
          name="keywords"
          content="Srinithin Somasundaram, Yesp Tech founder, Yesp Tech CEO, about Srinithin Somasundaram, Yesp Tech vision"
        />
        <meta
          property="og:title"
          content="About the Founder - Yesp Tech"
        />
        <meta
          property="og:description"
          content="Learn about Srinithin Somasundaram, the founder and CEO of Yesp Tech. Discover his journey, achievements, and the vision behind Yesp Tech."
        />
        <meta
          property="og:image"
          content={founderPhoto} // Use the image URL for social media previews
        />
        <meta
          property="og:url"
          content="https://yesptech.com/founder" // Replace with the actual URL of your About Founder page
        />
        <meta
          property="twitter:title"
          content="About the Founder - Yesp Tech"
        />
        <meta
          property="twitter:description"
          content="Learn about Srinithin Somasundaram, the founder and CEO of Yesp Tech. Discover his journey, achievements, and the vision behind Yesp Tech."
        />
        <meta
          property="twitter:image"
          content={founderPhoto} // Use the image URL for Twitter
        />
        <meta
          property="twitter:card"
          content="summary_large_image"
        />
        <script
          type="application/ld+json"
        >
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Srinithin Somasundaram",
              "jobTitle": "Founder & CEO",
              "affiliation": {
                "@type": "Organization",
                "name": "Yesp Tech"
              },
              "image": "${founderPhoto}", // Use the image URL
              "url": "URL_TO_YOUR_ABOUT_FOUNDER_PAGE", // Replace with the URL of the About Founder page
              "sameAs": [
              "https://www.linkedin.com/in/srinithin-somasundaram", // Replace with actual social media URLs
                "https://x.com/ssrinithin",
                "https://www.instagram.com/srinithinsomasundaram/",
              ]
            }
          `}
        </script>
      </Helmet>
      <header className="about-founder-header">
        <br />
        <br />
        <br />

        <h1>About Srinithin Somasundaram</h1>
      </header>
      <main>
        <section className="founder-info">
          <img
            src={founderPhoto} // Use the local image import
            alt="Srinithin Somasundaram"
            className="founder-photo"
          />
          <div className="founder-details">
            <h2>Srinithin Somasundaram</h2>
            <p>
              Srinithin Somasundaram is the visionary Founder and CEO of Yesp Tech. With a passion for technology and innovation, Srinithin has led Yesp Tech to become a prominent name in the web development and digital marketing industry.
            </p>
            <p>
              Under his leadership, Yesp Tech has achieved significant milestones and delivered outstanding results across various sectors, including web development, digital marketing, and SEO management.
            </p>
            <p>
              Srinithin's commitment to excellence and customer satisfaction is reflected in the company's approach to providing tailored solutions and driving growth for its clients.
            </p>
            <p>
              He is also an advocate for continuous learning and innovation, which has been a cornerstone of Yesp Tech's success.
            </p>
            <div className="founder-social-links">
              <a href="https://www.linkedin.com/in/srinithin-somasundaram" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://x.com/ssrinithin" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
              <a href="https://www.instagram.com/srinithinsomasundaram/" target="_blank" rel="noopener noreferrer">
               Instagram
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutFounder;

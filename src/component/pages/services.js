import React from 'react';
import { Helmet } from 'react-helmet';
import './ServicesPage.css';
import { FaLaptopCode, FaBullhorn, FaHandshake, FaRocket } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link for navigation

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Web Solutions",
    description: "We provide cutting-edge web solutions tailored to your business needs, ensuring a robust online presence.",
    features: [
      "Custom website development",
      "Responsive design",
      "E-commerce solutions"
    ],
    buttonText: "Explore Web Solutions",
  },
  {
    icon: <FaBullhorn />,
    title: "Ads",
    description: "Reach your target audience effectively with our customized ad services, ensuring maximum ROI and engagement.",
    features: [
      "Targeted ad campaigns",
      "Social media advertising",
      "Pay-per-click management"
    ],
    buttonText: "Start Your Ad Campaign",
  },
  {
    icon: <FaHandshake />,
    title: "B2B Solutions",
    description: "Enhance your business partnerships with our specialized B2B solutions, designed to streamline operations and foster growth.",
    features: [
      "B2B platform development",
      "Supply chain management",
      "Customer relationship management"
    ],
    buttonText: "Boost Your B2B Strategy",
  },
  {
    icon: <FaRocket />,
    title: "Startup Launch Pad",
    description: "Accelerate your startup's growth with our comprehensive launch pad services, tailored to transform innovative ideas into successful ventures.",
    features: [
      "Business model development",
      "Funding and investment guidance",
      "Go-to-market strategy"
    ],
    buttonText: "Launch Your Startup",
  }
];

const ServiceCard = ({ icon, title, description, features, buttonText }) => (
  <div className="service-card">
    <div className="service-icon">{icon}</div>
    <h3 className="service-title">{title}</h3>
    <p className="service-description">{description}</p>
    <ul className="service-features">
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <Link to="/contact" className="service-button">{buttonText}</Link> {/* Use Link for navigation */}
  </div>
);

const ServicesPage = () => (
  <div className="services-container">
    <Helmet>
      <title>Our Services - Yesp Tech</title>
      <meta
        name="description"
        content="Discover Yesp Tech's range of services including web solutions, targeted ads, B2B solutions, and startup launch pad. Tailored services to enhance your business."
      />
      <meta
        name="keywords"
        content="Yesp Tech, Yesp,web solutions, targeted ads, B2B solutions, startup launch pad, business services"
      />
      <meta
        property="og:title"
        content="Our Services - Yesp Tech"
      />
      <meta
        property="og:description"
        content="Discover Yesp Tech's range of services including web solutions, targeted ads, B2B solutions, and startup launch pad. Tailored services to enhance your business."
      />
   
      <meta
        property="og:url"
        content="https://www.yesptech.com/services" // Replace with your page URL
      />
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        name="twitter:title"
        content="Our Services - Yesp Tech"
      />
      <meta
        name="twitter:description"
        content="Discover Yesp Tech's range of services including web solutions, targeted ads, B2B solutions, and startup launch pad. Tailored services to enhance your business."
      />
     
    </Helmet>
    
    <h2 className="services-heading">Our Services & Solutions</h2>
    <p className="services-subheading">Enhance your business with our specialized services. We offer web solutions, targeted ads, and comprehensive B2B solutions to support your growth.</p>
    <div className="services-grid">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  </div>
);

export default ServicesPage;

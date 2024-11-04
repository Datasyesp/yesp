import React from "react";

const services = [
  {
    title: "Web Solutions",
    description: "We provide cutting-edge web solutions tailored to your business needs.",
    // imageUrl: "https://dribbble.com/shots/12255737-Who-we-are?utm_source=Clipboard_Shot&utm_campaign=berinholy&utm_content=Who%20we%20are&utm_medium=Social_Share", // Replace with actual image URL
    alt: "Web Solutions",
  },
  {
    title: "Ads",
    description: "Reach your target audience effectively with our customized ad services.",
    // imageUrl: "https://example.com/ads-image.jpg", // Replace with actual image URL
    alt: "Ads",
  },
  {
    title: "B2B Solutions",
    description: "Our B2B solutions are designed to enhance your business partnerships.",
    // imageUrl: "https://example.com/b2b-solutions-image.jpg", // Replace with actual image URL
    alt: "B2B Solutions",
  },
  {
    title: "Startup Launch Pad",
    description: "Accelerate your startup's growth with our comprehensive launch pad services, tailored to transform innovative ideas into successful ventures.",
    // imageUrl: "https://example.com/b2b-solutions-image.jpg", // Replace with actual image URL
    alt: "B2B Solutions",
  },

];

const ServiceCard = ({ title, description, imageUrl, alt }) => (
  <div style={styles.card}>
    {/* <img src={imageUrl} alt={alt} style={styles.image} /> */}
    <h3 style={styles.cardTitle}>{title}</h3>
    <p style={styles.cardDescription}>{description}</p>
    <button style={styles.button}>Learn more</button>
  </div>
);

const Services = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>Our Services</h1>

    <div style={styles.featuresContainer}>
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  </div>
);

const styles = {
  container: {
    padding: "50px 20px",
    backgroundColor: "#000",
    textAlign: "center",
  },
  title: {
    color: "#fff",
    fontSize: "36px",
    marginBottom: "20px",
  },
  featuresContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  card: {
    backgroundColor: "#1a1a1a",
    borderRadius: "15px",
    padding: "20px",
    width: "100%",
    maxWidth: "300px",
    textAlign: "left",
    margin: "10px",
    flex: "1 1 calc(33.333% - 20px)", // Responsive card width
    boxSizing: "border-box",
  },
  image: {
    width: "100%",
    borderRadius: "10px",
  },
  cardTitle: {
    color: "#fff",
    fontSize: "20px",
    margin: "20px 0 10px",
  },
  cardDescription: {
    color: "#b0b0b0",
    fontSize: "16px",
  },
  button: {
    marginTop: "20px",
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  "@media (max-width: 768px)": {
    featuresContainer: {
      flexDirection: "column",
      alignItems: "center",
    },
    card: {
      flex: "1 1 100%",
    },
  },
};

export default Services;

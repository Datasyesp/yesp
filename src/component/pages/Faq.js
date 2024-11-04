import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <Helmet>
        <title>FAQs - Yesp Tech</title>
        <meta
          name="description"
          content="Find answers to common questions about Yesp Tech's services, including web development, digital marketing, SEO management, and B2B solutions. Learn more about our founder, Srinithin Somasundaram."
        />
        <meta
          name="keywords"
          content="Yesp Tech, Yesp FAQ, Yesp services, Yesp SEO, web development, digital marketing, B2B solutions, Srinithin Somasundaram"
        />
        <meta
          name="author"
          content="Srinithin Somasundaram, Yesp Tech"
        />
        <meta
          property="og:title"
          content="FAQs - Yesp Tech"
        />
        <meta
          property="og:description"
          content="Find answers to common questions about Yesp Tech's services, including web development, digital marketing, SEO management, and B2B solutions. Learn more about our founder, Srinithin Somasundaram."
        />
        <meta
          property="og:image"
          content="https://media.licdn.com/dms/image/v2/D5603AQFwXobstdNa4g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1720847388657?e=1730937600&v=beta&t=Bf7TZ_BXptucbY2t-Nd_8qhLRDYlwygDZj1MSUGcUu0" // Replace with the URL of an image for social media previews
        />
        <meta
          property="og:url"
          content="https://yesptech.com/faq" // Replace with the actual URL of your FAQ page
        />
        <meta
          property="twitter:title"
          content="FAQs - Yesp Tech"
        />
        <meta
          property="twitter:description"
          content="Find answers to common questions about Yesp Tech's services, including web development, digital marketing, SEO management, and B2B solutions. Learn more about our founder, Srinithin Somasundaram."
        />
        <meta
          property="twitter:image"
          content="https://x.com/ssrinithin" // Replace with the URL of an image for Twitter
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
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What services does Yesp Tech offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yesp Tech offers a wide range of services including web development, digital marketing, SEO management, custom software development, and mobile application development. We are dedicated to providing tailored solutions to meet the unique needs of each client."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why should I choose Yesp Tech?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yesp Tech is known for its commitment to excellence, innovation, and customer satisfaction. Our team of experts works closely with clients to deliver results that exceed expectations. We have a proven track record of success across various industries."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is SEO and why is it important?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "SEO (Search Engine Optimization) is a crucial aspect of digital marketing that focuses on improving your website's visibility on search engines. Higher visibility leads to more traffic, better brand recognition, and increased business opportunities. Yesp Tech specializes in comprehensive SEO management to help your business achieve these goals."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does Yesp Tech approach SEO management?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yesp Tech takes a holistic approach to SEO management, encompassing on-page optimization, content creation, keyword research, technical SEO, and link building. Our strategies are designed to improve your search engine rankings and drive organic traffic to your site."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does it take to see results from Yesp Tech's SEO services?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "SEO is a long-term investment. While some improvements may be seen within a few months, significant results typically take six months to a year, depending on the competitiveness of your industry and the effectiveness of the implemented strategies."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can Yesp Tech help with local SEO?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "                    "Yes, Yesp Tech offers local SEO services tailored to improve your visibility in local search results. This is particularly beneficial for businesses that rely on local customers. Our local SEO strategies include optimizing your Google My Business profile, managing local citations, and creating location-specific content."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are B2B solutions and how can Yesp Tech assist?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "B2B (Business-to-Business) solutions are products or services designed to help businesses operate more effectively and efficiently. Yesp Tech provides tailored B2B solutions that include custom software development, enterprise web applications, and integrated digital marketing strategies to help your business enhance its operations and reach."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does Yesp Tech customize B2B solutions for different industries?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yesp Tech customizes B2B solutions by closely working with clients to understand their specific industry needs and challenges. We then design and implement solutions that address these unique requirements, ensuring that our clients receive the most effective and relevant services."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What benefits can businesses expect from Yesp Tech's B2B solutions?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Businesses can expect numerous benefits from Yesp Tech's B2B solutions, including increased operational efficiency, enhanced digital presence, improved customer engagement, and better decision-making through data-driven insights. Our solutions are designed to deliver measurable results and drive business growth."
                  }
                }
              ]
            }
          `}
        </script>
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
              "image": "https://media.licdn.com/dms/image/v2/D5603AQFwXobstdNa4g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1720847388657?e=1730937600&v=beta&t=Bf7TZ_BXptucbY2t-Nd_8qhLRDYlwygDZj1MSUGcUu0", // Replace with the URL of the founder's photo
              "url": "URL_TO_YOUR_FOUNDERS_PAGE", // Replace with the URL of the founder's page
              "sameAs": [
                "https://www.linkedin.com/in/srinithin-somasundaram", // Replace with actual social media URLs
                "https://x.com/ssrinithin",
                "https://www.instagram.com/srinithinsomasundaram/",

              ]
            }
          `}
        </script>
      </Helmet>
      <br />
      <br />
      <br />
      <br />
      <h1>Frequently Asked Questions</h1>

      <h2>About Yesp Tech</h2>
      <div
        className={`faq-item ${activeIndex === 0 ? 'active' : ''}`}
        onClick={() => toggleFAQ(0)}
      >
        <h3>What services does Yesp Tech offer?</h3>
        <p>
          Yesp Tech offers a wide range of services including web development, digital marketing, SEO management, 
          custom software development, and mobile application development. We are dedicated to providing tailored 
          solutions to meet the unique needs of each client.
        </p>
      </div>

      <div
        className={`faq-item ${activeIndex === 1 ? 'active' : ''}`}
        onClick={() => toggleFAQ(1)}
      >
        <h3>Why should I choose Yesp Tech?</h3>
        <p>
          Yesp Tech is known for its commitment to excellence, innovation, and customer satisfaction. Our team of 
          experts works closely with clients to deliver results that exceed expectations. We have a proven track 
          record of success across various industries.
        </p>
      </div>

      <h2>SEO Management at Yesp Tech</h2>
      <div
        className={`faq-item ${activeIndex === 2 ? 'active' : ''}`}
        onClick={() => toggleFAQ(2)}
      >
        <h3>What is SEO and why is it important?</h3>
        <p>
          SEO (Search Engine Optimization) is a crucial aspect of digital marketing that focuses on improving your 
          website's visibility on search engines. Higher visibility leads to more traffic, better brand recognition, 
          and increased business opportunities. Yesp Tech specializes in comprehensive SEO management to help your 
          business achieve these goals.
        </p>
      </div>

      <div
        className={`faq-item ${activeIndex === 3 ? 'active' : ''}`}
        onClick={() => toggleFAQ(3)}
      >
        <h3>How does Yesp Tech approach SEO management?</h3>
        <p>
          Yesp Tech takes a holistic approach to SEO management, encompassing on-page optimization, content creation, 
          keyword research, technical SEO, and link building. Our strategies are designed to improve your search engine 
          rankings and drive organic traffic to your site.
        </p>
      </div>

      <div
        className={`faq-item ${activeIndex === 4 ? 'active' : ''}`}
        onClick={() => toggleFAQ(4)}
      >
        <h3>How long does it take to see results from Yesp Tech's SEO services?</h3>
        <p>
          SEO is a long-term investment. While some improvements may be seen within a few months, significant results 
          typically take six months to a year, depending on the competitiveness of your industry and the effectiveness 
          of the implemented strategies.
        </p>
      </div>

      <div
        className={`faq-item ${activeIndex === 5 ? 'active' : ''}`}
        onClick={() => toggleFAQ(5)}
      >
        <h3>Can Yesp Tech help with local SEO?</h3>
        <p>
          Yes, Yesp Tech offers local SEO services tailored to improve your visibility in local search results. This is 
          particularly beneficial for businesses that rely on local customers. Our local SEO strategies include 
          optimizing your Google My Business profile, managing local citations, and creating location-specific content.
        </p>
      </div>

      <h2>B2B Solutions</h2>
      <div
        className={`faq-item ${activeIndex === 6 ? 'active' : ''}`}
        onClick={() => toggleFAQ(6)}
      >
        <h3>What are B2B solutions and how can Yesp Tech assist?</h3>
        <p>
          B2B (Business-to-Business) solutions are products or services designed to help businesses operate more effectively 
          and efficiently. Yesp Tech provides tailored B2B solutions that include custom software development, enterprise 
          web applications, and integrated digital marketing strategies to help your business enhance its operations and reach.
        </p>
      </div>

      <div
        className={`faq-item ${activeIndex === 7 ? 'active' : ''}`}
        onClick={() => toggleFAQ(7)}
      >
        <h3>How does Yesp Tech customize B2B solutions for different industries?</h3>
        <p>
          Yesp Tech customizes B2B solutions by closely working with clients to understand their specific industry needs 
          and challenges. We then design and implement solutions that address these unique requirements, ensuring that 
          our clients receive the most effective and relevant services.
        </p>
      </div>

      <div
        className={`faq-item ${activeIndex === 8 ? 'active' : ''}`}
        onClick={() => toggleFAQ(8)}
      >
        <h3>What benefits can businesses expect from Yesp Tech's B2B solutions?</h3>
        <p>
          Businesses can expect numerous benefits from Yesp Tech's B2B solutions, including increased operational efficiency, 
          enhanced digital presence, improved customer engagement, and better decision-making through data-driven insights. 
          Our solutions are designed to deliver measurable results and drive business growth.
        </p>
      </div>
    </div>
  );
};

export default FAQ;


import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { db, collection, addDoc } from '../firebase'; // Import Firestore methods
import './ContactUs.css'; // Ensure you have the necessary CSS file

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    phone: '',
    message: '',
    receiveEmails: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Save form data to Firestore
      await addDoc(collection(db, 'contacts'), {
        name: formData.name,
        email: formData.email,
        interest: formData.interest,
        phone: formData.phone,
        message: formData.message,
        receiveEmails: formData.receiveEmails,
        timestamp: new Date()
      });

      // Clear form fields
      setFormData({
        name: '',
        email: '',
        interest: '',
        phone: '',
        message: '',
        receiveEmails: false
      });

      alert('Thank you for reaching out! We will get back to you soon.');
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error('Error adding document: ', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-us">
      <Helmet>
        <title>Contact Us - Yesp Tech</title>
        <meta
          name="description"
          content="Get in touch with Yesp Tech. Fill out the form to inquire about our web solutions, ad services, B2B solutions, or startup launch pad."
        />
        <meta
          name="keywords"
          content="Yesp Tech,Yesp, Contact Us, web development, digital marketing, B2B solutions, startup launch pad, inquiry form"
        />
        <meta
          property="og:title"
          content="Contact Us - Yesp Tech"
        />
        <meta
          property="og:description"
          content="Get in touch with Yesp Tech. Fill out the form to inquire about our web solutions, ad services, B2B solutions, or startup launch pad."
        />
        <meta
          property="og:url"
          content="https://www.yesptech.com/contact" // Replace with your page URL
        />
     
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:title"
          content="Contact Us - Yesp Tech"
        />
        <meta
          name="twitter:description"
          content="Get in touch with Yesp Tech. Fill out the form to inquire about our web solutions, ad services, B2B solutions, or startup launch pad."
        />
     
      </Helmet>
      <h2>Love to hear from you, <br /> Get in touch <span role="img" aria-label="wave">👋</span></h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="interest">What you are interested</label>
          <select
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select an option</option>
            <option value="Web Solution">Web Solution</option>
            <option value="Ads Solution">Ads</option>
            <option value="B2B Solution">B2B Solution</option>
            <option value="Startup Launch Pad">Startup Launch Pad</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Your Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Let us know your project about"
            required
          />
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="receiveEmails"
              checked={formData.receiveEmails}
              onChange={handleChange}
            />
            I would like to receive emails
          </label>
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Just Sending...' : 'Just Send'} <span role="img" aria-label="arrow">↗️</span>
        </button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default ContactUs;

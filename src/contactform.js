import React, { useState } from 'react';
import { db, collection, addDoc } from './firebase';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [receiveEmails, setReceiveEmails] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save form data to Firestore
      await addDoc(collection(db, 'contacts'), {
        name,
        email,
        message,
        phone,
        receiveEmails,
        timestamp: new Date()
      });
      // Clear form fields
      setName('');
      setEmail('');
      setMessage('');
      setPhone('');
      setReceiveEmails(false);
      alert('Thank you for reaching out! We will get back to you soon.');
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your Email"
        required
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Your Message"
        required
      ></textarea>
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Your Phone Number"
      />
      <div className="checkbox">
        <input
          type="checkbox"
          checked={receiveEmails}
          onChange={(e) => setReceiveEmails(e.target.checked)}
        />
        <label>Receive updates via email</label>
      </div>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default ContactForm;

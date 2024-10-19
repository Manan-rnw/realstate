import React from 'react';
import Footer from './Footer';
import './Contact.css';

export default function Contact() {
  return (
    <>

    <div className='contact-main'>
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to reach out to us!</p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Write your message" required></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
      <Footer />
    </>
  );
}

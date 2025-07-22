import React from 'react';

import './StylingFiles/Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h1>Contact Me</h1>

      <div className="contact-details">
        <p><strong>Email:</strong> <a href="mailto:hiteshbodhwani21@gmail.com">hiteshbodhwani21@gmail.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:+919690057105">+91 7849802842</a></p>
      </div>

      {/* <div className="form-message">
        <p>You can also use the form below to send a message (for display only, not functional):</p>
      </div>

      <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('This form is display-only. Please use email or phone to reach me.'); }}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit" className="submit-btn">Send Message</button>
      </form> */}
    </section>
  );
};

export default Contact;

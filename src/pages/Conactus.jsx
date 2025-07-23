import React from 'react';
import './Contactus.css';

function ContactSection() {
  return (
    <>
      <div className="main-blog">
        <div className="holder-block">
          <div className="text-blog">
            <h2>Contact</h2>
          </div>
          <div className="href-holder">
            <a href="/">Home</a>
            <i className="bi bi-arrow-right-short"></i>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </div>

      <section className="contact-section">
        <div className="container">
          <form className="contact-form">
          <h3>Feel Free to Contact with Us</h3>
            <div className="row">
              <input type="text" placeholder="Name" className="input-first" />
              <input type="email" placeholder="Email" className="input-first" />
            </div>
            <div className="row">
              <input type="text" placeholder="Phone" className="input-first" />
              <input type="text" placeholder="Subject" className="input-first" />
            </div>
            <textarea placeholder="Message" className="textarea-field"></textarea>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default ContactSection;


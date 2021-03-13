import React from 'react';

import './contactStyle.css';
import ContactItem from './ContactItem';

export default function ContactPage() {
  return (
    <section
      className="contact position-relative 
      min-vh-100  d-flex justify-content-center 
      align-items-center flex-column bg-dark"
      id="contact"
      style={{ padding: '50px 100px' }}
    >
      <div className="content text-center" style={{ maxWidth: '800px' }}>
        <h2
          className="text-light font-weight-normal"
          style={{ fontSize: '36px' }}
        >
          Contact us
        </h2>
        <p className="text-light font-weight-light">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta nemo
          nostrum veniam ad maxime voluptatem modi obcaecati blanditiis
        </p>
      </div>

      <div className="container w-100 p-3 d-flex justify-content-center align-items-center">
        <div className="contactInfo w-50 p-3 d-flex flex-column">
          <ContactItem
            title="Address"
            logoName="fa fa-map-marker"
            content="1265 Military Trail, <br /> Scarborough, Ontario, <br /> M1C 1A4"
          />

          <ContactItem
            title="Phone"
            logoName="fa fa-phone"
            content="507-475-6094"
          />

          <ContactItem
            title="Email"
            logoName="fas fa-paper-plane"
            content="thedatasciencecube@gmail.com"
          />
        </div>

        <div className="contactForm">
          <form
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            name="contact"
          >
            <h2>Send Message</h2>
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            <div className="inputBox">
              <input type="text" name="name" required="required"></input>
              <span>Full name</span>
            </div>
            <div className="inputBox">
              <input type="text" name="email" required="required"></input>
              <span>Email</span>
            </div>
            <div className="inputBox">
              <textarea name="message" required="required"></textarea>
              <span>Type Message . . .</span>
            </div>
            <div className="inputBox">
              <input type="submit" name="" value="Send"></input>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

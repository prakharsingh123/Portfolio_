import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./Contacts.css";

const Contacts = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_gr2o7zj', 'template_28dasw5', form.current, {
      publicKey: 'FR4FrH_mX8mjGfdJZ',
    }).then(() => {
      setSubmitted(true);
    });
    e.target.reset();
  };

  return (
    <section className='section_contact' id='contact'>
<div className="contact__container" style={{ marginTop: '4rem' }}>
        <div className="contact__info">
          <h2 className="contact__title"><span className='highlight'>Get Ready</span> To Create Great</h2>
          <div className="contact__details">
            <div className="contact__detail">
              <span className="contact__label">E-mail:</span>
              <span className="contact__text">prakharsingh.lko1234@gmail.com</span>
            </div>
            <div className="contact__detail">
              <span className="contact__label">Location:</span>
              <span className="contact__text">Lucknow, Uttar Pradesh</span>
            </div>
            <div className="contact__detail">
              <span className="contact__label">Contact:</span>
              <span className="contact__text">+91 8303180977</span>
            </div>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form-box">
          <h3 className="form__title">Get In Touch</h3>

          <div className="form__grid">
            <input type="text" name="name" placeholder="Your Name" className="form__input" required />
            <input type="text" name="phone" placeholder="Phone Number" className="form__input" />
            <input type="email" name="email" placeholder="Your Email" className="form__input" required />
            <input type="text" name="subject" placeholder="Subject" className="form__input" />
          </div>

          <textarea name="message" rows="5" placeholder="Your Message" className="form__textarea" required></textarea>

          <button type='submit' className="contact__submit-btn">
            Appointment Now →
          </button>

          {submitted && (
            <p className="thank__message">Thank you for contacting me! I'll get back to you soon.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contacts;

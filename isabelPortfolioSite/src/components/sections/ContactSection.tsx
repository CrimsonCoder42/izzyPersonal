// src/components/sections/ContactSection.tsx
import React, { useState, useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from '@emailjs/browser';

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaVerified(!!token);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaVerified) {
      setSubmitError('Please verify you are not a robot.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formRef.current!,
      'YOUR_PUBLIC_KEY'
    )
      .then(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        formRef.current?.reset();
        setCaptchaVerified(false);
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
      })
      .catch((error) => {
        setIsSubmitting(false);
        setSubmitError('Failed to send message. Please try again later.');
        console.error('Email sending error:', error);
      });
  };

  return (
    <div className="container-fluid py-5" id="contact">
      <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1
            className="display-1 text-uppercase text-white text-stroke-header"
            style={{ WebkitTextStroke: '1px #dee2e6' }}
          >
            Contact
          </h1>
          <h1 className="position-absolute text-uppercase text-primary">
            Contact Me
          </h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="contact-form text-center">
              {submitSuccess ? (
                <div className="alert alert-success">
                  Your message has been sent successfully!
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} id="contactForm" noValidate>
                  <div className="form-row mb-3">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="text"
                        className="form-control p-4"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="email"
                        className="form-control p-4"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control p-4"
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control py-3 px-4"
                      rows={5}
                      id="message"
                      name="message"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>

                  <div className="mb-4 d-flex justify-content-center">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey="YOUR_RECAPTCHA_SITE_KEY"
                      onChange={handleCaptchaChange}
                    />
                  </div>

                  {submitError && (
                    <div className="alert alert-danger mb-3">
                      {submitError}
                    </div>
                  )}

                  <div>
                    <button
                      className="btn btn-outline-primary px-5 py-2"
                      type="submit"
                      id="sendMessageButton"
                      disabled={isSubmitting}
                      style={{
                        borderRadius: '30px',
                        minWidth: '180px'
                      }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
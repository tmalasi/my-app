import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields
    let isValid = true;
    if (!name) {
      setNameError(true);
      isValid = false;
    }
    if (!email || !email.includes("@")) {
      setEmailError(true);
      isValid = false;
    }
    if (!subject) {
      setSubjectError(true);
      isValid = false;
    }
    if (!message) {
      setMessageError(true);
      isValid = false;
    }
    if(!isValid){
      return;
    }

    if (isValid) {
       alert("Form submitted successfully!");
       return;
    }

   

    // Reset fields
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <section className="contact" id="contact">
      <h1 className="section-title text-center">Contact Me</h1>
      <div className="container" id="containerForms">
        <form id="contactForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              placeholder="Enter your full name"
              onChange={(e) => {
                setName(e.target.value);
                setNameError(false);
              }}
            />
            {nameError && (
              <span className="error-message">
                Please enter your name properly.
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail Address:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError(false);
              }}
            />
            {emailError && (
              <span className="error-message">
                Please enter a valid email address.
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              className="form-control"
              id="subject"
              value={subject}
              placeholder="Subject"
              onChange={(e) => {
                setSubject(e.target.value);
                setSubjectError(false);
              }}
            />
            {subjectError && (
              <span className="error-message">
                Please enter a subject.
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              id="message"
              rows="4"
              value={message}
              placeholder="Enter your message"
              onChange={(e) => {
                setMessage(e.target.value);
                setMessageError(false);
              }}
            ></textarea>
            {messageError && (
              <span className="error-message">
                Please enter your message.
              </span>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-primary contactFormBtn"
            style={{ borderColor: "var(--primary-color)" }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

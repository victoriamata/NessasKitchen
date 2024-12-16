import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formStatus, setFormStatus] = useState(""); // Status message

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!name || !email || !message) {
      setFormStatus("Please complete the form.");
      return;
    }

    emailjs
      .send(
        "service_5r5jpqr", // EmailJS service ID
        "template_8k9y1ux", // EmailJS template ID
        { name, email, message },
        "WR7JcmEyY52HfNbMh" // EmailJS user ID/ api public key
      )
      .then(
        () => {
          setFormStatus("Email sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
        },
        () => {
          setFormStatus("Failed to send email. Please try again later.");
        }
      );
  };

  return (
    <section className="contact-form">
      <h2>Book Now!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* Display form status message */}
      {formStatus && <p>{formStatus}</p>}
    </section>
  );
};

export default Contact;

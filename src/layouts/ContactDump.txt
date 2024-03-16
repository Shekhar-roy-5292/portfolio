import React, { useState } from "react";

function Contact() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    const { name, email, mobile, subject, message } = inputs;
    console.log("Submitted values:", name, email, mobile, subject, message);

    // Add further logic such as API calls or form validation here
  };

  const handleInputChanges = (e) => {
    const { name, value } = e.target;
    setInputs((previousInputs) => ({
      ...previousInputs,
      [name]: value,
    }));
  };

  return (
    <div>
      <section className="contact" id="contact">
        <h2 className="heading">
          Contact <span>Me!</span>
        </h2>

        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="text"
              name="name"
              value={inputs.name}
              id="full-name"
              onChange={handleInputChanges}
              placeholder="Full Name"
            />
            <input
              type="email"
              id="email"
              name="email"
              value={inputs.email}
              onChange={handleInputChanges}
              placeholder="Email Address"
            />
          </div>

          <div className="input-box">
            <input
              type="number"
              name="mobile"
              value={inputs.mobile}
              id="mobile-number"
              onChange={handleInputChanges}
              placeholder="Mobile Number"
            />
            <input
              type="text"
              name="subject"
              value={inputs.subject}
              id="email-subject"
              onChange={handleInputChanges}
              placeholder="Email Subject"
            />
          </div>

          <textarea
            id="message"
            name="message"
            value={inputs.message}
            cols="10"
            rows="10"
            onChange={handleInputChanges}
            placeholder="Your Message"
          ></textarea>

          <input type="submit" value="Send Message" className="btn" />
        </form>
      </section>
    </div>
  );
}

export default Contact;

import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";

const Contact = () => {
  // --------- States

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sucess, setSucess] = useState("");
  const [loading, setLoading] = useState("Send Message");
  const [error, setError] = useState("");

  // -------------  - Submitting Form Data

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading("Loading");
    let myForm = new FormData();
    myForm.append("name", name);
    myForm.append("email", email);
    myForm.append("message", message);

    axios
      .post("https://formspree.io/f/xayanlpy", myForm, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })

      .then((response) => {
        setLoading("Send Message");
        setSucess("Your message has been sent!");
        setName("");
        setMessage("");
        setEmail("");
      })

      .catch((error) => {
        setError("There was a problem sending your message!");
      });
  };

  return (
    <div>
      <div className="contact-case" id="contact">
        <div className="contact-title">
          <h1>Contact Me - </h1>
        </div>

        <div
          className="contact-width"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-flex">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Type your message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id=""
                required
              />
              <span>
                {sucess} {error}
              </span>
              <div className="contact-btn">
                <button type="submit">{loading}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact_content-title">
        <h2>Contact</h2>
        <span>
          Feel free to contact us by submitting the form below and we will get
          back to you as soon as possible
        </span>
      </div>
      <div>
        <form className="contact_form-container">
          <div class="contact__form-field">
            <label class="contact__form-label" for="name">
              Name
            </label>
            <input
              required=""
              placeholder="Enter Your Name"
              type="text"
              class="contact__form-input"
              name="name"
              id="name"
            />
          </div>
          <div class="contact__form-field">
            <label class="contact__form-label" for="email">
              Email
            </label>
            <input
              required=""
              placeholder="Enter Your Email"
              type="email"
              class="contact__form-input"
              name="email"
              id="email"
            />
          </div>
          <div class="contact__form-field">
            <label class="contact__form-label" for="message">
              Message
            </label>
            <textarea
              required=""
              cols="30"
              rows="10"
              class="contact__form-input"
              placeholder="Enter Your Message"
              name="message"
              id="message"
            ></textarea>
            <button type="submit" class="btn btn--theme contact__btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

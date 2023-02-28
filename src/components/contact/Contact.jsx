import React from "react";
import "./Contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
// import { useRef } from "react";
// import emailjs from '@emailjs/browser';
// import emailjs from "emailjs-com";

const Contact = () => {
  // const from = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "YOUR_SERVICE_ID",
  //       "YOUR_TEMPLATE_ID",
  //       form.current,
  //       "YOUR_PUBLIC_KEY"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <HiOutlineMail className="contact_option-icon"></HiOutlineMail>
            <h4>Email</h4>
            <h5>milankumarbth1999@gmail.com</h5>
            <a
              href="mailto:milankumarbth1999@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon"></BsWhatsapp>
            <h4>WhatsApp</h4>
            <h5>+917296063206</h5>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone+917296063206"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
        </div>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

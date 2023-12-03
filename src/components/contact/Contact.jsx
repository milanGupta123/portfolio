import emailjs from "emailjs-com";
import React, { useRef } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import "./Contact.css";

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm ("service_h38slha","template_8r7qjyjtemplate_8r7qjyjtemplate_8r7qjyj",form.current, '0qUE-SwVvumUDpap7')
    e.target.reset()
  }


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
              href="https://wa.me/+917296063206"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
        </div>
         {/* END OF CONTACT OPTIONS */}
         <form ref={form} onSubmit={sendEmail} className='form'>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
        {/* <form>
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
        </form> */}
      </div>
    </section>
  );
};

export default Contact;

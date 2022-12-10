import React, { useRef } from "react";
import "./contacts.css";
import { MdOutlineMail } from "react-icons/md";
import { SiFacebook } from "react-icons/si";
import { ImWhatsapp } from "react-icons/im";
import emailjs from "@emailjs/browser";

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4ebinhr",
        "template_uoc0dqi",
        form.current,
        "KgpVmuN25ma8qn2in"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>sujitsamal.official@gmail.com</h5>
            <a href="mailto:sujitsamal.official@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <SiFacebook className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Sujit Samal</h5>
            <a href="https://m.me/sujit.samal.904" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <ImWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+91 7978680106</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+917978680106"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
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
          ></textarea>
          <button className="btn btn-primary" type="submit">
            Send the Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;

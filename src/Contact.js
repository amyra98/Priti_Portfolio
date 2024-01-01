import React from 'react';
import './Contact.css';
import contactImg from "./img/about-9.jpeg"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bqjtwb1', 'template_o0i0abw', form.current, 'f76kmVOnUPANz0FBv')
      .then((result) => {
          console.log(result.text);
          alert("Your message was delivered successfully!")
          Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
          );
          Array.from(document.querySelectorAll("textarea")).forEach(
            textarea => (textarea.value = "")
          );
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="contactt__text">Contact Me.</h1>
                            <br></br>
                            <p className="contactt__text white">I am open for freelance work or software development of any kind.</p>
                            <p className="contactt__text white">Contact me if you wish to collaborate on a fantastic project.</p>
                            <br></br>
                            <br></br>
                        </div>
                        <div className="input__box">
                        <form ref={form} onSubmit={sendEmail}>
                            <input type="text" name="to_name" className="contact name" placeholder="Your name *" />
                            <input type="email" name="reply_to" className="contact email" placeholder="Your Email *"  />
                            <input type="text" name="from_name" className="contact subject" placeholder="Write a Subject" />
  
                            <textarea name="message" id="message" placeholder="Write Your message"></textarea>
                            <button className="btn contact pointer" type="submit" value="Send">Submit</button>
                        </form>
                        </div>
                    </div>
                </div>
                <div className="col__2">
                    <img src={contactImg} alt="" className="contact__img" />
                </div>
            </div>
        </div>
    )
}

export default Contact

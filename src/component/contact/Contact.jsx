
import "./contact.css";
import {AiOutlineMail} from "react-icons/ai";
import {BsInstagram} from "react-icons/bs";
import {BsWhatsapp} from "react-icons/bs";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
 
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ilgb2uj', 'template_ldorth9', form.current, 'lyy1U-EGccqqG3s-o')
        .then(() => {
            e.target.name.value="";
            e.target.email.value="";
            e.target.message.value="";
        })
    };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className="contact__options">
           <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>abhaypratapsingh99587@gmail.com</h5>
              <a target='_blank' rel="noreferrer" href='mailto:abhaypratapsingh99587@gmail.com'>Send a message</a>
           </article>
           <article className="contact__option">
            <BsInstagram className='contact__option-icon'/>
              <h4>Instagram</h4>
              <h5>Abhay Pratap singh</h5>
              <a target='_blank' rel="noreferrer" href='https://www.instagram.com/abhay_pratap_singh098/'>Send a message</a>
           </article>
           <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
              <h4>Whatsapp</h4>
              <h5>9958724676</h5>
              <a href='https://wa.me/9958724676' rel="noreferrer" target='_blank'>Send a message</a>
           </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" required  name="name" placeholder='Your Full Name'/>
            <input type="email" required  name="email" placeholder='Your Email'/>
            <textarea name='message' rows="7" placeholder='Your Message' required ></textarea>  
            <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact
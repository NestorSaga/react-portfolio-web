import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import React, { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v0iwicb', 'template_yhwnawa', form.current, 'Jr7LMXDmdYZ2Y8858')
    

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2> 
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>nestor@tinet.org</h5>
            <a href="mailto:nestor@tinet.org" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+34 662451156</h5>
            <a href="https://api.whatsapp.com/send?=+34662451156" target="_blank">Send a message</a>
          </article>
        </div>
      

      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required/>
        <input type="email" name="email" placeholder='Your Email' required/>
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
      </div>
      </section>
  )
}

export default Contact
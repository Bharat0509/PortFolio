import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>bhartbhammar3336@gmail.com</h5>
            <a href="mailto:dummyemail@gmail.com">Send a Email</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Bharat</h5>
            <a href="https://m.me/bharat0509">Send a Message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <a href="https://api.whatsapp.com/send?phone=+918141467725">Send a Message</a>
          </article>
        </div>

        <form action="">
          <input type="text" name="name" id="" placeholder='Enter Your Full Name' required />

          <input type="email" name="email" id="" placeholder='Enter Your Email' required />

          <textarea name="message" id="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
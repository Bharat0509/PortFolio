import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import Swal from 'sweetalert2'
import emailjs from 'emailjs-com'
const Contact = () => {
  const SERVICE_ID = 'service_t56w0hh'
  const TEMPLATE_ID = "template_8lr3cv4"
  const USER_ID = "UOzGD4oSzPwaBGya0"


  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully.Thank You For Your Valuable Feedback.'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>bhartbhammar3336@gmail.com</h5>
            <a href="mailto:bhartbhammar@gmail.com">Send a Email</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Bharat</h5>
            <a href="https://m.me/bharat0509">Send a Message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <a href="https://api.whatsapp.com/send?phone=+918141467725">Send a Message</a>
          </article>
        </div>

        <form action="" onSubmit={handleOnSubmit}>
          <input type="text" name="from_name" id="from_name" placeholder='Enter Your Full Name' required />

          <input type="email" name="from_email" id="from_email" placeholder='Enter Your Email' required />

          <textarea name="message" id="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
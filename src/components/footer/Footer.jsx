import './footer.css'
import {FaFacebook,FaTelegram,FaGithub,FaInstagram} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='container footer__container'>
      <div className="footer__more">
      <h3>Bharat Bhammar</h3>
      <a href="#">Download My CV</a>
      <a href="#contact">Hire me</a>
      <a href="#services">View My Projects</a>

      </div>
      <div className="footer__socials">
          <div className="footer__social"><FaFacebook/></div>
          <div className="footer__social"><FaTelegram/></div>
          <div className="footer__social"><FaGithub/></div>
          <div className="footer__social"><FaInstagram/></div>
      </div>
      
    </div>
   
  )
}

export default Footer
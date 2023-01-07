import './nav.css'
import { AiOutlineHome, AiOutlineUser, AiOutlineBook, AiOutlineCustomerService, AiOutlineMessage } from 'react-icons/ai'
import { useState } from 'react'
import {Link} from 'react-scroll'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
       <Link to="hero" spy={true} smooth={true} offset={-100} duration={500} onClick={() => setActiveNav('#')}>
       <AiOutlineHome />
        </Link>

        <Link to="about" spy={true} smooth={true} offset={-100} duration={500} onClick={() => setActiveNav('#about')}>
        <AiOutlineUser />
        </Link>

        <Link to="experience" spy={true} smooth={true} offset={-100} duration={500} onClick={() => setActiveNav('#experience')}>
        <AiOutlineBook />
        </Link>


        <Link to="services" spy={true} smooth={true} offset={-100} duration={500} onClick={() => setActiveNav('#services')}>
        <AiOutlineCustomerService />
        </Link>


        <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} onClick={() => setActiveNav('#contact')}>
        <AiOutlineMessage />
        </Link>
      {/* <a href="#" className={activeNav === '#' ? 'active' : ''} onClick={() => setActiveNav('#')}><AiOutlineHome /></a> */}
      {/* <a href="#about" className={activeNav === '#about' ? 'active' : ''} onClick={() => setActiveNav('#about')}><AiOutlineUser /></a> */}
      {/* <a href="#experience" className={activeNav === '#experience' ? 'active' : ''} onClick={() => setActiveNav('#experience')}><AiOutlineBook /></a>
      <a href="#services" className={activeNav === '#services' ? 'active' : ''} onClick={() => setActiveNav('#services')}><AiOutlineCustomerService /></a> */}
      {/* <a href="#contact" className={activeNav === '#contact' ? 'active' : ''} onClick={() => setActiveNav('#contact')}><AiOutlineMessage /></a> */}
    </nav>
  )
}

export default Nav
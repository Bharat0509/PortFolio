import CTA from './CTA'
import './header.css'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/me1.png'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'


const Header = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Competitive Programmer", "Full Stack Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 70,
      backDelay: 70,
      loop: true
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <header id='hero'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Bharat</h1>
        <h5 className='text-light auto-write' ref={el}></h5>

        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src='https://cdn3d.iconscout.com/3d/premium/thumb/boy-say-hello-gesture-5685459-4734997.png' alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>

    </header>
  )
}

export default Header
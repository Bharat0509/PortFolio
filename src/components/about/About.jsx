import './about.css'
import ME from '../../assets/aboutMe.jpg'
import { FaAward, FaConnectdevelop, FaFolder, FaUser } from 'react-icons/fa'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Year Working </small>
            </article>

            <article className='about__card'>
              <FaUser className='about__icon' />
              <h5>Clients</h5>
              <small>110+ Worldwide</small>
            </article>

            <article className='about__card'>
              <FaFolder className='about__icon' />
              <h5>Projects</h5>
              <small>5+ Completed </small>
            </article>

          </div>
          <p>I am pursuing  Bachelor's in Computer Science at <bold>SVNIT</bold> and I can assure you that my skills will not let you down. I have learnt almost all the Framewor such as the sroptlanguages such as <i>HTML, CSS, JS, ReactJs,SQL,NodeJs,MongoDB,PHP, ASP, JSP</i> etc. and gathered some excellent skills on Web Developing.
            <br />

            I believe that what will take me far from my competitors is my experience. I have been working as a web developer for the last one years and have proved myself many times. You can search work histories and their ratings to be sure. 
            <br />
            I am available 24/7 both online and offline. Your every call/message is important to me. I will be available at least 50 hours per week and ready to assist you on your project at your call.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
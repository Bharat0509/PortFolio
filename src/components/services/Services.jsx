import './services.css'
import { BiCheck } from 'react-icons/bi'
import PortfolioProjects from '../portfolioProjects/PortfolioProjects'


const Services = () => {
  return (
    <section id="services"f>
    <section >
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Designer</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Professional Web Designer</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Figma Designer on Demand</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Psd Designer on Demand</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Convert HTML/CSS To Psd/Figma Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Web Designs with Global Standards</p>
            </li>
        
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>FullStack Web-Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Professinal Web Application Developer</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>TechStack: HTML/CSS/Javascript /Saas/Php/SQL</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Frameworks: ReactJs/NodeJs/ThreeJS/.NET</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Databases: MongoDB/MySQL</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>MERN stack Developer </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>High Quality Code and Foldering Style </p>
            </li>
            
          </ul>

          
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Backend Developer</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Proffesional Wev API Developer</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>NodeJs/Express/Python/SQL Developer</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Developed More Than 20 Web API </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Experienced In Backend Sever And API Management</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Available For API Testing.</p>
            </li>
           
          </ul>

          
        </article>
      </div>
    </section>
     <PortfolioProjects/>
     </section>
    
  )
}

export default Services
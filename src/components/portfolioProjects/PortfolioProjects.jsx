import './portfolioProjects.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'


const Portfolio = () => {
  return (
    <section id="services portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      <article className='portfolio__item' >
          <div className="portfolio__item-image">
            <img src={IMG1} alt="project-banner" />
          </div>
          <h3>Youtube Clone</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/bharat0509" className='btn'>Github</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank '>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item' >
          <div className="portfolio__item-image">
            <img src={IMG2} alt="project-banner" />
          </div>
          <h3>MoviesWatch- A Movies Details App</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/bharat0509" className='btn'>Github</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank '>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item' >
          <div className="portfolio__item-image">
            <img src={IMG3} alt="project-banner" />
          </div>
          <h3>BharatSocials- A Social Media App</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/bharat0509" className='btn'>Github</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank '>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item' >
          <div className="portfolio__item-image">
            <img src={IMG4} alt="project-banner" />
          </div>
          <h3>Todo List-A Personal Todo App</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/bharat0509" className='btn'>Github</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank '>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
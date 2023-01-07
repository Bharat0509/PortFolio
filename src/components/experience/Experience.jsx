import './experience.css'
import { BsPatchCheckFill, } from 'react-icons/bs'
import { FrontendExpData, BackendExpData } from './Experiences'
const Experience = () => {
  return (

    <section id="experience">

      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {FrontendExpData.map((data) => <article className='experience__details'>
              <div className='experience__details-icon'><BsPatchCheckFill /></div>
              <div>

                <h4>{data.Name}</h4>
                <small className='tect'>{data.Level}</small></div>
            </article>)}
          </div>
        </div>

        <div className='experience_backend'>
          <h3>Backend Development</h3>
          <div className="experience__content">
            {BackendExpData.map((data) => <article className='experience__details'>
              <div className='experience__details-icon'><BsPatchCheckFill /></div>
              <div>
                <h4>{data.Name}</h4>
                <small className='text-light'>{data.Level}</small></div>
            </article>)}
          </div>
        </div>

      </div>


    </section>
  )
}

export default Experience
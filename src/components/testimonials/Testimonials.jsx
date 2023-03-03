import './testimonials.css'
import { TestimonialsData } from './testimonial'
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (

    <section className='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {/* {TestimonialsData ? (TestimonialsData.map((data) =>
          <SwiperSlide><article className='testimonial'>
            <div className="client_avatar">
              <img src={data.Avatar} alt="avatar" />
            </div>
            <h5 className='client__name'>{data.Name}</h5>
            <small className='client__review'>
              {data.Review}
            </small>
          </article></SwiperSlide>)
        ) : */}
        {/*  ( */}
        <span className='client__review'>No Reviews Yet..</span>
        {/* ) */}
        {/* } */}
      </Swiper>
    </section>

  )
}

export default Testimonials
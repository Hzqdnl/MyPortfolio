import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow,Pagination,Navigation,A11y,Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Bgtech from "../assets/bg-tech.jpg";
// import Bgproject from "../assets/bg-project.jpg";
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';

const Projects = () => {
  return (
    <section id='projects' className='w-full h-screen bg-cover bg-center bg-no-repeat relative' style={{backgroundImage: `url(${Bgtech})`}}>
       <div className="absolute top-0 left-0 w-full h-full inset-0 bg-[#333B50]/70 z-10">
       <div className='my-[30px]'> {/* container removed */}
        <div className='flex justify-center items-center pb-4 overflow-hidden'>
          <motion.p 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='uppercase text-[28px] font-[Playfair] text-white text-center tracking-widest'>
            Projects Involved
          </motion.p>
        </div>
        <div>
        <Swiper
        modules={[Navigation, Pagination, EffectCoverflow, A11y, Autoplay]}
        effect={'coverflow'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={50}
        slidesPerView={'auto'}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3000, // Auto slide every 5 seconds
          disableOnInteraction: false, // Keep autoplay even when user interacts with swiper
        }}
        speed={900}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
        <SwiperSlide className='w-full max-w-5xl mx-auto px-4'><img className='rounded-2xl' src={project1} alt="" /></SwiperSlide>
        <SwiperSlide className='w-full max-w-5xl mx-auto px-4'><img className='rounded-2xl' src={project2} alt="" /></SwiperSlide>
        <SwiperSlide className='w-full max-w-5xl mx-auto px-4'><img className='rounded-2xl' src={project3} alt="" /></SwiperSlide>
        <SwiperSlide className='w-full max-w-5xl mx-auto px-4'><img className='rounded-2xl' src={project4} alt="" /></SwiperSlide>
        <div className="swiper-button-next text-white lg:pr-24 xl:pr-48"></div>
        <div className="swiper-button-prev text-white lg:pl-24 xl:pl-48"></div>
        </Swiper>
        </div>
       </div>
       </div>
    </section>
  )
}

export default Projects
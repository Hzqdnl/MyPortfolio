import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, A11y, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { FaHandPointRight } from "react-icons/fa";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Bgtech from "../assets/bg-tech.jpg";
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';

const Projects = () => {
  return (
    <section id='projects' className='w-full h-[200vh] bg-cover bg-center bg-no-repeat relative' style={{ backgroundImage: `url(${Bgtech})` }}>
      <div className="absolute top-0 left-0 w-full h-full inset-0 bg-[#333B50]/70 z-10">
        <div className='my-[30px]'>
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
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={900}
          >
            <SwiperSlide className='w-full max-w-5xl mx-auto px-4'><img className='rounded-2xl' src={project1} alt="" /></SwiperSlide>
            <SwiperSlide className='w-full max-w-5xl mx-auto px-4'><img className='rounded-2xl' src={project2} alt="" /></SwiperSlide>
            <SwiperSlide className='w-full max-w-5xl mx-auto px-4'><img className='rounded-2xl' src={project3} alt="" /></SwiperSlide>
            <SwiperSlide className='w-full max-w-5xl mx-auto px-4'><img className='rounded-2xl' src={project4} alt="" /></SwiperSlide>
            <div className="swiper-button-next text-white lg:pr-24 xl:pr-48"></div>
            <div className="swiper-button-prev text-white lg:pl-24 xl:pl-48"></div>
          </Swiper>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='bg-[#333B50] shadow-2xl shadow-[#333B50]  rounded-2xl mx-52 my-12 py-6 px-16'
          >
            <div className='flex justify-center items-center overflow-hidden'>
              <p className='text-[18px] uppercase font-bold font-[Poppins] text-[#00D646] text-center tracking-wider'>Project Description</p>
            </div>
            <div className='pt-4 overflow-hidden'>
              <p className='text-[14px] font-[Poppins] text-white tracking-wider'>
                I worked as a Developer for Gamuda and MahSing, two major property development projects,
                where I was responsible for building and optimizing the web platforms.
              </p>
              <p className='text-white uppercase text-[14px] font-[Poppins] tracking-wider pl-6 pt-4 font-bold'>
                Tech Stack & Implementation
              </p>
              <div className='flex flex-col gap-2 pt-3 text-white text-[14px] font-[Poppins] tracking-wider'>
                <p>Frontend:</p>
                <div className='flex gap-2'>
                  <FaHandPointRight className='text-[#00D646]' />
                  <p>Developed the user interface using Vite + React.js for fast performance and efficient development.</p>
                </div>
                <div className='flex gap-2'>
                  <FaHandPointRight className='text-[#00D646]' />
                  <p>Styled components with Tailwind CSS for a modern, responsive design and Vanilla CSS for custom styling.</p>
                </div>
                <p>Backend:</p>
                <div className='flex gap-2'>
                  <FaHandPointRight className='text-[#00D646]' />
                  <p>Built the backend using Node.js and Express.js to handle API requests and ensure smooth data processing.</p>
                </div>
              </div>
              <p className='text-white uppercase text-[14px] font-[Poppins] tracking-wider pl-6 pb-2 pt-6 font-bold'>
                Project Contributions
              </p>
              <div className='flex flex-col gap-2 text-white text-[14px] font-[Poppins] tracking-wider'>
                <div className='flex gap-2'>
                  <FaHandPointRight className='text-[#00D646]' />
                  <p>Created interactive, high-performance web applications for real estate listings.</p>
                </div>
                <div className='flex gap-2'>
                  <FaHandPointRight className='text-[#00D646]' />
                  <p>Ensured a seamless user experience with optimized frontend design and fast-loading components.</p>
                </div>
                <div className='flex gap-2'>
                  <FaHandPointRight className='text-[#00D646]' />
                  <p>Integrated backend APIs to support property search, user authentication, and data management.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
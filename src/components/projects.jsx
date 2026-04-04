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
    <section id='projects' className='w-full h-[200vh] xl:h-[170vh] bg-cover bg-center bg-no-repeat relative' style={{ backgroundImage: `url(${Bgtech})` }}>
      <div className="absolute top-0 left-0 w-full h-full inset-0 bg-[#333B50]/70 z-10">
        <div className='my-[30px]'>
          <div className='flex justify-center items-center pb-4 overflow-hidden'>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className='uppercase text-[21px] md:text-[35px] font-[Playfair] text-white text-center tracking-widest'>
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
            className='bg-[#333B50] shadow-2xl shadow-[#333B50] rounded-2xl mx-[25px] md:mx-52 my-12 md:py-6 px-4 py-4 md:px-16'
          >
            <div className='flex justify-center items-center overflow-hidden'>
              <p className='text-[14px] md:text-[24px] uppercase font-bold font-[Poppins] text-[#00D646] text-center tracking-wider'>Project Description</p>
            </div>
            <div className='pt-4 overflow-hidden'>
              <p className='text-[12px] md:text-[17px] font-[Poppins] text-white text-justify tracking-wider pb-4'>
              I have hands-on experience developing enterprise and commercial web applications across multiple industries, 
              including Leave Management systems and property platforms.
              </p>
              <div className='flex flex-col gap-2 pt-3 text-justify text-white text-[12px] md:text-[16px] font-[Poppins]'>
                <p className='uppercase font-[Poppins] tracking-wider font-bold'>Football Association Singapore:</p>
                <div className='flex gap-2 text-justify'>
                  <FaHandPointRight className='text-[#00D646] w-25' />
                  <p>I worked on a Leave Management System for the Football Association Singapore (FAS), 
                    building features for leave application, approval workflows, and balance tracking using React, 
                    Node.js, Express, and MySQL (Prisma ORM). I focused on ensuring smooth user experience and accurate data handling.</p>
                </div>
              <div className='py-4'>
                <p className='uppercase font-[Poppins] tracking-wider font-bold'>GXO Logistics:</p>
                <div className='flex gap-2'>
                  <FaHandPointRight className='text-[#00D646] w-25' />
                  <p>I contributed to a multi-country Leave Management System for GXO Logistics 
                    (Singapore, Malaysia, India, Thailand, Taiwan) using Power Pages, Dataverse, and MySQL. 
                    I implemented role-based workflows, standardized processes, and ensured data consistency across regions.</p>
              </div>
                </div>
                <p className='uppercase font-[Poppins] tracking-wider font-bold'>Gamuda and MahSing:</p>
                <div className='flex gap-2'>
                  <FaHandPointRight className='text-[#00D646] w-25' />
                  <p>I worked on property web platforms for Gamuda and MahSing, 
                    developing responsive interfaces with Angular and Tailwind CSS, and 
                    building backend APIs with Node.js and MySQL to support property listings and user management.</p>
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
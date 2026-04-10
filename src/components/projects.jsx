import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, A11y, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { FaHandPointRight } from "react-icons/fa";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ds from "../assets/DsLogo.png";
import Bgtech from "../assets/bg-tech.jpg";
import TebsLogo from "../assets/TebsLogo.png";

const Projects = () => {
  return (
    <section id='projects' className='w-full h-[150vh] md:h-[120vh] xl:h-[140vh] bg-cover bg-center bg-no-repeat relative' style={{ backgroundImage: `url(${Bgtech})` }}>
      <div className="flex items-center absolute top-0 left-0 w-full h-full inset-0 bg-[#333B50]/70 z-10">
        <div className="w-full min-w-0 max-w-full">
          <div className='flex justify-center items-center pb-4 overflow-hidden'>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className='uppercase text-[28px] lg:text-[32px] xl:text-[35px] font-[Playfair] text-white text-center tracking-widest'>
              Working Experience
            </motion.p>
          </div>
          <div className="w-full max-w-full min-w-0 overflow-x-hidden px-2 md:px-0 xl:px-0">
          <Swiper
            className="h-[min(190vh,820px)] md:h-[600px] lg:h-[820px] w-full max-w-full min-w-0 rounded-2xl box-border"
            modules={[Navigation, Pagination, EffectCoverflow, A11y, Autoplay]}
            effect={'coverflow'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 40,
              modifier: 1.2,
            }}
            grabCursor={true}
            centeredSlides={true}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 'auto',
                spaceBetween: 50,
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                },
              },
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{ clickable: true }}
            loop={true}
            // autoplay={{
            //   delay: 3000,
            //   disableOnInteraction: false,
            // }}
            speed={900}
          >
            <SwiperSlide className='!w-full max-w-full md:!w-auto md:max-w-2xl lg:max-w-3xl xl:max-w-5xl mx-auto p-4 sm:p-6 md:p-8 lg:p-12 bg-[#0B1727] shadow-2xl shadow-[#333B50] rounded-2xl box-border'>
              <div className='flex flex-col justify-center items-center overflow-hidden pb-6'>  
                <img src={TebsLogo} alt="TebsLogo" className='lg:w-40 lg:h-40 xl:w-50 xl:h-50 w-30 h-30 bg-white mx-auto rounded-2xl' />
                <div className='flex text-white tracking-wider gap-4 py-2 items-center'>
                <p className='bg-[#193A27] text-[14px] md:text-[12px] lg:text-[14px] border-2 border-[#00D646] text-[#B4EFC9] rounded-2xl px-2 py-1'>Current</p>
                <p>1 yr 5 mos</p>
                </div>
              </div>
            <div className='flex justify-center items-center overflow-hidden'>
              <p className='text-[18px] lg:text-[24px] capitalize font-bold font-[Poppins] text-white text-center tracking-wider'>FAS Leave Management System</p>
            </div>
            <div className='pt-4 overflow-hidden'>
              <div className='flex flex-col gap-2 pt-3 text-justify text-white text-[14px] lg:text-[16px] font-[Poppins]'>
                <p className='uppercase font-[Poppins] tracking-wider font-bold'>Football Association Singapore:</p>
                <div className='flex gap-2 text-justify'>
                  <FaHandPointRight className='text-[#00D646] shrink-0 w-5 h-5 mt-1 md:w-6 md:h-6' />
                  <p> Developed and enhanced a Leave Management System for the Football Association Singapore (FAS), 
                    implementing end-to-end features including leave application, multi-level approval workflows, 
                    and dynamic leave balance tracking. Built responsive and reusable UI components using React, 
                    Bootstrap CSS for styling and integrated backend APIs using Node.js and Express with MySQL via Prisma ORM. 
                    Applied business logic such as conditional leave deductions, role-based access control 
                    (admin, manager, employee), and real-time data updates to ensure accuracy and reliability.</p>
                </div>
                <div className='grid md:grid-cols-6 grid-cols-4 justify-center items-center md:gap-2 gap-1 text-center py-2 mx-auto'>
                <p className='bg-[#390344] lg:text-[14px] text-[12px] border-2 border-[#5E0570] text-[#FAE7FE] rounded-2xl px-2 py-1'>React</p>
                <p className='bg-[#390344] lg:text-[14px] text-[12px] border-2 border-[#5E0570] text-[#FAE7FE] rounded-2xl px-2 py-1'>Node.js</p>
                <p className='bg-[#390344] lg:text-[14px] text-[12px] border-2 border-[#5E0570] text-[#FAE7FE] rounded-2xl px-2 py-1'>Express</p>
                <p className='bg-[#390344] lg:text-[14px] text-[12px] border-2 border-[#5E0570] text-[#FAE7FE] rounded-2xl px-2 py-1'>Bootstrap</p>
                <p className='bg-[#390344] lg:text-[14px] text-[12px] border-2 border-[#5E0570] text-[#FAE7FE] rounded-2xl px-2 py-1'>MySQL</p>
                <p className='bg-[#390344] lg:text-[14px] text-[12px] border-2 border-[#5E0570] text-[#FAE7FE] rounded-2xl px-2 py-1'>Prisma</p>
                <p className='bg-[#390344] lg:text-[14px] text-[12px] border-2 border-[#5E0570] text-[#FAE7FE] rounded-2xl px-2 py-1'>GitHub</p>
                <p className='bg-[#390344] lg:text-[14px] text-[12px] border-2 border-[#5E0570] text-[#FAE7FE] rounded-2xl px-2 py-1'>Git</p>
                <p className='bg-[#390344] lg:text-[14px] text-[12px] border-2 border-[#5E0570] text-[#FAE7FE] rounded-2xl px-2 py-1'>ClickUp</p>
                <p className='bg-[#390344] lg:text-[14px] text-[12px] border-2 border-[#5E0570] text-[#FAE7FE] rounded-2xl px-2 py-1'>Jest</p>
                <p className='bg-[#390344] lg:text-[14px] text-[12px] border-2 border-[#5E0570] text-[#FAE7FE] rounded-2xl px-2 py-1'>Postman</p>
                <p className='bg-[#390344] lg:text-[14px] text-[12px] border-2 border-[#5E0570] text-[#FAE7FE] rounded-2xl px-2 py-1'>RESTful APIs</p>
                </div>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide className='!w-full max-w-full md:!w-auto md:max-w-2xl lg:max-w-3xl xl:max-w-5xl mx-auto p-4 sm:p-6 md:p-8 lg:p-12 bg-[#0B1727] shadow-2xl shadow-[#333B50] rounded-2xl box-border'>
              <div className='flex flex-col justify-center items-center overflow-hidden pb-6'>
                <img src={TebsLogo} alt="TebsLogo" className='lg:w-40 lg:h-40 xl:w-50 xl:h-50 w-30 h-30 bg-white mx-auto rounded-2xl' />
                <div className='flex text-white tracking-wider gap-4 py-2 items-center'>
                <p className='bg-[#193A27] text-[14px] md:text-[12px] lg:text-[14px] border-2 border-[#00D646] text-[#B4EFC9] rounded-2xl px-2 py-1'>Current</p>
                <p>1 yr 5 mos</p>
                </div>
              </div>
            <div className='flex justify-center items-center overflow-hidden'>
              <p className='text-[18px] lg:text-[24px] capitalize font-bold font-[Poppins] text-white text-center tracking-wider'>GXO Logistics Leave Management System</p>
            </div>
            <div className='pt-4 overflow-hidden'>
              <div className='flex flex-col gap-2 pt-3 text-justify text-white text-[14px] lg:text-[16px] font-[Poppins]'>
                <p className='uppercase font-[Poppins] tracking-wider font-bold'>GXO Logistics:</p>
                <div className='flex gap-2 text-justify'>
                  <FaHandPointRight className='text-[#00D646] shrink-0 w-5 h-5 mt-1 md:w-6 md:h-6' />
                  <p> Developed a Leave Management System using Microsoft Power Pages, integrating JavaScript for custom 
                    business logic and enhancing user interactions. Automated approval workflows and notifications using 
                    Power Automate, enabling seamless multi-level approval processes. Utilized Dataverse as the primary 
                    data storage to manage leave records, user roles, and entitlements. Focused on delivering a structured, 
                    user-friendly interface while ensuring data consistency, process efficiency, and real-time system updates 
                    across the platform.</p>
                </div>
                <div className='grid lg:grid-cols-6 grid-cols-4 justify-center items-center md:gap-2 gap-1 text-center py-2 mx-auto'>
                <p className='bg-[#390344] text-[12px] lg:text-[14px] border-2 border-[#5E0570] text-[#FAE7FE] rounded-2xl px-2 py-1'>Power Platform</p>
                <p className='bg-[#390344] text-[12px] lg:text-[14px] border-2 border-[#5E0570] text-[#FAE7FE] rounded-2xl px-2 py-1'>Power Pages</p>
                <p className='bg-[#390344] text-[12px] lg:text-[14px] border-2 border-[#5E0570] text-[#FAE7FE] rounded-2xl px-2 py-1'>JavaScript</p>
                <p className='bg-[#390344] text-[12px] lg:text-[14px] border-2 border-[#5E0570] text-[#FAE7FE] rounded-2xl px-2 py-1'>Liquid Code</p>
                <p className='bg-[#390344] text-[12px] lg:text-[14px] border-2 border-[#5E0570] text-[#FAE7FE] rounded-2xl px-2 py-1'>Bootstrap</p>
                <p className='bg-[#390344] text-[12px] lg:text-[14px] border-2 border-[#5E0570] text-[#FAE7FE] rounded-2xl px-2 py-1'>Power Automate</p>
                <p className='bg-[#390344] text-[12px] lg:text-[14px] border-2 border-[#5E0570] text-[#FAE7FE] rounded-2xl px-2 py-1'>Dataverse</p>
                <p className='bg-[#390344] text-[12px] lg:text-[14px] border-2 border-[#5E0570] text-[#FAE7FE] rounded-2xl px-2 py-1'>ClickUp</p>
                <p className='bg-[#390344] text-[12px] lg:text-[14px] border-2 border-[#5E0570] text-[#FAE7FE] rounded-2xl px-2 py-1'>RESTful APIs</p>
                </div>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide className='!w-full max-w-full md:!w-auto md:max-w-2xl lg:max-w-3xl xl:max-w-5xl mx-auto p-4 sm:p-6 md:p-8 lg:p-12 bg-[#0B1727] shadow-2xl shadow-[#333B50] rounded-2xl box-border'>
              <div className='flex flex-col justify-center items-center overflow-hidden pb-6'>
                <img src={ds} alt="TebsLogo" className='lg:w-40 lg:h-40 xl:w-50 xl:h-50 w-30 h-30 bg-white mx-auto rounded-2xl' />
                <div className='flex text-white tracking-wider gap-4 py-2 items-center'>
                <p className='bg-[#818589] text-[14px] md:text-[12px] lg:text-[14px] border-2 border-[#A9A9A9] text-[#D3D3D3] rounded-2xl px-2 py-1'>Internship</p>
                <p>6 mos</p>
                </div>
              </div>
            <div className='flex justify-center items-center overflow-hidden'>
              <p className='text-[18px] lg:text-[24px] capitalize font-bold font-[Poppins] text-white text-center tracking-wider'>Mahsing Real Estate Marketing Website</p>
            </div>
            <div className='pt-4 overflow-hidden'>
              <div className='flex flex-col gap-2 pt-3 text-justify text-white text-[14px] lg:text-[16px] font-[Poppins]'>
                <p className='uppercase font-[Poppins] tracking-wider font-bold'>Mahsing Real Estate:</p>
                <div className='flex gap-2 text-justify'>
                  <FaHandPointRight className='text-[#00D646] shrink-0 w-5 h-5 mt-1 md:w-6 md:h-6' />
                  <p> Developed a Real Estate Marketing Website for MahSing using Angular as the frontend framework 
                    and Tailwind CSS for responsive and modern UI styling. Built a scalable backend using Node.js 
                    and Express.js to handle API requests, property data management, and user enquiries. Integrated 
                    MySQL as the primary database to store and manage property listings, project details, and customer 
                    submissions. Focused on delivering a structured, high-performance application with clean UI components, 
                    efficient data flow.</p>
                </div>
                <div className='grid lg:grid-cols-6 grid-cols-4 justify-center items-center md:gap-2 gap-1 text-center py-2 mx-auto'>
                <p className='bg-[#390344] text-[12px] lg:text-[14px] border-2 border-[#5E0570] text-[#FAE7FE] rounded-2xl px-2 py-1'>Angular</p>
                <p className='bg-[#390344] text-[12px] lg:text-[14px] border-2 border-[#5E0570] text-[#FAE7FE] rounded-2xl px-2 py-1'>Node.js</p>
                <p className='bg-[#390344] text-[12px] lg:text-[14px] border-2 border-[#5E0570] text-[#FAE7FE] rounded-2xl px-2 py-1'>Express</p>
                <p className='bg-[#390344] text-[12px] lg:text-[14px] border-2 border-[#5E0570] text-[#FAE7FE] rounded-2xl px-2 py-1'>Tailwind</p>
                <p className='bg-[#390344] text-[12px] lg:text-[14px] border-2 border-[#5E0570] text-[#FAE7FE] rounded-2xl px-2 py-1'>MySQL</p>
                <p className='bg-[#390344] text-[12px] lg:text-[14px] border-2 border-[#5E0570] text-[#FAE7FE] rounded-2xl px-2 py-1'>GitHub</p>
                <p className='bg-[#390344] text-[12px] lg:text-[14px] border-2 border-[#5E0570] text-[#FAE7FE] rounded-2xl px-2 py-1'>Git</p>
                <p className='bg-[#390344] text-[12px] lg:text-[14px] border-2 border-[#5E0570] text-[#FAE7FE] rounded-2xl px-2 py-1'>JIRA</p>
                <p className='bg-[#390344] text-[12px] lg:text-[14px] border-2 border-[#5E0570] text-[#FAE7FE] rounded-2xl px-2 py-1'>Jasmine</p>
                <p className='bg-[#390344] text-[12px] lg:text-[14px] border-2 border-[#5E0570] text-[#FAE7FE] rounded-2xl px-2 py-1'>Postman</p>
                <p className='bg-[#390344] text-[12px] lg:text-[14px] border-2 border-[#5E0570] text-[#FAE7FE] rounded-2xl px-2 py-1'>RESTful APIs</p>
                </div>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide className='!w-full max-w-full md:!w-auto md:max-w-2xl lg:max-w-3xl xl:max-w-5xl mx-auto p-4 sm:p-6 md:p-8 lg:p-12 bg-[#0B1727] shadow-2xl shadow-[#333B50] rounded-2xl box-border'>
              <div className='flex flex-col justify-center items-center overflow-hidden pb-6'>
                <img src={ds} alt="TebsLogo" className='lg:w-40 lg:h-40 xl:w-50 xl:h-50 w-30 h-30 bg-white mx-auto rounded-2xl' />
                <div className='flex text-white tracking-wider gap-4 py-2 items-center'>
                <p className='bg-[#818589] text-[14px] md:text-[12px] lg:text-[14px] border-2 border-[#A9A9A9] text-[#D3D3D3] rounded-2xl px-2 py-1'>Internship</p>
                <p>6 mos</p>
                </div>
              </div>
            <div className='flex justify-center items-center overflow-hidden'>
              <p className='text-[18px] lg:text-[24px] capitalize font-bold font-[Poppins] text-white text-center tracking-wider'>Gamuda Real Estate Marketing Website</p>
            </div>
            <div className='pt-4 overflow-hidden'>
              <div className='flex flex-col gap-2 pt-3 text-justify text-white text-[14px] lg:text-[16px] font-[Poppins]'>
                <p className='uppercase font-[Poppins] tracking-wider font-bold'>Gamuda Real Estate:</p>
                <div className='flex gap-2 text-justify'>
                  <FaHandPointRight className='text-[#00D646] shrink-0 w-5 h-5 mt-1 md:w-6 md:h-6' />
                  <p> Built a Real Estate Marketing Website for Gamuda property projects using Angular for a dynamic 
                    single-page application experience and Tailwind CSS for responsive and consistent UI design. 
                    Developed backend services using Node.js and Express.js to manage property content, project 
                    details, and user enquiry submissions through RESTful APIs. Utilized MySQL for structured data 
                    storage and relational management of property listings and user interactions.</p>
                </div>
                <div className='grid lg:grid-cols-6 grid-cols-4 justify-center items-center md:gap-2 gap-1 text-center py-2 mx-auto'>
                <p className='bg-[#390344] text-[12px] lg:text-[14px] border-2 border-[#5E0570] text-[#FAE7FE] rounded-2xl px-2 py-1'>Angular</p>
                <p className='bg-[#390344] text-[12px] lg:text-[14px] border-2 border-[#5E0570] text-[#FAE7FE] rounded-2xl px-2 py-1'>Node.js</p>
                <p className='bg-[#390344] text-[12px] lg:text-[14px] border-2 border-[#5E0570] text-[#FAE7FE] rounded-2xl px-2 py-1'>Express</p>
                <p className='bg-[#390344] text-[12px] lg:text-[14px] border-2 border-[#5E0570] text-[#FAE7FE] rounded-2xl px-2 py-1'>Tailwind</p>
                <p className='bg-[#390344] text-[12px] lg:text-[14px] border-2 border-[#5E0570] text-[#FAE7FE] rounded-2xl px-2 py-1'>MySQL</p>
                <p className='bg-[#390344] text-[12px] lg:text-[14px] border-2 border-[#5E0570] text-[#FAE7FE] rounded-2xl px-2 py-1'>GitHub</p>
                <p className='bg-[#390344] text-[12px] lg:text-[14px] border-2 border-[#5E0570] text-[#FAE7FE] rounded-2xl px-2 py-1'>Git</p>
                <p className='bg-[#390344] text-[12px] lg:text-[14px] border-2 border-[#5E0570] text-[#FAE7FE] rounded-2xl px-2 py-1'>JIRA</p>
                <p className='bg-[#390344] text-[12px] lg:text-[14px] border-2 border-[#5E0570] text-[#FAE7FE] rounded-2xl px-2 py-1'>Jasmine</p>
                <p className='bg-[#390344] text-[12px] lg:text-[14px] border-2 border-[#5E0570] text-[#FAE7FE] rounded-2xl px-2 py-1'>Postman</p>
                <p className='bg-[#390344] text-[12px] lg:text-[14px] border-2 border-[#5E0570] text-[#FAE7FE] rounded-2xl px-2 py-1'>RESTful APIs</p>
                </div>
              </div>
            </div>
            </SwiperSlide>
            <div className="swiper-button-next text-white pr-28 pt-92 md:pt-0 md:pr-0 lg:pr-24 xl:pr-48"></div>
            <div className="swiper-button-prev text-white pl-28 pt-92 md:pt-0 md:pl-0 lg:pl-24 xl:pl-48"></div>
          </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
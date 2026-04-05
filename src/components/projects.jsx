import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, A11y, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { FaHandPointRight } from "react-icons/fa";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Bgtech from "../assets/bg-tech.jpg";
import TebsLogo from "../assets/TebsLogo.png";

const Projects = () => {
  return (
    <section id='projects' className='w-full h-[146vh] xl:h-[140vh] bg-cover bg-center bg-no-repeat relative' style={{ backgroundImage: `url(${Bgtech})` }}>
      <div className="absolute top-0 left-0 w-full h-full inset-0 bg-[#333B50]/70 z-10">
        <div className='my-[30px]'>
          <div className='flex justify-center items-center pb-4 overflow-hidden'>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className='uppercase text-[28px] md:text-[35px] font-[Playfair] text-white text-center tracking-widest'>
              Working Experience
            </motion.p>
          </div>
          <Swiper
          className='h-[820px]'
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
            // autoplay={{
            //   delay: 3000,
            //   disableOnInteraction: false,
            // }}
            speed={900}
          >
            <SwiperSlide className='w-full max-w-5xl mx-auto p-12 bg-[#0B1727] shadow-2xl shadow-[#333B50] rounded-2xl'>
              <div className='flex flex-col justify-center items-center overflow-hidden pb-6'>
                <img src={TebsLogo} alt="TebsLogo" className='md:w-50 md:h-50 w-30 h-30 bg-white mx-auto rounded-2xl' />
                <div className='flex text-white tracking-wider gap-4 py-2 items-center'>
                <p className='bg-[#193A27] text-[14px] border-2 border-[#00D646] text-[#B4EFC9] rounded-2xl px-2 py-1'>Current</p>
                <p>1 yr 5 mos</p>
                </div>
              </div>
            <div className='flex justify-center items-center overflow-hidden'>
              <p className='text-[18px] md:text-[24px] capitalize font-bold font-[Poppins] text-white text-center tracking-wider'>FAS Leave Management System</p>
            </div>
            <div className='pt-4 overflow-hidden'>
              <p className='text-[14px] md:text-[17px] font-[Poppins] text-white text-justify tracking-wider pb-4'>
              I have hands-on experience developing an enterprise-level Leave Management System, 
              focusing on implementing structured workflows, role-based access control, and accurate leave tracking.
              </p>
              <div className='flex flex-col gap-2 pt-3 text-justify text-white text-[14px] md:text-[16px] font-[Poppins]'>
                <p className='uppercase font-[Poppins] tracking-wider font-bold'>Football Association Singapore:</p>
                <div className='flex gap-2 text-justify'>
                  <FaHandPointRight className='text-[#00D646] w-full md:w-25' />
                  <p> Developed and enhanced a Leave Management System for the Football Association Singapore (FAS), 
                    implementing end-to-end features including leave application, multi-level approval workflows, 
                    and dynamic leave balance tracking. Built responsive and reusable UI components using React, 
                    Bootstrap CSS for styling and integrated backend APIs using Node.js and Express with MySQL via Prisma ORM. 
                    Applied business logic such as conditional leave deductions, role-based access control 
                    (admin, manager, employee), and real-time data updates to ensure accuracy and reliability.</p>
                </div>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide className='w-full max-w-5xl mx-auto p-12 bg-[#0B1727] shadow-2xl shadow-[#333B50] rounded-2xl'>
              <div className='flex flex-col justify-center items-center overflow-hidden pb-6'>
                <img src={TebsLogo} alt="TebsLogo" className='md:w-50 md:h-50 w-30 h-30 bg-white mx-auto rounded-2xl' />
                <div className='flex text-white tracking-wider gap-4 py-2 items-center'>
                <p className='bg-[#193A27] text-[14px] border-2 border-[#00D646] text-[#B4EFC9] rounded-2xl px-2 py-1'>Current</p>
                <p>1 yr 5 mos</p>
                </div>
              </div>
            <div className='flex justify-center items-center overflow-hidden'>
              <p className='text-[18px] md:text-[24px] capitalize font-bold font-[Poppins] text-white text-center tracking-wider'>GXO Logistics Leave Management System</p>
            </div>
            <div className='pt-4 overflow-hidden'>
              <p className='text-[14px] md:text-[17px] font-[Poppins] text-white text-justify tracking-wider pb-4'>
                I have hands-on experience developing an enterprise-level Leave Management System using low-code technologies, 
                focusing on workflow automation, system integration, and efficient data management within a scalable environment.
              </p>
              <div className='flex flex-col gap-2 pt-3 text-justify text-white text-[14px] md:text-[16px] font-[Poppins]'>
                <p className='uppercase font-[Poppins] tracking-wider font-bold'>GXO Logistics:</p>
                <div className='flex gap-2 text-justify'>
                  <FaHandPointRight className='text-[#00D646] w-full md:w-25' />
                  <p>  Developed a Leave Management System using Microsoft Power Pages, integrating JavaScript for custom 
                    business logic and enhancing user interactions. Automated approval workflows and notifications using 
                    Power Automate, enabling seamless multi-level approval processes. Utilized Dataverse as the primary 
                    data storage to manage leave records, user roles, and entitlements. Focused on delivering a structured, 
                    user-friendly interface while ensuring data consistency, process efficiency, and real-time system updates 
                    across the platform.</p>
                </div>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide className='w-full max-w-5xl mx-auto p-12 bg-[#0B1727] shadow-2xl shadow-[#333B50] rounded-2xl'>
              <div className='flex flex-col justify-center items-center overflow-hidden pb-6'>
                <img src={TebsLogo} alt="TebsLogo" className='md:w-50 md:h-50 w-30 h-30 bg-white mx-auto rounded-2xl' />
                <div className='flex text-white tracking-wider gap-4 py-2 items-center'>
                <p className='bg-[#818589] text-[14px] border-2 border-[#A9A9A9] text-[#D3D3D3] rounded-2xl px-2 py-1'>Internship</p>
                <p>6 mos</p>
                </div>
              </div>
            <div className='flex justify-center items-center overflow-hidden'>
              <p className='text-[18px] md:text-[24px] capitalize font-bold font-[Poppins] text-white text-center tracking-wider'>Real Estate Marketing Website</p>
            </div>
            <div className='pt-4 overflow-hidden'>
              <p className='text-[14px] md:text-[17px] font-[Poppins] text-white text-justify tracking-wider pb-4'>
              I have hands-on experience developing Real Estate Marketing Websites, focusing on showcasing property 
              projects with modern UI/UX, responsive design, and conversion-driven features to enhance user engagement 
              and lead generation.
              </p>
              <div className='flex flex-col gap-2 pt-3 text-justify text-white text-[14px] md:text-[16px] font-[Poppins]'>
                <p className='uppercase font-[Poppins] tracking-wider font-bold'>Mahsing Real Estate:</p>
                <div className='flex gap-2 text-justify'>
                  <FaHandPointRight className='text-[#00D646] w-full md:w-25' />
                  <p> Developed a Real Estate Marketing Website for MahSing using Angular as the frontend framework 
                    and Tailwind CSS for responsive and modern UI styling. Built a scalable backend using Node.js 
                    and Express.js to handle API requests, property data management, and user enquiries. Integrated 
                    MySQL as the primary database to store and manage property listings, project details, and customer 
                    submissions. Focused on delivering a structured, high-performance application with clean UI components, 
                    efficient data flow.</p>
                </div>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide className='w-full max-w-5xl mx-auto p-12 bg-[#0B1727] shadow-2xl shadow-[#333B50] rounded-2xl'>
              <div className='flex flex-col justify-center items-center overflow-hidden pb-6'>
                <img src={TebsLogo} alt="TebsLogo" className='md:w-50 md:h-50 w-30 h-30 bg-white mx-auto rounded-2xl' />
                <div className='flex text-white tracking-wider gap-4 py-2 items-center'>
                <p className='bg-[#818589] text-[14px] border-2 border-[#A9A9A9] text-[#D3D3D3] rounded-2xl px-2 py-1'>Internship</p>
                <p>6 mos</p>
                </div>
              </div>
            <div className='flex justify-center items-center overflow-hidden'>
              <p className='text-[18px] md:text-[24px] capitalize font-bold font-[Poppins] text-white text-center tracking-wider'>Real Estate Marketing Website</p>
            </div>
            <div className='pt-4 overflow-hidden'>
              <p className='text-[14px] md:text-[17px] font-[Poppins] text-white text-justify tracking-wider pb-4'>
              Built a Real Estate Marketing Website for Gamuda property projects, delivering responsive and visually 
              engaging interfaces tailored for property promotion. Developed reusable UI components and structured 
              layouts to effectively present project information and improve user engagement.
              </p>
              <div className='flex flex-col gap-2 pt-3 text-justify text-white text-[14px] md:text-[16px] font-[Poppins]'>
                <p className='uppercase font-[Poppins] tracking-wider font-bold'>Gamuda Real Estate:</p>
                <div className='flex gap-2 text-justify'>
                  <FaHandPointRight className='text-[#00D646] w-full md:w-25' />
                  <p> Built a Real Estate Marketing Website for Gamuda property projects using Angular for a dynamic 
                    single-page application experience and Tailwind CSS for responsive and consistent UI design. 
                    Developed backend services using Node.js and Express.js to manage property content, project 
                    details, and user enquiry submissions through RESTful APIs. Utilized MySQL for structured data 
                    storage and relational management of property listings and user interactions.</p>
                </div>
              </div>
            </div>
            </SwiperSlide>
            {/* <SwiperSlide className='w-full max-w-5xl mx-auto p-12 bg-[#0B1727] shadow-2xl shadow-[#333B50] rounded-2xl'>
            <div className='flex justify-center items-center overflow-hidden'>
              <p className='text-[14px] md:text-[24px] capitalize font-bold font-[Poppins] text-[#00D646] text-center tracking-wider'>GXO Logistic Leave Management System</p>
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
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide className='w-full max-w-5xl mx-auto p-12 bg-[#0B1727] shadow-2xl shadow-[#333B50] rounded-2xl'>
            <div className='flex justify-center items-center overflow-hidden'>
              <p className='text-[14px] md:text-[24px] capitalize font-bold font-[Poppins] text-[#00D646] text-center tracking-wider'>Mahsing Real Estate Marketing Website</p>
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
                  <p>Built a Real Estate Marketing Website to showcase and promote property developments, 
                    focusing on modern UI/UX and conversion-driven design. Developed responsive layouts using React 
                    and Tailwind CSS, with interactive components such as property carousels, project highlights, 
                    and enquiry forms. Optimized performance and accessibility while ensuring seamless user navigation 
                    across devices to enhance user engagement and lead generation.</p>
                </div>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide className='w-full max-w-5xl mx-auto p-12 bg-[#0B1727] shadow-2xl shadow-[#333B50] rounded-2xl'>
            <div className='flex justify-center items-center overflow-hidden'>
              <p className='text-[14px] md:text-[24px] capitalize font-bold font-[Poppins] text-[#00D646] text-center tracking-wider'>Gamuda Real Estate Marketing Website</p>
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
                  <p>Built a Real Estate Marketing Website to showcase and promote property developments, 
                    focusing on modern UI/UX and conversion-driven design. Developed responsive layouts using React 
                    and Tailwind CSS, with interactive components such as property carousels, project highlights, 
                    and enquiry forms. Optimized performance and accessibility while ensuring seamless user navigation 
                    across devices to enhance user engagement and lead generation.</p>
                </div>
              </div>
            </div>
            </SwiperSlide> */}
            <div className="swiper-button-next text-white lg:pr-24 xl:pr-48"></div>
            <div className="swiper-button-prev text-white lg:pl-24 xl:pl-48"></div>
          </Swiper>
          {/* <motion.div
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
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}

export default Projects;
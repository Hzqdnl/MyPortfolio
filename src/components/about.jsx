import { motion } from 'framer-motion';

import BgAbout from '../assets/bg-about.jpg';
import logo from '../assets/hzqDnlogo.svg';

const About = () => {
  return (
    <section id='about' className='relative w-full min-h-screen bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${BgAbout})` }}>
      <div className="flex items-center absolute top-0 left-0 w-full h-full inset-0 bg-[#333B50]/70 z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }} // Fade in from above
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='container flex flex-col mx-auto items-center justify-center bg-[#333B50] w-[380px] md:w-[50%] shadow-2xl shadow-[#333B50] rounded-2xl p-6 md:px-24'
        >
          <div>
            <img  src={logo} alt="logo" />
          </div>
          <div className='text-white font-[Poppins] text-[14px] md:text-[18px] text-justify py-8 md:py-16'>
            <p>I’m a Full Stack Developer with experience building web applications using React, Node.js, Prisma ORM, MySQL and MongoDB. 
              I enjoy creating user-friendly interfaces and developing efficient backend systems that solve real-world problems. 
              I’ve worked on projects involving system development, debugging, and improving existing features, 
              which has strengthened my understanding of both frontend and backend workflows. 
              I’m also familiar with tools like PowerApps, Power Pages and Power Automation for building business solutions. 
              I’m passionate about continuously improving my skills and delivering reliable, scalable solutions. 
              If you’d like to know more about my experience and projects, feel free to download my resume below.</p>
          </div>
          <div className='cursor-pointer bg-transparent text-[12px] md:text-[16px] font-[Poppins] border-2 border-[#00D646] text-white uppercase py-1 px-2 md:py-2 md:px-6 transition-all duration-200 hover:bg-[#00D646] hover:text-[#333B50] hover:border-[#333B50]'>
            <a href="#">
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About;

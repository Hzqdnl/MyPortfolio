import {BsGithub, BsInstagram, BsLinkedin, BsWhatsapp} from 'react-icons/bs';
import zeqsem from '../assets/zeqsem.png';
import hazeq from '../assets/HazeqMy.png';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className='relative bg-white min-h-screen'>
      <div className='absolute w-full md:w-[45%] bottom-0 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-0 mx-auto z-0'>
        <img src={hazeq} alt="hero" className='w-full' />
      </div>
      <div className="flex flex-col justify-center absolute inset-0 bg-[#333B50]/70 z-10">
        <div className='flex flex-col items-center text-center mx-auto md:text-left uppercase text-white relative z-10'>
            <motion.h1 
             initial={{ opacity: 0, y: -50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: false, amount: 0.5 }} // Repeats when scrolling in/out
             transition={{ duration: 0.8, ease: "easeOut" }}
            className='text-[45px] md:text-[42px] lg:text-[67px] xl:text-[74px] w-full font-bold tracking-widest'>
            I<span className='text-[#00D646]'>'</span>m
            </motion.h1>
            <motion.p 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className='text-[35px] md:text-[36px] lg:text-[54px] xl:text-[61px] w-full font-bold tracking-widest'>
            Hazeq Daniel
            </motion.p>
            <motion.p 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className='text-[21px] md:text-[24px] lg:text-[33px] w-full font-bold tracking-widest'>
            Wan Hairur Rizal
            </motion.p>
            <hr className='w-full mt-4 mb-4 text-[#00D646] border-[1px]'/>
            <p className='lg:text-[18px] md:text-[12px] text-[14px] inline-block w-full text-center tracking-[0.1em]'>
            <span className="text-white">A </span>
            <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  1000,
                  'Software Engineer',
                  1000,
                  'Frontend Developer',
                  1000,
                  'Backend Developer',
                  1000,
                  'Programmer',
                  1000
                ]}
                wrapper="span"
                speed={50}
                className='bg-gradient-to-r from-green-500 to-yellow-500 text-transparent bg-clip-text'
                repeat={Infinity}
              />
              </p>
        </div>
        <div className='flex space-x-6 md:space-x-8 mx-auto items-center pt-5 relative z-10'>
            <a href="https://wa.me/60192609906" target='_blank' rel="noopener noreferrer">
              <BsWhatsapp className='text-2xl cursor-pointer text-gray-300 transition-transform duration-200 hover:-translate-y-1'/>
              </a>
            <a href="https://www.instagram.com/de__niel?igsh=MW1iaGl3OHd6bXVxdg%3D%3D&utm_source=qr" target='_blank' rel="noopener noreferrer">
              <BsInstagram className='text-2xl cursor-pointer text-gray-300 transition-transform duration-200 hover:-translate-y-1'/>
              </a>
            <a href="https://www.linkedin.com/in/hazeqdaniel/" target='_blank' rel="noopener noreferrer">
              <BsLinkedin className='text-2xl cursor-pointer text-gray-300 transition-transform duration-200 hover:-translate-y-1'/>
              </a>
            <a href="https://github.com/Hzqdnl" target='_blank' rel="noopener noreferrer">
              <BsGithub className='text-2xl cursor-pointer text-gray-300 transition-transform duration-200 hover:-translate-y-1'/>
              </a>
        </div>
        </div>
    </section>
  )
}

export default Hero
import {BsGithub, BsInstagram, BsLinkedin, BsWhatsapp} from 'react-icons/bs';
import zeqsem from '../assets/zeqsem.png';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className='bg-white h-screen '>
      <div className="absolute inset-0 bg-[#333B50]/70 z-10"></div>
      <div className='absolute w-[35%] bottom-0 right-0 mx-auto z-0'>
        <img src={zeqsem} alt="hero" className='w-full' />
      </div>
        <div className='flex flex-col items-center uppercase text-white pt-[200px] relative z-10'>
            <motion.h1 
             initial={{ opacity: 0, y: -50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: false, amount: 0.5 }} // Repeats when scrolling in/out
             transition={{ duration: 0.8, ease: "easeOut" }}
            className='text-[67px] w-[40%] font-bold tracking-widest'>
            I<span className='text-[#00D646]'>'</span>m
            </motion.h1>
            <motion.p 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className='text-[54px] w-[40%] font-bold tracking-widest'>
            Hazeq Daniel
            </motion.p>
            <motion.p 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className='text-[26px] w-[40%] font-bold tracking-widest'>
            Wan Hairur Rizal
            </motion.p>
            <hr className='w-[30%] mr-38 mt-4 mb-4 text-[#00D646] border-[1px]'/>
            <p className='text-[18px] inline-block w-[40%] tracking-[0.1em]'>
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
        <div className='flex space-x-8 px-[30%] items-center pt-5 relative z-10'>
            <a href="https://wa.me/60192609906" target='_blank' rel="noopener noreferrer">
              <BsWhatsapp className='text-2xl cursor-pointer text-gray-300 transition-transform duration-200 hover:-translate-y-1'/>
              </a>
            <a href="" target='_blank' rel="noopener noreferrer">
              <BsInstagram className='text-2xl cursor-pointer text-gray-300 transition-transform duration-200 hover:-translate-y-1'/>
              </a>
            <a href="https://www.linkedin.com/in/hazeqdaniel/" target='_blank' rel="noopener noreferrer">
              <BsLinkedin className='text-2xl cursor-pointer text-gray-300 transition-transform duration-200 hover:-translate-y-1'/>
              </a>
            <a href="" target='_blank' rel="noopener noreferrer">
              <BsGithub className='text-2xl cursor-pointer text-gray-300 transition-transform duration-200 hover:-translate-y-1'/>
              </a>
        </div>
    </section>
  )
}

export default Hero
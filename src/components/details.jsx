import { motion } from 'framer-motion';
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

import Bgdetails from '../assets/bg-details.jpg'

const Details = () => {
  return (
  <section id='contact' className='w-full h-screen bg-cover bg-center bg-no-repeat relative' style={{backgroundImage: `url(${Bgdetails})`}}>
  <div className="absolute top-0 left-0 w-full h-full inset-0 bg-[#333B50]/70 z-10">
    <motion.div 
     initial={{ opacity: 0, y: -50 }} // Fade in from above
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: false, amount: 0.5 }}
     transition={{ duration: 0.8, ease: "easeOut" }}
    className='flex justify-center py-12 px-24 rounded-2xl w-[80%] gap-12 items center mx-auto my-20 bg-[#333B50] shadow-2xl shadow-[#333B50]'>
      <div className='w-1/2 flex flex-col justify-center'>
        <p className='font-[Poppins] uppercase text-white text-[24px] tracking-widest'>contact me</p>
        <p className='text-white text-[14px] py-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className='flex gap-2 items-center'>
        <MdOutlineEmail className='text-white'/>
        <p className='text-white text-[14px] tracking-widest cursor-pointer hover:text-[#00D646]'>hazeqwan01@gmail.com</p>
        </div>
        <div className='flex gap-2 items-center pt-2'>
        <FaPhoneAlt className='text-white'/>
        <p className='text-white text-[14px] tracking-widest cursor-pointer hover:text-[#00D646]'>019-2609906</p>
        </div>      
      </div>
      <form className='flex flex-col w-1/2 text-white font-[Poppins] text-[14px]'>
          <div className='flex flex-col'>
            <label className='pb-2' htmlFor="">Company / Client's Name</label>
            <input className='bg-white text-black p-2' placeholder='Name' type="text" />
          </div>
          <div className='flex flex-col py-4'>
            <label className='pb-2' htmlFor="">Email</label>
            <input className='bg-white text-black p-2' placeholder='Email' type="email" />
          </div>
          <div className='flex flex-col'>
            <label className='pb-2' htmlFor="">Phone</label>
            <input className='bg-white text-black p-2' placeholder='Number' type="tel" />
          </div>
          <div className='flex flex-col py-4'>
            <label className='pb-2' htmlFor="">Description</label>
            <textarea className='bg-white text-black p-2' placeholder='Description' name="" id=""></textarea>
          </div>
          <div className='flex flex-col px-28'>
            <button className='cursor-pointer py-2 bg-[#00D646] rounded-[6px] text-[#333B50]' type='submit'>Send</button>
          </div>
      </form>
    </motion.div>
  </div>
</section>
  )
}

export default Details

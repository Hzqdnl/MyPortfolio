import { motion } from 'framer-motion';
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

import Bgdetails from '../assets/bg-details.jpg'

const Details = () => {
  return (
  <section id='contact' className='w-full min-h-screen bg-cover bg-center bg-no-repeat relative' style={{backgroundImage: `url(${Bgdetails})`}}>
  <div className="absolute top-0 left-0 w-full h-full inset-0 bg-[#333B50]/70 z-10">
    <motion.div 
     initial={{ opacity: 0, y: -50 }} // Fade in from above
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: false, amount: 0.5 }}
     transition={{ duration: 0.8, ease: "easeOut" }}
    className='flex flex-col-reverse md:flex-row justify-center py-6 px-6 md:py-12 md:px-24 rounded-2xl w-[80%] gap-6 md:gap-12 items-center mx-auto my-10 md:my-20 bg-[#333B50] shadow-2xl shadow-[#333B50]'>
      <div className='w-full md:w-1/2 flex flex-col justify-center'>
        <p className='hidden md:block font-[Poppins] uppercase text-white text-[24px] md:text-[30px] tracking-widest'>contact me</p>
        <p className='text-white hidden md:block text-justify text-[14px] md:text-[18px] py-6'>I’m always open to new opportunities, collaborations, or just a friendly conversation. If you have a project in mind or would like to work together, feel free to reach out.</p>
        <div className='flex gap-2 justify-center md:justify-start md:items-center'>
        <MdOutlineEmail className='text-white'/>
        <p className='text-white text-[14px] md:text-[16px] tracking-widest cursor-pointer hover:text-[#00D646]'>hazeqwan01@gmail.com</p>
        </div>
        <div className='flex gap-2 justify-center md:justify-start md:items-center pt-2'>
        <FaPhoneAlt className='text-white'/>
        <p className='text-white text-[14px] md:text-[16px] tracking-widest cursor-pointer hover:text-[#00D646]'>019-2609906</p>
        </div>      
      </div>
      <form className='flex flex-col w-full md:w-1/2 text-white font-[Poppins] text-[14px] md:text-[16px]'>
      <div className='block md:hidden'>
      <p className='font-[Poppins] uppercase text-white text-center text-[28px] md:text-[30px] tracking-widest'>contact me</p>
      </div>
          <div className='flex flex-col'>
            <label className='pb-2 pt-6' htmlFor="">Collaborator / Client's Name</label>
            <input className='bg-white text-black p-2 rounded-md' placeholder='Name' type="text" />
          </div>
          <div className='flex flex-col py-4'>
            <label className='pb-2' htmlFor="">Email</label>
            <input className='bg-white text-black p-2 rounded-md' placeholder='Email' type="email" />
          </div>
          <div className='flex flex-col'>
            <label className='pb-2' htmlFor="">Phone</label>
            <input className='bg-white text-black p-2 rounded-md' placeholder='Number' type="tel" />
          </div>
          <div className='flex flex-col py-4'>
            <label className='pb-2' htmlFor="">Description</label>
            <textarea className='bg-white text-black p-2 rounded-md' placeholder='Description' name="" id=""></textarea>
          </div>
          <div className='flex flex-col md:px-28 md:my-6 w-[25%] md:w-full mx-auto'>
            <button className='cursor-pointer hover:text-white py-1 md:py-2 bg-[#00D646] hover:bg-[#00BC7D] rounded-[6px] text-[#333B50]' type='submit'>Send</button>
          </div>
      </form>
    </motion.div>
  </div>
</section>
  )
}

export default Details

import { motion } from 'framer-motion';
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import Bgdetails from '../assets/bg-details.jpg'
import { useState } from 'react';

const Details = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [honeypot, setHoneypot] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    setStatus(null);

    if (honeypot) return;

    setLoading(true);
    try{
      const templateParams = {
        from_name: name,
        from_email: email,
        from_phone: phone,
        description: description,
    };
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
    );
    setStatus('success');
    setName('');
    setEmail('');
    setPhone('');
    setDescription('');
  } catch (err) {
    console.error(err);
    setStatus('error');
  } finally {
    setLoading(false);
  }
  };
  
  return (
  <section id='contact' className='w-full min-h-screen bg-cover bg-center bg-no-repeat relative' style={{backgroundImage: `url(${Bgdetails})`}}>
  <div className="flex items-center absolute top-0 left-0 w-full h-full inset-0 bg-[#333B50]/70 z-10">
  <div className="absolute -left-[9999px] opacity-0 h-0 overflow-hidden" aria-hidden="true">
  <label htmlFor="website">Website</label>
  <input
    id="website"
    name="website"
    value={honeypot}
    onChange={(e) => setHoneypot(e.target.value)}
    tabIndex={-1}
    autoComplete="off"
  />
</div>
    <motion.div 
     initial={{ opacity: 0, y: -50 }} // Fade in from above
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: false, amount: 0.5 }}
     transition={{ duration: 0.8, ease: "easeOut" }}
    className='flex flex-col-reverse lg:flex-row justify-center py-6 px-6 lg:py-12 lg:px-24 rounded-2xl w-[380px] md:w-[70%] lg:w-[80%] gap-6 lg:gap-12 items-center mx-auto bg-[#333B50] shadow-2xl shadow-[#333B50]'>
      <div className='w-full lg:w-1/2 flex flex-col justify-center'>
        <p className='hidden lg:block font-[Poppins] uppercase text-white text-[24px] lg:text-[24px] tracking-widest'>contact me</p>
        <p className='text-white hidden lg:block text-justify text-[14px] lg:text-[18px] py-6'>I’m always open to new opportunities, collaborations, or just a friendly conversation. If you have a project in mind or would like to work together, feel free to reach out.</p>
        <div className='flex gap-2 justify-center lg:justify-start lg:items-center'>
        <MdOutlineEmail className='text-white'/>
        <p className='text-white text-[14px] lg:text-[16px] tracking-widest cursor-pointer hover:text-[#00D646]'>hazeqwan01@gmail.com</p>
        </div>
        <div className='flex gap-2 justify-center lg:justify-start lg:items-center pt-2'>
        <FaPhoneAlt className='text-white'/>
        <p className='text-white text-[14px] lg:text-[16px] tracking-widest cursor-pointer hover:text-[#00D646]'>019-2609906</p>
        </div>      
      </div>
      <form className='flex flex-col w-full lg:w-1/2 text-white font-[Poppins] text-[14px] lg:text-[16px]' onSubmit={handleSubmit}>
      <div className='block lg:hidden'>
      <p className='font-[Poppins] uppercase text-white text-center text-[28px] lg:text-[30px] tracking-widest'>contact me</p>
      </div>
          <div className='flex flex-col'>
            <label className='pb-2 pt-6' htmlFor="client-name">Collaborator / Client's Name</label>
            <input id='client-name' name='from_name' className='bg-white text-black p-2 rounded-md' placeholder='Name' type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
          </div>
          <div className='flex flex-col py-4'>
            <label className='pb-2' htmlFor="email-name">Email</label>
            <input id='email-name' name='from_email' className='bg-white text-black p-2 rounded-md' placeholder='Email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </div>
          <div className='flex flex-col'>
            <label className='pb-2' htmlFor="phone-num">Phone</label>
            <input id='phone-num' name='from_phone' className='bg-white text-black p-2 rounded-md' placeholder='Number' type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required/>
          </div>
          <div className='flex flex-col py-4'>
            <label className='pb-2' htmlFor="desc-name">Description</label>
            <textarea className='bg-white text-black p-2 rounded-md' placeholder='Description' name="description" id="desc-name" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
          </div>
          {status === 'success' && (
            <p className="text-[#00D646] pt-2" role="status">Message sent. I’ll get back to you soon.</p>
          )}
          {status === 'error' && (
            <p className="text-red-400 pt-2" role="alert">Something went wrong. Please try again or email me directly.</p>
          )}
          <div className='flex flex-col lg:px-28 lg:my-6 w-[25%] lg:w-full mx-auto'>
            <button className='cursor-pointer hover:text-white py-1 lg:py-2 bg-[#00D646] hover:bg-[#00BC7D] rounded-[6px] text-[#333B50]' type='submit' disabled={loading} >{loading ? 'Sending…' : 'Send'}</button>
          </div>
      </form>
    </motion.div>
  </div>
</section>
  )
}

export default Details

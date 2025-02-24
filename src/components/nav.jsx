import logo from '../assets/hzqDnlogo.svg';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt1 } from 'react-icons/hi';
import { useState } from 'react';

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  function openMenu(){
    setToggle(true);
  }
  function closeMenu(){
    setToggle(false);
  }
  
  return (
    <>
    <nav className="flex justify-between font-mono rounded-bl-2xl rounded-br-2xl left-10 right-10 md:left-20 md:right-20 lg:left-30 lg:right-30 xl:left-40 xl:right-40 px-6 md:px-10 lg:px-16 items-center h-16 bg-[#333B50] shadow-[0_10px_10px_-2px_rgba(0,0,0,0.3)] fixed z-50" role="navigation">
      <div className="w-2/6">
      <img src={logo} alt="logo" className='lg:w-20 w-14'/>
      </div>
      <ul className="lg:flex w-4/6 space-x-6 items-center justify-end hidden text-gray-300">
        <li className="hover:bg-[#00D646] hover:text-black font-[Poppins] rounded-2xl p-2 cursor-pointer"><a href="#about">About Me</a></li>
        <li className="hover:bg-[#00D646] hover:text-black font-[Poppins] rounded-2xl p-2 cursor-pointer"><a href="#projects">Projects Involved</a></li>
        <li className="hover:bg-[#00D646] hover:text-black font-[Poppins] rounded-2xl p-2 cursor-pointer"><a href="#Tech">Technologies</a></li>
        <li className="hover:bg-[#00D646] hover:text-black font-[Poppins] rounded-2xl p-2 cursor-pointer"><a href="#contact">Send Details</a></li>
      </ul>

      <div className={`lg:hidden block absolute top-12 w-full left-0 right-0 rounded-b-2xl overflow-hidden transition-all duration-200 ease-in-out ${
    toggle ? 'h-48 opacity-100 shadow-[0_10px_10px_-2px_rgba(0,0,0,0.3)]' : 'h-0 opacity-0 shadow-none'
  }`}>
        <ul className='flex flex-col justify-center text-center cursor-pointer bg-[#333B50] text-gray-300 h-48 rounded-b-2xl relative'>
          <li className="hover:bg-[#00D646] hover:text-black font-[Poppins] text-[12px] rounded-2xl p-2 cursor-pointer"><a href="#">About Me</a></li>
          <li className="hover:bg-[#00D646] hover:text-black font-[Poppins] text-[12px] rounded-2xl p-2 cursor-pointer"><a href="#">Projects Involved</a></li>
          <li className="hover:bg-[#00D646] hover:text-black font-[Poppins] text-[12px] rounded-2xl p-2 cursor-pointer"><a href="#">Technologies</a></li>
          <li className="hover:bg-[#00D646] hover:text-black font-[Poppins] text-[12px] rounded-2xl p-2 cursor-pointer"><a href="#">Send Details</a></li>
        </ul>
      </div>

      <div>
        {toggle ? (
          <AiOutlineClose 
          onClick={closeMenu} 
          className='lg:hidden cursor-pointer text-[#00D646]'
          />
        ):(
        <HiMenuAlt1 
        onClick={openMenu} 
        className='lg:hidden cursor-pointer text-[#00D646]'
        />)}
      </div>
    </nav>
    </>
  )
}

export default Nav

import logo from '../assets/hzqDnl.svg';
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
    <nav className="flex justify-between font-mono rounded-bl-2xl rounded-br-2xl mx-10 md:mx-20 lg:mx-30 xl:mx-40 px-6 md:px-10 lg:px-16 items-center h-16 bg-emerald-200 shadow-[0_10px_10px_-2px_rgba(0,0,0,0.3)] relative" role="navigation">
      <div className="w-3/6">
      <img src={logo} alt="logo" className='lg:w-20 w-14'/>
      </div>
      <ul className="lg:flex w-3/6 space-x-6 items-center justify-end hidden">
        <li className="hover:bg-emerald-400 hover:text-white font-[Poppins] rounded-2xl p-2 cursor-pointer"><a href="#">About Me</a></li>
        <li className="hover:bg-emerald-400 hover:text-white font-[Poppins] rounded-2xl p-2 cursor-pointer"><a href="#">Projects Involved</a></li>
        <li className="hover:bg-emerald-400 hover:text-white font-[Poppins] rounded-2xl p-2 cursor-pointer"><a href="#">Languages</a></li>
        <li className="hover:bg-emerald-400 hover:text-white font-[Poppins] rounded-2xl p-2 cursor-pointer"><a href="#">Send Details</a></li>
      </ul>

      <div className={`lg:hidden block absolute top-12 w-full left-0 right-0 bg-emerald-200 rounded-b-2xl overflow-hidden transition-all duration-200 ease-in-out ${
    toggle ? 'h-48 opacity-100 shadow-[0_10px_10px_-2px_rgba(0,0,0,0.3)]' : 'h-0 opacity-0 shadow-none'
  }`}>
        <ul className='flex flex-col justify-center text-center cursor-pointer bg-emerald-200 h-48 rounded-b-2xl relative'>
          <li className="hover:bg-emerald-400 hover:text-white font-[Poppins] text-[12px] rounded-2xl p-2 cursor-pointer"><a href="#">About Me</a></li>
          <li className="hover:bg-emerald-400 hover:text-white font-[Poppins] text-[12px] rounded-2xl p-2 cursor-pointer"><a href="#">Projects Involved</a></li>
          <li className="hover:bg-emerald-400 hover:text-white font-[Poppins] text-[12px] rounded-2xl p-2 cursor-pointer"><a href="#">Languages</a></li>
          <li className="hover:bg-emerald-400 hover:text-white font-[Poppins] text-[12px] rounded-2xl p-2 cursor-pointer"><a href="#">Send Details</a></li>
        </ul>
      </div>

      <div>
        {toggle ? (
          <AiOutlineClose 
          onClick={closeMenu} 
          className='lg:hidden cursor-pointer'
          />
        ):(
        <HiMenuAlt1 
        onClick={openMenu} 
        className='lg:hidden cursor-pointer'
        />)}
      </div>
    </nav>
    </>
  )
}

export default Nav

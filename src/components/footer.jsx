import logo from '../assets/hzqDnlogo.svg';
import { FaRegCopyright } from "react-icons/fa";

const footer = () => {
  return (
    <section className="bg-[#333B50]">
        <div className='flex flex-col md:flex-row mx-auto justify-center items-center text-white py-3 md:py-6'>
        <div className='flex-row justify-items-center'>
            <img src={logo} alt="logo" className='w-[60%] md:w-[80%] cursor-pointer'/>
        </div>
        <div className='hidden md:block'>
        <FaRegCopyright className='text-[12px]' />
        </div>
        <div>
        <p className='text-[12px] lg:text-[14px] text-center md:text-left px-4 md:pl-1'>2025 by Hazeq Daniel. All Rights Reserved. Unauthorized use or reproduction of this content is prohibited.</p>
        </div>
        </div>
    </section>
  )
}

export default footer
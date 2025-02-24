import logo from '../assets/hzqDnlogo.svg';
import { FaRegCopyright } from "react-icons/fa";

const footer = () => {
  return (
    <section className="bg-[#333B50]">
        <div className='flex mx-auto justify-center items-center text-white py-6'>
        <div>
            <img src={logo} alt="logo" className='w-[80%] cursor-pointer'/>
        </div>
        <div>
        <FaRegCopyright className='text-[12px]' />
        </div>
        <div>
        <p className='text-[12px] pl-1'>2025 by Hazeq Daniel. All Rights Reserved. Unauthorized use or reproduction of this content is prohibited.</p>
        </div>
        </div>
    </section>
  )
}

export default footer
import {BsGithub, BsInstagram, BsLinkedin, BsWhatsapp} from 'react-icons/bs';
import zeqsem from '../assets/zeqsem.png';
import { TypeAnimation } from 'react-type-animation';

const hero = () => {
  return (
    <section className='bg-white h-screen '>
      <div className="absolute inset-0 bg-[#333B50]/70 z-10"></div>
      <div className='absolute w-[35%] bottom-0 right-0 mx-auto z-0'>
        <img src={zeqsem} alt="hero" className='w-full' />
      </div>
        <div className='flex flex-col items-center uppercase text-white pt-[200px] relative z-10'>
            <h1 className='text-[67px] w-[40%] font-bold tracking-widest'>I<span className='text-[#00D646]'>'</span>m</h1>
            <p className='text-[54px] w-[40%] font-bold tracking-widest'>Hazeq Daniel</p>
            <p className='text-[26px] w-[40%] font-bold tracking-widest'>Wan Hairur Rizal</p>
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
                className='text-[#00D646]'
                repeat={Infinity}
              />
              </p>
        </div>
        <div className='flex space-x-8 px-[30%] items-center pt-5 relative z-10'>
            <BsWhatsapp className='text-2xl cursor-pointer text-gray-300'/>
            <BsInstagram className='text-2xl cursor-pointer text-gray-300'/>
            <BsLinkedin className='text-2xl cursor-pointer text-gray-300'/>
            <BsGithub className='text-2xl cursor-pointer text-gray-300'/>
        </div>
    </section>
  )
}

export default hero
import {BsFacebook, BsInstagram, BsLinkedin, BsWhatsapp} from 'react-icons/bs';

const hero = () => {
  return (
    <section>
        <div className='flex px-40 space-x-4 items-center w-full pt-5'>
            <BsFacebook className='text-2xl cursor-pointer'/>
            <BsInstagram className='text-2xl cursor-pointer'/>
            <BsLinkedin className='text-2xl cursor-pointer'/>
            <BsWhatsapp className='text-2xl cursor-pointer'/>
        </div>

        <div className='uppercase font-[Playfair] px-[150px] py-[100px]'>
            <h1 className='text-[67px]'>I'm</h1>
            <p className='text-[54px]'>Hazeq Daniel</p>
            <p className='text-[26px]'>Wan Hairur Rizal</p>
            <hr className='w-[28%] mt-4 mb-4' />
            <p className='text-[18px]'>A Full Stack Developer</p>
        </div>
    </section>
  )
}

export default hero
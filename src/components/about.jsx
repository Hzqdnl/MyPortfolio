import BgAbout from '../assets/bg-about.jpg';
import logo from '../assets/hzqDnlogo.svg';

const About = () => {
  return (
    <section id='about' className='relative w-full h-screen bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${BgAbout})`}}>
        <div className="absolute top-0 left-0 w-full h-full inset-0 bg-[#333B50]/70 z-10">
        <div className='container h-[80vh] my-[80px] flex flex-col mx-auto items-center justify-center bg-[#333B50] w-[50%] shadow-2xl shadow-[#333B50] rounded-2xl p-24'>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div className='text-white text-center py-16'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
                id est laborum.</p>
            </div>
            <div className='cursor-pointer bg-transparent text-[13px] font-[Poppins] border-2 border-[#00D646] text-white uppercase py-2 px-6 transition-all duration-200 hover:bg-[#00D646] hover:text-[#333B50] hover:border-white'>
              <a href="#">
                Download Resume
              </a>
            </div>
        </div>
        </div>
    </section>
  )
}

export default About

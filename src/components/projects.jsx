import { Carousel } from "@material-tailwind/react";
import Bgproject from "../assets/bg-project.jpg";
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';

const Projects = () => {
  return (
    <section className='relative w-full h-screen bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${Bgproject})`}}>
        <div className="absolute top-0 left-0 w-full h-full inset-0 bg-[#333B50]/70 z-10">
        <div className="flex justify-center items-center h-screen">
      <Carousel 
        className="w-[1000px] h-[500px] rounded-xl shadow-2xl shadow-[#333B50]" 
        loop={true}
        prevArrow={({ handlePrev }) => (
          <button
            onClick={handlePrev}
            className="cursor-pointer text-[24px] text-white left-2 top-1/2 absolute -translate-y-1/2 bg-[#333B50] px-4 py-2 rounded-full"
          >
            ←
          </button>
        )}
        nextArrow={({ handleNext }) => (
          <button
            onClick={handleNext}
            className="cursor-pointer text-[24px] text-white right-2 top-1/2 absolute -translate-y-1/2 bg-[#333B50] px-4 py-2 rounded-full"
          >
            →
          </button>
        )}
      >
        <img
          src={project1}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src={project2}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src={project3}
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <img
          src={project4}
          alt="image 4"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </div>
        </div>
    </section>
  )
}

export default Projects
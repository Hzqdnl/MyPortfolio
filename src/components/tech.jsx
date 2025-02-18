import { motion } from "framer-motion";
import Bgproject from "../assets/bg-project.jpg";

import bootstrap from "../assets/bootstrap.png";
import express from "../assets/express.png";
import git from "../assets/git.png";
import html5 from "../assets/html5.png";
import mongo from "../assets/mongodb.png";
import mysql from "../assets/mysql.png";
import node from "../assets/nodejs.png";
import postman from "../assets/postman.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import laravel from "../assets/laravel.png";

const Tech = () => {
  return (
    <section id="Tech" className='w-full h-screen bg-cover bg-center bg-no-repeat relative' style={{backgroundImage: `url(${Bgproject})`}}>
      <div className="absolute top-0 left-0 w-full h-full inset-0 bg-[#333B50]/70 z-10">
      <div className="my-[30px]">
       <div className='flex justify-center items-center overflow-hidden'>
          <motion.p 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='uppercase text-[28px] font-[Playfair] text-white text-center tracking-widest'>
            Technologies
          </motion.p>
        </div>
        </div>
        </div>
    </section>
  );
};

export default Tech;
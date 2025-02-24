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

const techStack = [react, node, mongo, express, bootstrap, html5, tailwind, git, postman, mysql];

const Tech = () => {
  return (
    <section id="Tech" className='w-full h-[70vh] bg-cover bg-center bg-no-repeat relative' style={{backgroundImage: `url(${Bgproject})`}}>
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
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-5 w-1/2 justify-center gap-4 items-center mx-auto py-12">
            
            {techStack.map((tech, index) => (
              <motion.img 
                key={index}
                src={tech}
                alt=""
                aria-label="Technology Icon"
                className="shadow-2xl cursor-pointer rounded-2xl bg-[#00d6471d] shadow-[#00d6479f] mb-4"
                animate={{ y: [-10, 10, -10] }} // Floating animation
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }} // Alternating effect
              />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Tech;

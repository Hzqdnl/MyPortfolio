import { motion } from "framer-motion";
// import Bgtech from "../assets/bg-tech.jpg";
import Bgproject from "../assets/bg-project.jpg";

// import bootstrap from "../assets/bootstrap.svg";
// import express from "../assets/express.svg";
// import git from "../assets/git.svg";
// import html5 from "../assets/html5.svg";
// import mongo from "../assets/mongo.svg";
// import mysql from "../assets/mysql.svg";
// import node from "../assets/node.svg";
// import postman from "../assets/postman.svg";
// import tailwind from "../assets/tailwind.svg";
// import react from "../assets/react.svg";
// import vite from "../assets/vite.svg";

const Tech = () => {
  return (
    <section id="Tech" className='w-full h-screen bg-cover bg-center bg-no-repeat relative' style={{backgroundImage: `url(${Bgproject})`}}>
      <div className="absolute top-0 left-0 w-full h-full inset-0 bg-[#333B50]/70 z-10">
       <div className='flex justify-center items-center pb-4 overflow-hidden'>
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
    </section>
  );
};

export default Tech;
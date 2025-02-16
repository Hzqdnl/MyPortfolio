import { useEffect, useState } from "react";

import Nav from './nav'
import Hero from './hero'
import About from './about'
import Projects from './projects'
import Tech from './tech'

import top from '../assets/top.svg'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 z-20 cursor-pointer right-6 p-3 bg-emerald-500 text-white rounded-[15px] shadow-[0px_4px_10px_rgba(16,185,129,0.7)] transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <img src={top} alt="" className="h-8"/>
    </button>
  );
};

const MainLayout = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <About/>
      <Projects/>
      <Tech/>
      <BackToTop />
    </div>
  )
}

export default MainLayout

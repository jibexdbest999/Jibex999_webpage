import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import NewLogo from "../assets/newLogo.png";
import { SlMenu } from "react-icons/sl";
import { IoMdClose } from "react-icons/io";
import { IoMoon, IoSunny } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

export default function NavBar({ openProjectsModal }) {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
  return localStorage.getItem("theme") === "dark";
  });

  const location = useLocation();

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
    root.classList.add("dark");
    localStorage.setItem("theme", "dark");
    } else {
    root.classList.remove("dark");
    localStorage.setItem("theme", "light");
   }
  }, [darkMode]);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

 const drawerVariants = {
  hidden: { x: "100%" },
  visible: { x: 0 },
  exit: { x: "100%" },
};

  const mobileLinks = [
    { name: "Home", path: "/" },
    { name: "Projects" },
    { name: "About me", path: "/about" },
    { name: "Contact me", path: "/contact" },
  ];

  return (
    <div>
      <nav className="flex fixed top-0 z-50 w-full h-18 md:h-20 backdrop-blur-md bg-white/80 dark:bg-black/50 border-b border-gray-300/50 dark:border-gray-700/50 shadow-lg text-blue-700 items-center px-4 sm:px-10 justify-between transition-colors duration-300">
        <NavLink to='/'><img className="w-60 lg:w-70 ml-[-40px]" src={NewLogo} alt="Jibex999 logo" /></NavLink>

        <div className="hidden md:flex border border-gray-500/20 bg-gray-500/5 rounded-full px-10 py-2 gap-12 md:gap-5 lg:gap-15 font-semibold mr-5 text-[10px] md:text-[10px] lg:text-[15px]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:underline hover:text-blue-600 hover:decoration-3 hover:underline-offset-5 transition-all duration-200 ${
                isActive ? "text-blue-400" : "text-blue-700"
              }`
            }
          >
            Home
          </NavLink>

          <button
            onClick={openProjectsModal}
            className="hover:underline hover:text-blue-600 hover:decoration-3 hover:underline-offset-5 transition-all duration-200 text-blue-700 font-semibold cursor-pointer"
          >
            Portfolio
          </button>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:underline hover:text-blue-600 hover:decoration-3 hover:underline-offset-5 transition-all duration-200 ${
                isActive ? "text-blue-400" : "text-blue-700"
              }`
            }
          >
            About Me
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:underline hover:text-blue-600 hover:decoration-3 hover:underline-offset-5 transition-all duration-200 ${
                isActive ? "text-blue-400" : "text-blue-700"
              }`
            }
          >
            Contact Me
          </NavLink>
        </div>

        
          <div className="flex items-center gap-5">
          <div className="hidden border-2 border-gray-400/30 rounded-full">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-9 h-9 flex items-center justify-center rounded-full 
              hover:bg-gray-200 dark:hover:bg-gray-800 
              transition-all duration-300 cursor-pointer"
              aria-label="Toggle theme"
            >
                {darkMode ? (
                  <IoSunny size={21} className="text-yellow-400" />
                ) : (
                  <IoMoon size={20} className="text-blue-700" />
                )}
             </button>
          </div>

        <div className="flex items-center gap-5">
          <div className="hidden md:block">
            <button className="bg-blue-700 text-white text-[10px] px-4 py-2 rounded-md hover:bg-blue-900 transition-colors duration-200 font-semibold">
              Download CV
            </button>
          </div>
        </div>

        <div className="hidden border-2 border-gray-400/30 rounded-full">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-9 h-9 flex items-center justify-center rounded-full 
              hover:bg-gray-200 dark:hover:bg-gray-800 
              transition-all duration-300 cursor-pointer"
              aria-label="Toggle theme"
            >
                {darkMode ? (
                  <IoSunny size={21} className="text-yellow-400" />
                ) : (
                  <IoMoon size={20} className="text-blue-700" />
                )}
             </button>
          </div>
      
<div className="md:hidden">
  <button
    onClick={() => setOpen(true)}
    className="hover:border hover:border-gray-700/10 hover:p-1 hover:rounded-md hover:bg-gray-700/10"
  >
    <SlMenu size={25} />
  </button>
</div>
        </div>


<AnimatePresence>
  {open && (
    <motion.div
      className="fixed inset-0 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 h-screen backdrop-blur-md"
        onClick={() => setOpen(false)}
      />

      {/* Drawer */}
      <motion.nav
        variants={drawerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="
          absolute right-0 top-0 h-screen
          w-2/4 sm:w-1/2
          bg-[#0B0F14]/25 backdrop-blur-md
          rounded-l-2xl
          flex flex-col
          border
          border-r-0
          border-b-0
          border-t-5
          border-blue-700
        "
      >
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 text-blue-700 hover:p-0.5 hover:rounded-full hover:bg-gray-700/35"
        >
          <IoMdClose size={34} />
        </button>

        {/* Links */}
        <ul className="flex flex-col gap-10 mt-24 px-6 text-lg font-semibold">
          <div className="flex flex-col gap-3">
            <NavLink to="/" className={({ isActive }) =>
              `
              ${isActive ? " border border-blue-700 border-l-5 rounded-md px-2" : "text-blue-700 hover:border-l-5 hover:border-l-gray-500/35 hover:bg-gray-700/35 hover:rounded-md hover:pl-2"
              }`
            }>
            Home
          </NavLink>

          <button
            onClick={() => {
              openProjectsModal();
              setOpen(false);
            }}
            
            className="text-left text-blue-700 text-blue-700 hover:border-l-5 hover:border-l-gray-500/35 hover:bg-gray-700/35 hover:rounded-md hover:pl-2 cursor-pointer"
          >
            Portfolio
          </button>

          <NavLink to="/about" className={({ isActive }) =>
              `
              ${isActive ? " border border-blue-700 border-l-5 rounded-md px-2" : "text-blue-700 text-blue-700 hover:border-l-5 hover:border-l-gray-500/35 hover:bg-gray-700/35 hover:rounded-md hover:pl-2"
              }`
            }>
            About Me
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) =>
              `
              ${isActive ? " border border-blue-700 border-l-5 rounded-md px-2" : "text-blue-700 text-blue-700 hover:border-l-5 hover:border-l-gray-500/35 hover:bg-gray-700/35 hover:rounded-md hover:pl-2"
              }`
            }>
            Contact Me
          </NavLink>
          </div>

          <div>
            <button className="bg-blue-700 w-full text-white px-4 py-2 rounded-md hover:bg-blue-900 transition-colors duration-200">
              Download CV
            </button>
        </div>
        </ul>
      </motion.nav>
    </motion.div>
  )}
</AnimatePresence>

      </nav>
    </div>
  );
}

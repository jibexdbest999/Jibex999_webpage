import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import NewLogo from "../assets/newLogo.png";
import { SlMenu } from "react-icons/sl";
import { IoMdClose } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

export default function NavBar({ openProjectsModal }) {
  const [open, setOpen] = useState(false);

  const location = useLocation();

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
      <nav className="flex fixed top-0 z-50 w-full h-20 lg:h-25 bg-linear-to-b from-[#000000] via-gray-800 to-gray-900 rounded-b-lg text-cyan-500 items-center px-4 sm:px-10 justify-between">
        <img className="w-50 lg:w-70 pt-4 ml-[-40px]" src={NewLogo} alt="Jibex999 logo" />

        <div className="hidden md:flex  sm:gap-15   font-semibold mr-5 ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:underline hover:text-red-600 hover:decoration-3 hover:underline-offset-10 transition-all duration-200 ${
                isActive ? " decoration-red-600" : "text-cyan-500"
              }`
            }
          >
            Home
          </NavLink>

          <button
            onClick={openProjectsModal}
            className="hover:underline hover:text-red-600 hover:decoration-3 hover:underline-offset-10 transition-all duration-200 text-cyan-500 font-semibold"
          >
            Portfolio
          </button>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:underline hover:text-red-600 hover:decoration-3 hover:underline-offset-10 transition-all duration-200 ${
                isActive ? " decoration-red-600" : "text-cyan-500"
              }`
            }
          >
            About Me
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:underline hover:text-red-600 hover:decoration-3 hover:underline-offset-10 transition-all duration-200 ${
                isActive ? " decoration-red-600" : "text-cyan-500"
              }`
            }
          >
            Contact Me
          </NavLink>
        </div>
      
<div className="md:hidden">
  <button
    onClick={() => setOpen(true)}
    className="hover:text-red-600"
  >
    <SlMenu size={40} />
  </button>
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
        className="absolute inset-0 bg-gray-900/80"
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
          absolute right-0 top-0 h-full
          w-2/4 sm:w-1/2
          bg-[#0B0F14]/70 backdrop-blur-md
          rounded-l-2xl
          flex flex-col
          border
          border-r-0
          border-b-0
          border-t-5
          border-cyan-500
        "
      >
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 text-cyan-500 hover:text-white hover:border-red-600 hover:p-0.5 hover:rounded-full hover:bg-red-600"
        >
          <IoMdClose size={34} />
        </button>

        {/* Links */}
        <ul className="flex flex-col gap-8 mt-24 px-6 text-lg font-semibold">
          <NavLink to="/" className={({ isActive }) =>
              `hover:text-red-600
              ${isActive ? " border border-cyan-600 border-l-5 rounded-md px-2" : "text-cyan-500"
              }`
            }>
            Home
          </NavLink>

          <button
            onClick={() => {
              openProjectsModal();
              setOpen(false);
            }}
            
            className="text-left text-cyan-500 hover:text-red-600"
          >
            Portfolio
          </button>

          <NavLink to="/about" className={({ isActive }) =>
              `hover:text-red-600
              ${isActive ? " border border-cyan-600 border-l-5 rounded-md px-2" : "text-cyan-500"
              }`
            }>
            About Me
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) =>
              `hover:text-red-600
              ${isActive ? " border border-cyan-600 border-l-5 rounded-md px-2" : "text-cyan-500"
              }`
            }>
            Contact Me
          </NavLink>
        </ul>
      </motion.nav>
    </motion.div>
  )}
</AnimatePresence>

      </nav>
    </div>
  );
}

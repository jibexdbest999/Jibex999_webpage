import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { IoMdClose } from "react-icons/io";

export default function EndsModal({ onClose }) {
    
  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center
                 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-[#0B0F14]/50 border-t-10 border-b border-r border-l border-cyan-600  rounded-xl px-8 py-10 w-[90%] max-w-md
                   animate-[scaleFade_0.25s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        <motion.button
          whileHover={{ scale: 1.1, rotate: 90 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={onClose}
          className="absolute top-4 right-4
                     w-9 h-9 flex items-center justify-center
                     rounded-full
                     text-cyan-600
                     hover:text-white
                     hover:bg-red-600
                     transition-colors"
        >
          <IoMdClose size={22} />
        </motion.button>

        <div className="flex flex-col gap-6 text-center mt-10">
          <Link 
            to="/frontendprojects"
            onClick={onClose}
            className="bg-green-800 hover:bg-green-900/50 py-2 rounded-lg text-white">
            Frontend Projects
          </Link>

          <Link 
            to="/fullstackprojects"
            onClick={onClose}
            className="bg-green-800 hover:bg-green-900/50 py-2 rounded-lg text-white">
            Full Stack Projects
          </Link>

        </div>
      </div>
    </div>
  )
}

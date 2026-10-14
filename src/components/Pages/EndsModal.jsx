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
        className="relative bg-[#0B0F14]/50 border-t-10 border-b-2 border-r-2 border-l-2 border-blue-700  rounded-xl px-8 py-10 w-[90%] max-w-md
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
                     text-blue-500
                     hover:text-red-500
                     hover:bg-gray-700/50
                     transition-colors"
        >
          <IoMdClose size={25} />
        </motion.button>

        <div className="flex flex-col gap-6 text-center mt-10">
          <Link 
            to="/soloprojects"
            onClick={onClose}
            className="bg-blue-700 hover:bg-blue-900/80 py-2 rounded-lg text-white font-semibold">
            Solo Projects
          </Link>

          <Link 
            to="/teamprojects"
            onClick={onClose}
            className="bg-blue-700 hover:bg-blue-900/50 py-2 rounded-lg text-white font-semibold">
            Team Projects
          </Link>

        </div>
      </div>
    </div>
  )
}

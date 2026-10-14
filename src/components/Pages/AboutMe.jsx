import React, { useState, useEffect } from 'react'
import Footer from '../Footer'
import { RingLoader } from 'react-spinners'
import MeClearBg from '../../assets/MeClearBg.png'
import { motion } from "motion/react"

export default function AboutMe() {
   const [pageIsLoading, setPageIsLoading] = useState(true)
      useEffect(()=>{
        const timer = setTimeout(() => setPageIsLoading(false), 1000)
        return () => clearTimeout(timer)
      }, [])

      if (pageIsLoading) return <div className='flex flex-col mx-auto items-center justify-center h-screen'>
      <RingLoader color="#1D4ED8" size={80} />
      <p className='text-lg lg:text-3xl pt-2 font-semibold text-blue-700'>Loading...</p>
    </div>

      const sectionVariant = {
  hidden: { opacity: 60, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
}

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

    return (
    <>
      <div className="min-h-screen pt-23 bg-white dark:bg-black transition-colors duration-300">
         {/* INTRO */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 text-center"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-blue-700 mb-2 tracking-[1px]">
          About Me
        </h1>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
          I’m <span className="text-blue-700 font-semibold">Ajibade Abduljalal O.</span>,  
          a frontend-focused developer who understands the full stack.
        </p>
      </motion.section>

       {/* WHAT I DO */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-3xl mx-auto px-4 mt-8"
      >
        <div className="flex flex-col md:flex-row items-center md:gap- lg:gap-14 mb-4">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4 tracking-[1px]">
              What I Actually Do
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-2 text-lg leading-relaxed tracking-[1px]">
              I build modern, responsive user interfaces that feel smooth, intentional,
              and usable. My strength is frontend, turning designs into clean,
              accessible, performant experiences - while still being comfortable
              working with backend logic, APIs, and databases when needed.
            </p>
          </div>

          <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
            <img src={ MeClearBg } alt="Ajibade Abduljalal" 
              className="
              w-[250px]
              sm:w-[280px]
              md:w-[320px]
              lg:w-[380px]
              xl:w-[430px]
              h-auto
              object-contain" 
            />
          </div>
        </div>

      </motion.section>

    {/* TECH STACK */}
    <motion.section
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="max-w-4xl mx-auto mb-10"
    >
      <motion.h2
        variants={itemVariant}
        className="text-2xl text-blue-700 font-semibold mb-5 text-center px-2 "
      >
        Building Fast, Modern Web Experiences Using:
      </motion.h2>

      <div className="grid sm:grid-cols-2 gap-6 font-semibold">
        {[
          "React.js",
          "JavaScript (ES6+)",
          "Tailwind CSS",
          "Node.js & Express",
          "MongoDB",
          "REST APIs",
        ].map((tech) => (
          <motion.div
            key={tech}
            variants={itemVariant}
            className="bg-gray-100 dark:bg-[#0B0F14]
              mx-auto w-75 rounded-lg px-6 py-4 text-center
              text-gray-900 dark:text-gray-200 border-2 border-blue-700
              transition-colors duration-300"
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </motion.section>

        {/* HOW I WORK */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-4xl mx-auto px-4"
      >
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
          How I Approach Projects
        </h2>

        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-lg space-y-2">
          <li>Start with clarity: what problem are we solving?</li>
          <li>Build clean UI first, wire logic properly</li>
          <li>Write readable, maintainable code</li>
          <li>Iterate fast, polish intentionally</li>
        </ul>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="max-w-4xl mx-auto px-4 mt-10 text-center mb-5"
      >
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          I’m always improving, always building, and always open to opportunities
          that push me forward.
        </p>
      </motion.section>

      <Footer/>
      </div>
       
    </>
  )
}

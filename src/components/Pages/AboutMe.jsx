import React, { useState, useEffect } from 'react'
import Footer from '../Footer'
import { RingLoader } from 'react-spinners'
import { motion } from "motion/react"

export default function AboutMe() {
   const [pageIsLoading, setPageIsLoading] = useState(true)
      useEffect(()=>{
        const timer = setTimeout(() => setPageIsLoading(false), 1000)
        return () => clearTimeout(timer)
      }, [])

      if (pageIsLoading) return <div className='flex flex-col mx-auto items-center justify-center h-screen'>
      <RingLoader color="#0360ff" size={80} />
      <p className='text-lg lg:text-3xl pt-2 font-semibold text-cyan-600'>Loading...</p>
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
      <div className="min-h-screen pt-28 text-gray-300">
         {/* INTRO */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 text-center"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
          About Me
        </h1>

        <p className="text-lg md:text-xl text-gray-400">
          I’m <span className="text-cyan-500 font-semibold">Ajibade Abduljalal O.</span>,  
          a frontend-focused developer who understands the full stack.
        </p>
      </motion.section>

       {/* WHAT I DO */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-4xl mx-auto px-4 mt-5"
      >
        <h2 className="text-2xl font-bold text-white mb-4">
          What I Actually Do
        </h2>

         <p className="text-gray-400 leading-relaxed mb-2">
          I build modern, responsive user interfaces that feel smooth, intentional,
          and usable. My strength is frontend, turning designs into clean,
          accessible, performant experiences - while still being comfortable
          working with backend logic, APIs, and databases when needed.
        </p>
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
        className="text-2xl font-semibold mb-5 text-center"
      >
        Building Fast, Modern Web Experiences Using:
      </motion.h2>

      <div className="grid sm:grid-cols-2 gap-6">
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
            className="bg-white/5 mx-auto w-75 rounded-lg px-6 py-4 text-center border border-cyan-500"
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
        <h2 className="text-2xl font-bold text-white mb-4">
          How I Approach Projects
        </h2>

        <ul className="list-disc list-inside text-gray-400 space-y-2">
          <li>Start with clarity: what problem are we solving?</li>
          <li>Build clean UI first, then wire logic properly</li>
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
        <p className="text-gray-400">
          I’m always improving, always building, and always open to opportunities
          that push me forward.
        </p>
      </motion.section>

      <Footer/>
      </div>
       
    </>
  )
}

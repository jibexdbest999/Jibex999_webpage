import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import Footer from "../Footer";
import { RingLoader } from "react-spinners";
import { FiMail, FiGithub } from "react-icons/fi";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function ContactMe() {
  const [pageIsLoading, setPageIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setPageIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (pageIsLoading)
    return (
      <div className="flex flex-col mx-auto items-center justify-center h-screen">
        <RingLoader color="#0360ff" size={80} />
        <p className="text-lg lg:text-3xl pt-2 font-semibold text-cyan-600">
          Loading...
        </p>
      </div>
    );

  return (
    <div className="min-h-screen pt-32 px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Let’s work together
        </h1>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          I’m open to internships, junior roles, freelance work, and
          collaborations. Got something in mind? Let’s talk.
        </p>
      </motion.div>

      {/* Contact Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="max-w-3xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10"
      >
        {/* Email */}
        <motion.a
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          href="mailto:jibexdbest356@gmail.com"
          className="bg-[#0B0F14]/60 border border-cyan-600/40 rounded-xl p-6
                     hover:border-cyan-600 hover:bg-[#0B0F14]
                     transition group"
        >
          <FiMail className="text-cyan-500 text-2xl mb-3 group-hover:scale-110 transition" />
          <h3 className="text-white font-semibold">Email</h3>
          <p className="text-gray-400 text-sm">jibexdbest356@gmail.com</p>
        </motion.a>

        {/* GitHub */}
        <motion.a
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="bg-[#0B0F14]/60 border border-cyan-600/40 rounded-xl p-6
                     hover:border-cyan-600 hover:bg-[#0B0F14]
                     transition group"
        >
          <FiGithub className="text-cyan-500 text-2xl mb-3 group-hover:scale-110 transition" />
          <h3 className="text-white font-semibold">GitHub</h3>
          <p className="text-gray-400 text-sm">jibexdbest999</p>
        </motion.a>
       

        <motion.a
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          href="https://www.tiktok.com/@jibex999_webdeveloper?"
          rel="noreferrer"
          className="bg-[#0B0F14]/60 border border-cyan-600/40 rounded-xl p-6
                     hover:border-cyan-600 hover:bg-[#0B0F14]
                     transition group"
        >
          <FaTiktok  className="text-cyan-500 text-2xl mb-3 group-hover:scale-110 transition" />
          <h3 className="text-white font-semibold">Tiktok</h3>
          <p className="text-gray-400 text-sm">jibex999_webdeveloper</p>
        </motion.a>

        <motion.a
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          href="https://wa.me/+2349126362551"
          rel="noreferrer"
          className="bg-[#0B0F14]/60 border border-cyan-600/40 rounded-xl p-6
                     hover:border-cyan-600 hover:bg-[#0B0F14]
                     transition group"
        >
          <FaWhatsapp className="text-cyan-500 text-2xl mb-3 group-hover:scale-110 transition" />
          <h3 className="text-white font-semibold">Whatsapp</h3>
          <p className="text-gray-400 text-sm">+234 912 636 2551</p>
        </motion.a>

      </motion.div>

      <Footer />
    </div>
  );
}

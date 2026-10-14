import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import SparkLayer from './SparkLayer';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade"

const slides = [
  { title: "Hello 2026", subtitle: "New year. New builds." },
  {title: "The Future Is Here", subtitle: "No more waiting. No more stopping."},
  { title: "Crafting modern web experiences", subtitle: "Design. Code. Performance." },
  { title: "Focused on what's next", subtitle: "Let's build something great." },
  { title: "Building Scalable Web Experiences", subtitle: "Modern frontend, solid backend & neat resolutions." },
  { title: "Where Design Meets Logic", subtitle: "Beautiful interfaces powered by Jibex999_web3." },
  { title: "I Design. I Build. I Code.", subtitle: "End-to-end web solutions that actually work." },
  { title: "Code With Intent", subtitle: "Less noise. More impact." },
];


export default function HeroSlider() {

  return (
     <div className="relative w-full rounded-[35px] h-[300px] sm:h-[350px] md:h-[370px] lg:h-[390px] xl:h-[400px] overflow-hidden">
      {/* GLOBAL SPARKLES */}
      <SparkLayer />

      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect='fade'
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        speed={800}
        autoplay={{ 
          delay: 2000, 
          disableOnInteraction: false 
        }}
      //  { pagination={{ clickable: false }}}
        loop
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.title} className="h-full">
            <div className="h-full flex items-center justify-center text-center text-white bg-black/70 px-5">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <h1 className="text-[22px] md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-glow">
                  {slide.title}
                </h1>
                <p className="text-sm md:text-[15px] lg:text-2xl mt-2 text-glow">
                  {slide.subtitle}
                </p>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}


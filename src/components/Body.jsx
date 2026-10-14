import React from "react";
import newDp from "../assets/newDp.jpeg";
import { IoLocationOutline } from "react-icons/io5";


export default function Body({ openProjectsModal }) {
  
  return (
    <div className='w-full h-full flex flex-col justify-center px-6 md:px-10 lg:px-12 xl:px-10'>
      
      <div >
        <div className="flex items-end gap-2">
          <img
          className="w-20 rounded-full my-1 border-2 p-1 border-blue-700 "
          src={newDp}
          alt="profile"
        />
        <h1 className="font-extrabold text-gray-900 dark:text-gray-300 text-[30px] md:text-[50px] font-[cursive] tracking-[1px]">
          Hello!
        </h1>
        </div>

        <h2 className="font-medium text-[25px] text-gray-900 dark:text-gray-300 md:text-3xl">
          {" "}
          I'm{" "}
          <span className="text-blue-700 font-bold text-[25px]">Ajibade Abduljalal O.</span>
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mt-1 leading-relaxed max-w-xl">
          An aspiring frontend and backend (Full stack) web developer, Building
          modern web experiences, I'm turning ideas into products (Design. Code.
          Deploy.) from frontend to backend logic.
        </p>
      </div>

      <div className="mt-4 flex justify-start">
        <button 
          onClick={openProjectsModal}
          className="bg-blue-700 hover:bg-blue-900 px-6 py-2 rounded-[10px] font-semibold text-white transition cursor-pointer ">
          View My Portfolio
        </button>
      </div>

      <div className="mt-3">

  {/* Location */}
  <p className="flex items-center gap-1 text-gray-700 dark:text-gray-300">
    <span>
      <IoLocationOutline />
    </span>

    <span className="text-[15px]">
      Lagos, Nigeria · West Africa Time (UTC+1)
    </span>
  </p>

  {/* Availability */}
  <div className="flex items-center gap-2 mt-2">
    
    <span className="relative flex h-3 w-3">
      
      {/* Pulsing glow */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>

      {/* Main dot */}
      <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500 shadow-[0_0_10px_3px_rgba(34,197,94,0.35)]"></span>

    </span>

    <p className="text-gray-700 dark:text-gray-300 text-[15px]">
      Available for new projects
    </p>

  </div>

</div>
      
    </div>
  );
}

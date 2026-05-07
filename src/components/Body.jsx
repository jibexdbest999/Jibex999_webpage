import React from "react";
import newDp from "../assets/newDp.jpeg";


export default function Body({ openProjectsModal }) {
  
  return (
    <div>
      
      <div className="text-center text-gray-300 mx-auto px-1.5 md:px-25 lg:px-90 ">
        <img
          className="mx-auto w-30 rounded-full my-3 border-3 border-cyan-600 "
          src={newDp}
          alt="profilePic"
        />
        <h1 className="font-extrabold text-gray-300 text-[30px] md:text-[50px] font-[cursive]">
          Hello!
        </h1>
        <h2 className="font-medium text-[25px]  md:text-3xl">
          {" "}
          I'm{" "}
          <span className="text-cyan-500 font-bold">Ajibade Abduljalal O.</span>
        </h2>
        <p>
          An aspiring frontend and backend (Full stack) web developer, Building
          modern web experiences, I'm turning ideas into products (Design. Code.
          Deploy.) from frontend to backend logic.
        </p>
      </div>

      <div className="my-5 flex justify-center">
        <button 
          onClick={openProjectsModal}
          className="bg-cyan-600 hover:bg-cyan-700/50 px-6 py-2 rounded-full font-semibold text-white transition cursor-pointer ">
          View My Portfolio
        </button>
      </div>
      
    </div>
  );
}

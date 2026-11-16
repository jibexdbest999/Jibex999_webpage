import React, { useState } from 'react'
import TaskDutyDp from "./../assets/TaskDutyDp (2).png";
import StudentLoginDp from "./../assets/StudentLoginDp.png";
import DigitalBankDp from "./../assets/DigitalBankDp.png";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa6";
import { TbCopy } from "react-icons/tb";
import { IoMdCheckmark } from "react-icons/io";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { IoReturnUpForward } from "react-icons/io5";

const projectsView = [
  {
    title: "TaskDuty Page",
    image: TaskDutyDp,
    link: "https://task-duty-page.vercel.app/",
  },

  {
    title: "Student Login Page",
    image: StudentLoginDp,
    link: "https://student-login-page-theta.vercel.app/",
  },

  {
    title: "Digital Bank Page",
    image: DigitalBankDp,
    link: "https://digital-bank-page.vercel.app/",
  },
];

export const PortPreview = ({ openProjectsModal }) => {

  const [copied, setCopied] = useState("");
  
    const copyProjectLink = async (link) => {
      try {
        await navigator.clipboard.writeText(link);
  
        setCopied(link);
  
        setTimeout(() => {
          setCopied("");
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    };
  
    const shareProject = async (project) => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: project.title,
          text: `Check out this project: ${project.title}`,
          url: project.link,
        });
      } else {
        await navigator.clipboard.writeText(project.link);
        alert("Sharing not supported. Link copied instead.");
      }
        } catch (error) {
        console.log(error);
        }
    };

  return (
    <div className='border-t border-gray-200 w-full min-w-0 overflow-hidden'>
        <div className='flex flex-col gap-1 mx-5 my-3 lg:ml-10 min-w-0'>
            <p className='text-white bg-gray-600/40 backdrop-blur-xl rounded-full w-fit mx-auto px-5 py-1 font-semibold shadow-[0_5px_12px_rgba(29,78,216,0.50)] my-1'>Portfolio</p>

              <div className="portfolio-scroll flex flex-nowrap gap-5 md:gap-x-10 my-5 w-full min-w-0 overflow-x-auto pb-4">
                      {projectsView.map((project, index) => (
                        <div
                          key={index}
                          className="flex flex-col shrink-0 w-[280px] md:w-[calc((100%-5rem)/3)] bg-gray-50 dark:bg-[#0B0F14]/50
                            border-t-5 border-b-5 border-blue-700 rounded-md px-5 py-5
                            transition-colors duration-300"
                        >
                          <div className="flex flex-col items-center">
                            <img src={project.image} alt={project.title} />
            
                            <h2 className="font-semibold text-[15px] md:text-2xl mb-2 md:mb-3 mt-[-25px] text-gray-800 dark:text-gray-300">
                              {project.title}
                            </h2>
            
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-blue-700 hover:bg-blue-900 rounded-full px-5 py-1.5 font-semibold cursor-pointer w-full max-w-55 text-center text-gray-100"
                            >
                              Visit Webpage
                            </a>
                          </div>
            
                          <div className="flex gap-1 md:gap-2 pt-2 ml-2 items-center">
                            <button className="cursor-pointer hover:bg-gray-700/50 hover:p-1 p-1 hover:rounded-full text-blue-700">
                              <AiOutlineLike size={16.5} />
                            </button>
            
                            <button className="cursor-pointer hover:bg-gray-700/50 hover:p-1 p-1 hover:rounded-full text-blue-700">
                              <FaRegHeart size={14} />
                            </button>
            
                            <button className="cursor-pointer hover:bg-gray-700/50 hover:p-1 p-1 hover:rounded-full text-blue-700">
                              <AiOutlineDislike size={16.5} />
                            </button>
            
                            <button
                              onClick={() => copyProjectLink(project.link)}
                              className="cursor-pointer hover:bg-gray-700/50 hover:p-1 p-1 hover:rounded-full text-blue-700"
                            >
                              {copied === project.link ? (
                                <IoMdCheckmark size={18} className="text-cyan-500" />
                              ) : (
                                <TbCopy size={15} />
                              )}
                            </button>
            
                            <button
                              onClick={() => shareProject(project)}
                              className="cursor-pointer hover:bg-gray-700/50 hover:p-1 p-1 hover:rounded-full text-blue-700"
                            >
                              <FaRegShareFromSquare size={15} />
                            </button>
                          </div>
            
                          {copied === project.link && (
                            <p className="text-green-400 font-semibold text-sm mt-2 ml-2">Link copied!</p>
                          )}
                        </div>
                      ))}
                      <button
                        onClick={openProjectsModal}
                        className="flex flex-col items-center justify-center gap-2 shrink-0 self-center min-w-[120px] h-[150px] text-blue-700 font-semibold hover:bg-gray-500/20 rounded-xl transition-all duration-300 cursor-pointer"
                      >
                          <span>See more</span>
                          <IoReturnUpForward size={25} />
                      </button>
                    </div>
        </div>
    </div>
  )
}

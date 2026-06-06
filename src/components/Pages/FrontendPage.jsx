import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RingLoader } from "react-spinners";
import Footer from "../Footer";
import HuddlePageDp from "../../assets/HuddlePageDp.png";
import TaskDutyDp from "../../assets/TaskDutyDp (2).png";
import StudentLoginDp from "../../assets/StudentLoginDp.png";
import DigitalBankDp from "../../assets/DigitalBankDp.png";
import SocialInfoDp from "../../assets/SocialInfoDp.png";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa6";
import { TbCopy } from "react-icons/tb";
import { IoMdCheckmark } from "react-icons/io";
import { FaRegShareFromSquare } from "react-icons/fa6";

const frontendProjects = [
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

  {
    title: "Huddle Landing Page",
    image: HuddlePageDp,
    link: "https://huddle-page1-xi.vercel.app/",
  },

  {
    title: "Social Info Page",
    image: SocialInfoDp,
    link: "https://social-info-page.vercel.app/",
  },
];

export default function FrontendPage() {
  const [pageIsLoading, setPageIsLoading] = useState(true);
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

  useEffect(() => {
    const timer = setTimeout(() => setPageIsLoading(false), 1000);
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
    <div>
      <div className="text-white mt-28 mx-5 py-5 px-5">
        <h1 className="text-center text-3xl font-semibold">
          Frontend Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-x-10 my-5 ">
          {frontendProjects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col border-t-5 border-b-5 border-gray-800 rounded-md px-5 py-5"
            >
              <div className="flex flex-col items-center">
                <img src={project.image} alt={project.title} />

                <h2 className="font-semibold text-[15px] md:text-2xl mb-2 md:mb-3 mt-[-25px]">
                  {project.title}
                </h2>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-500 hover:bg-cyan-500/40 rounded-full px-5 py-1.5 font-semibold cursor-pointer w-55 text-center"
                >
                  Visit Webpage
                </a>
              </div>

              <div className="flex gap-1 md:gap-2 pt-2 ml-2 items-center">
                <button className="cursor-pointer hover:bg-gray-500 hover:p-1 p-1 hover:rounded-full">
                  <AiOutlineLike size={16.5} />
                </button>

                <button className="cursor-pointer hover:bg-gray-500 hover:p-1 p-1 hover:rounded-full">
                  <FaRegHeart size={14} />
                </button>

                <button className="cursor-pointer hover:bg-gray-500 hover:p-1 p-1 hover:rounded-full">
                  <AiOutlineDislike size={16.5} />
                </button>

                <button
                  onClick={() => copyProjectLink(project.link)}
                  className="cursor-pointer hover:bg-gray-500 hover:p-1 p-1 hover:rounded-full"
                >
                  {copied === project.link ? (
                    <IoMdCheckmark size={18} className="text-cyan-500" />
                  ) : (
                    <TbCopy size={15} />
                  )}
                </button>

                <button
                  onClick={() => shareProject(project)}
                  className="cursor-pointer hover:bg-gray-500 hover:p-1 p-1 hover:rounded-full"
                >
                  <FaRegShareFromSquare size={15} />
                </button>
              </div>

              {copied === project.link && (
                <p className="text-green-400 text-sm mt-2 ml-2">Link copied!</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

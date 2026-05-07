import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { RingLoader } from 'react-spinners'
import Footer from "../Footer"
import HuddlePageDp from "../../assets/HuddlePageDp.png"
import TaskDutyDp from "../../assets/TaskDutyDp (2).png"
import StudentLoginDp from "../../assets/StudentLoginDp.png"
import DigitalBankDp from "../../assets/DigitalBankDp.png"
import SocialInfoDp from "../../assets/SocialInfoDp.png"
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa6";
import { TbCopy } from "react-icons/tb";
import { FaRegShareFromSquare } from "react-icons/fa6";



export default function FrontendPage() {
  const [pageIsLoading, setPageIsLoading] = useState(true)
        useEffect(()=>{
          const timer = setTimeout(() => setPageIsLoading(false), 1000)
          return () => clearTimeout(timer)
        }, [])
  
        if (pageIsLoading) return <div className='flex flex-col mx-auto items-center justify-center h-screen'>
        <RingLoader color="#0360ff" size={80} />
        <p className='text-lg lg:text-3xl pt-2 font-semibold text-cyan-600'>Loading...</p>
      </div>

  return (
    <div>
      <div className='text-white mt-28 mx-5 py-5 px-5'>
        <h1 className='text-center text-3xl font-semibold'>Frontend Projects</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-x-10 my-5 '>

          <div className='flex flex-col border-t-5 border-b-5 border-gray-800 rounded-md px-5 py-3'>
            <div className='flex flex-col items-center'>
              <img src={TaskDutyDp} alt="" />
            <h2 className='font-semibold text-[15px] md:text-2xl mb-2 md:mb-3 mt-[-25px]'>TaskDuty Page</h2>
            <Link to="https://task-duty-page.vercel.app/" className='bg-cyan-500 hover:bg-cyan-500/40 rounded-full px-5 py-1.5 font-semibold cursor-pointer w-55 text-center'>Explore Project</Link>
            </div>
            <div className='flex gap-2.5 pt-2 ml-2'>
            <button className='cursor-pointer'><AiOutlineLike size={16.5}/></button>
            <button className='cursor-pointer'><FaRegHeart size={14}/></button>
            <button className='cursor-pointer'><AiOutlineDislike size={16.5}/></button> 
            <button className='cursor-pointer'><TbCopy size={15}/></button>
            <button className='cursor-pointer'><FaRegShareFromSquare size={15}/></button>
            </div>
          </div>

          <div className='flex flex-col border-t-5 border-b-5 border-gray-800 rounded-md px-5 py-3 '>
            <div className='flex flex-col items-center'>
              <img src={StudentLoginDp} alt="" />
            <h2 className='font-semibold text-[15px] md:text-2xl mb-2 md:mb-3 mt-[-25px]'>Student Login Page</h2>
            <Link to="https://student-login-page-theta.vercel.app/" className='bg-cyan-500 hover:bg-cyan-500/40 rounded-full px-5 py-1.5 font-semibold cursor-pointer w-55 text-center'>Explore Project</Link>
            </div>
          <div className='flex gap-2.5 pt-2 ml-2'>
            <button className='cursor-pointer'><AiOutlineLike size={16.5}/></button>
            <button className='cursor-pointer'><FaRegHeart size={14}/></button>
            <button className='cursor-pointer'><AiOutlineDislike size={16.5}/></button> 
            <button className='cursor-pointer'><TbCopy size={15}/></button>
            <button className='cursor-pointer'><FaRegShareFromSquare size={15}/></button>
            </div>
          </div>

          <div className='flex flex-col border-t-5 border-b-5 border-gray-800 rounded-md px-5 py-5'>
            <div className='flex flex-col items-center'>
              <img src={DigitalBankDp} alt="" />
              <h2 className='font-semibold text-[15px] md:text-2xl mb-2 md:mb-3 mt-[-25px]'>Digital Bank Page</h2>
              <Link to="https://digital-bank-page.vercel.app/" className='bg-cyan-500 hover:bg-cyan-500/40 rounded-full px-5 py-1.5 font-semibold cursor-pointer w-55 text-center'>Explore Project</Link>
            </div>
            <div className='flex gap-2.5 pt-2 ml-2'>
            <button className='cursor-pointer'><AiOutlineLike size={16.5}/></button>
            <button className='cursor-pointer'><FaRegHeart size={14}/></button>
            <button className='cursor-pointer'><AiOutlineDislike size={16.5}/></button> 
            <button className='cursor-pointer'><TbCopy size={15}/></button>
            <button className='cursor-pointer'><FaRegShareFromSquare size={15}/></button>
            </div>
          </div>

          <div className='flex flex-col border-t-5 border-b-5 border-gray-800 rounded-md px-5 pt-5 pb-2 '>
            <div className='flex flex-col items-center'>
              <img src={HuddlePageDp} alt="" />
            <h2 className='font-semibold text-[15px] md:text-2xl mb-2 md:mb-3 mt-[-25px]'>Huddle Landing Page</h2>
            <Link to="https://huddle-page1-xi.vercel.app/" className='bg-cyan-500 hover:bg-cyan-500/40 rounded-full px-5 py-1.5 font-semibold cursor-pointer w-55 text-center'>Explore Project</Link>
            </div>
          <div className='flex gap-2.5 pt-2 ml-2'>
            <button className='cursor-pointer'><AiOutlineLike size={16.5}/></button>
            <button className='cursor-pointer'><FaRegHeart size={14}/></button>
            <button className='cursor-pointer'><AiOutlineDislike size={16.5}/></button> 
            <button className='cursor-pointer'><TbCopy size={15}/></button>
            <button className='cursor-pointer'><FaRegShareFromSquare size={15}/></button>
            </div>
          </div>

          <div className='flex flex-col border-t-5 border-b-5 border-gray-800 rounded-md px-5 py-5'>
            <div className='flex flex-col items-center'>
              <img src={SocialInfoDp} alt="" />
            <h2 className='font-semibold text-[15px] md:text-2xl mb-2 md:mb-3 mt-[-25px]'>Social Info Page</h2>
            <Link to="https://social-info-page.vercel.app/" className='bg-cyan-500 hover:bg-cyan-500/40 rounded-full px-5 py-1.5 font-semibold cursor-pointer w-55 text-center'>Explore Project</Link>
            </div>
            <div className='flex gap-2.5 pt-2 ml-2'>
            <button className='cursor-pointer'><AiOutlineLike size={16.5}/></button>
            <button className='cursor-pointer'><FaRegHeart size={14}/></button>
            <button className='cursor-pointer'><AiOutlineDislike size={16.5}/></button> 
            <button className='cursor-pointer'><TbCopy size={15}/></button>
            <button className='cursor-pointer'><FaRegShareFromSquare size={15}/></button>
            </div>
          </div>
          
        </div>

    </div>

      <Footer/>
    </div>


  )
}

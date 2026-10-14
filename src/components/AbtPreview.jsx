import React from 'react'
import { Link } from 'react-router-dom'

export const AbtPreview = () => {
  return (
    <div className='border-t-1 border-gray-200'>
        <div className='flex flex-col gap-1 mx-5 my-3 lg:ml-10'>
            <p className='text-white bg-gray-600/40 backdrop-blur-xl rounded-full w-fit mx-auto px-5 py-1 font-semibold shadow-[0_5px_12px_rgba(29,78,216,0.50)] my-1'>About me</p>
            <div className='flex flex-col gap-1 text-gray-700 dark:text-gray-300 leading-relaxed tracking-[1px]'>
                <h1>I'm a frontend-focused developer who understands the full stack.</h1>
                <p>I build modern, responsive user interfaces that feel smooth, intentional, and usable. My strength is frontend, turning designs into clean, accessible, performant experiences - while still being comfortable working with backend logic, APIs, and databases when needed.</p>
                <p className='font-bold text-[15px]'>Building Fast, Modern Web Experiences Using:</p>
            </div>
            <Link
                to='/about'
                className=' text-blue-700 font-medium hover:bg-gray-500/20 hover:rounded-full hover:px-2 hover:pb-1 text-[15px] hover:text-[14px] w-fit '>
                    See more...
            </Link>
        </div>
    </div>
  )
}

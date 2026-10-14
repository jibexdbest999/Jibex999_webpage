import React from 'react'
import { Link } from 'react-router-dom'

export const ContPreview = () => {
  return (
    <div className='border-t-1 border-gray-200'>
        <div className='flex flex-col gap-1 mx-5 my-3 lg:ml-10'>
                    <p className='text-white bg-gray-600/40 backdrop-blur-xl rounded-full w-fit mx-auto px-5 py-1 font-semibold shadow-[0_5px_12px_rgba(29,78,216,0.50)] my-1'>Contact me</p>
                    <div className='flex flex-col gap-1 text-gray-700 leading-relaxed'>
                        <h1 className='font-bold text-[18px] md:text-[20px] text-blue-700 tracking-[2px]'>Let’s work together!</h1>
                        <div className='leading-[27px] tracking-[1px] md:leading-[30px] text-gray-700 dark:text-gray-300'>
                          <p>I’m open to internships, junior roles, freelance work, and collaborations.</p>
                          <p>In case it gets to a point where you will be needing a standard website for your brand, business, organisation or enterprise, kindly <Link
                            to='/contact'
                            className=' text-blue-700 font-medium hover:bg-gray-500/20 hover:rounded-full hover:px-2 hover:pb-1 text-[15px] hover:text-[14px] w-fit '>
                              See more...
                            </Link> 
                          </p>
                        </div>
                    </div>
                    
                </div>
    </div>
  )
}

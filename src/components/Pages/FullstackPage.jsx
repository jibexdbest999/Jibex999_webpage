import React, { useState, useEffect } from "react";
import { RingLoader } from "react-spinners";
import { BsHourglassSplit } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function FullstackPage() {
  const [pageIsLoading, setPageIsLoading] = useState(true);

  useEffect(() => {
      const timer = setTimeout(() => setPageIsLoading(false), 1000);
      return () => clearTimeout(timer);
    }, []);
  
    if (pageIsLoading)
      return (
        <div className="flex flex-col mx-auto items-center justify-center h-screen">
          <RingLoader color="#0360ff" size={80} />
          <p className="text-lg lg:text-3xl pt-2 font-semibold text-blue-700">
            Loading...
          </p>
        </div>
      );
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen  leading-[25px]">
        <div className="flex items-center gap-2 p-6 rounded">
          <span 
            className="text-gray-600"
          >
            <BsHourglassSplit size={50}/>
          </span>
            <div className="text-gray-600">
              <h1 className="text-[25px] font-medium">Ooopps!</h1>
              <p className="text-[12px] md:text-[15px] lg:text-[18px] font-semibold">This page is under construction, check back later...</p>
            </div>
        </div>
        <Link to="/" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
          Go To Home
        </Link>
      </div>
    </div>
      
  );
}

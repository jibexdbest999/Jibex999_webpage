import React from "react";
import { AiFillWarning } from "react-icons/ai";

export default function FullstackPage() {
  return (
    <div className="w-fit container mx-auto ">
      <div className="border border-gray-500 mt-28 flex items-center">
        <span className="text-gray-600"><AiFillWarning size={50}/></span>
        <div className="text-gray-600">
          <h1 className="text-[25px] font-medium">Ooopps!</h1>
          <p className="text-[15px]">This page is under contrustion, check back later...</p>
        </div>
      </div>
      
    </div>
  );
}

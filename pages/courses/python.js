import Image from "next/image";
import React from "react";

function Python() {
  const pro = "/pro.jpg";
  return (
    <div className="bg-white">
      <div className="relative h-60 w-full">
        <Image
          src={pro}
          objectFit="cover"
          className="rounded-md"
          layout="fill"
        />
      </div>
      <div className="flex items-center justify-between w-full px-4 my-4 bg-orange-50 py-3 shadow-sm">
        <div className="text-gray-800 font-semibold">Python Programming</div>
        <div className="text-orange-600 font-medium text-md">NGN 10,000</div>
      </div>
      <div className="text-gray-900 text-lg text-center">Course Content</div>
      <ul className="px-4 py-4">
       
        <li className="p-3 bg-gray-50 mb-3 shadow-sm rounded-sm text-gray-700 text-md">
        Python Introduction
        </li>
        <li className="p-3 bg-gray-50 mb-3 shadow-sm rounded-sm text-gray-700 text-md">
        Python Variables
        </li>
        <li className="p-3 bg-gray-50 mb-3 shadow-sm rounded-sm text-gray-700 text-md">
        Python Functions
        </li>
        <li className="p-3 bg-gray-50 mb-3 shadow-sm rounded-sm text-gray-700 text-md">
        For Loops, Python Switch, and Array Methods
        </li>
        <li className="p-3 bg-gray-50 mb-3 shadow-sm rounded-sm text-gray-700 text-md">
        Object and Classes
        </li>
        <li className="p-3 bg-gray-50 mb-3 shadow-sm rounded-sm text-gray-700 text-md">
        Building a simple application with PyQt
        </li>
        <li className="p-3 bg-gray-50 mb-3 shadow-sm rounded-sm text-gray-700 text-md">
        Final Project
        </li>
        <li className="p-3 bg-gray-50 mb-3 shadow-sm rounded-sm text-gray-700 text-md">
        Certification
        </li>
      </ul>
    </div>
  );
}

export default Python;

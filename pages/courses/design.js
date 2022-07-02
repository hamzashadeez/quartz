import Image from "next/image";
import React from "react";

function Design() {
    const graphic = "/graphic.jpg";
  return (
    <div className="bg-white">
      <div className="relative h-60 w-full">
        <Image
          src={graphic}
          objectFit="cover"
          className="rounded-md"
          layout="fill"
        />
      </div>
      <div className="flex items-center justify-between w-full px-4 my-4 bg-orange-50 py-3 shadow-sm">
        <div className="text-gray-800 font-semibold">Graphic Design</div>
        <div className="text-orange-600 font-medium text-md">NGN 10,000</div>
      </div>
      <div className="text-gray-900 text-lg text-center">Course Content</div>
      <ul className="px-4 py-4">
       
        <li className="p-3 bg-gray-50 mb-3 shadow-sm rounded-sm text-gray-700 text-md">
        Introduction to Modern Graphic Design
        </li>
        <li className="p-3 bg-gray-50 mb-3 shadow-sm rounded-sm text-gray-700 text-md">
        Design Building Blocks Essentials
        </li>
        <li className="p-3 bg-gray-50 mb-3 shadow-sm rounded-sm text-gray-700 text-md">
        All About Typography
        </li>
        <li className="p-3 bg-gray-50 mb-3 shadow-sm rounded-sm text-gray-700 text-md">
        Colour and Colour Theory
        </li>
        <li className="p-3 bg-gray-50 mb-3 shadow-sm rounded-sm text-gray-700 text-md">
        Adverts, Publications, Photography and Visual Identity
        </li>
        <li className="p-3 bg-gray-50 mb-3 shadow-sm rounded-sm text-gray-700 text-md">
        Layout Design
        </li>
        <li className="p-3 bg-gray-50 mb-3 shadow-sm rounded-sm text-gray-700 text-md">
        Graphics Enhancement and Systems
        </li>
        <li className="p-3 bg-gray-50 mb-3 shadow-sm rounded-sm text-gray-700 text-md">
        Preparing your Portfolio and Course Consolidation
        </li>
        <li className="p-3 bg-gray-50 mb-3 shadow-sm rounded-sm text-gray-700 text-md">
        Certification
        </li>
      </ul>
    </div>
  );
}

export default Design;

import Image from "next/image";
import React from "react";

function Web() {
  const web = "/web.jpg";
  return (
    <div className="bg-white">
      <div className="relative h-60 w-full">
        <Image
          src={web}
          objectFit="cover"
          className="rounded-md"
          layout="fill"
        />
      </div>
      <div className="flex items-center justify-between w-full px-4 my-4 bg-orange-50 py-3 shadow-sm">
        <div className="text-gray-800 font-semibold">Web Development</div>
        <div className="text-orange-600 font-medium text-md">NGN 10,000</div>
      </div>
      <div className="text-gray-900 text-lg text-center">Course Content</div>
      <ul className="px-4 py-4">
        <li className="p-3 bg-gray-50 mb-3 shadow-sm rounded-sm text-gray-700 text-md">
          Introduction
        </li>
        <li className="p-3 bg-gray-50 mb-3 shadow-sm rounded-sm text-gray-700 text-md">
          HTML Headings
        </li>

        <li className="p-3 bg-gray-50 mb-3 shadow-sm rounded-sm text-gray-700 text-md">
        HTML Paragraphs
        </li>

        <li className="p-3 bg-gray-50 mb-3 shadow-sm rounded-sm text-gray-700 text-md">
          HTML Formatings
        </li>

        <li className="p-3 bg-gray-50 mb-3 shadow-sm rounded-sm text-gray-700 text-md">
          HTML Color
        </li>

        <li className="p-3 bg-gray-50 mb-3 shadow-sm rounded-sm text-gray-700 text-md">
          HTML Images
        </li>

        <li className="p-3 bg-gray-50 mb-3 shadow-sm rounded-sm text-gray-700 text-md">
          HTML List
        </li>
        
        <li className="p-3 bg-gray-50 mb-3 shadow-sm rounded-sm text-gray-700 text-md">
          HTML Images
        </li>

        <li className="p-3 bg-gray-50 mb-3 shadow-sm rounded-sm text-gray-700 text-md">
        CSS Introduction
        </li>

        <li className="p-3 bg-gray-50 mb-3 shadow-sm rounded-sm text-gray-700 text-md">
        CSS Selectors
        </li>

        <li className="p-3 bg-gray-50 mb-3 shadow-sm rounded-sm text-gray-700 text-md">
        CSS Style Attributes
        </li>

        <li className="p-3 bg-gray-50 mb-3 shadow-sm rounded-sm text-gray-700 text-md">
          CSS Icons
        </li>

        <li className="p-3 bg-gray-50 mb-3 shadow-sm rounded-sm text-gray-700 text-md">
        CSS Positions
        </li>

        <li className="p-3 bg-gray-50 mb-3 shadow-sm rounded-sm text-gray-700 text-md">
        JavaScript Introduction
        </li>
        <li className="p-3 bg-gray-50 mb-3 shadow-sm rounded-sm text-gray-700 text-md">
        JavaScript Variables
        </li>
        <li className="p-3 bg-gray-50 mb-3 shadow-sm rounded-sm text-gray-700 text-md">
        JavaScript Functions
        </li>
        <li className="p-3 bg-gray-50 mb-3 shadow-sm rounded-sm text-gray-700 text-md">
        For Loops, JS Switch, and Array Methods
        </li>
        <li className="p-3 bg-gray-50 mb-3 shadow-sm rounded-sm text-gray-700 text-md">
        ES 6
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

export default Web;

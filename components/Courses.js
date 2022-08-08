import React from "react";
import Stars from "./Stars";
import Image from "next/image";
import Link from "next/link";

function Courses() {
  const web = "/web.jpg";
  const pro = "/pro.jpg";
  const graphic = "/graphic.jpg";
  return (
    <div className="flex flex-col space-y-4 items-center shadow-sm bg-white px-4 py-6">
      <div className="flex flex-col space-y-2 items-center shadow-sm bg-orange-50 w-full p-4">
        <div className="relative h-60 w-full">
          <Image
            src={web}
            objectFit="cover"
            className="rounded-md"
            layout="fill"
          />
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="text-gray-800 font-semibold">Web Development</div>
          <div className="text-orange-600 font-medium text-sm">NGN 55,000</div>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-start">
            <Stars />
            <div className="text-sm text-gray-700">(120 votes)</div>
          </div>
          <Link href="/courses/web">
            <button className="text-sm bg-orange-500 px-3 py-2 rounded-md text-white hover:bg-orange-400">
              View Content
            </button>
          </Link>
        </div>
      </div>
      {/*  */}
      <div className="flex flex-col space-y-2 items-center shadow-sm bg-orange-50 w-full p-4">
        <div className="relative h-60 w-full">
          <Image
            src={graphic}
            objectFit="cover"
            className="rounded-md"
            layout="fill"
          />
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="text-gray-800 font-semibold">Graphic Design</div>
          <div className="text-orange-600 font-medium text-sm">NGN 45,000</div>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-start">
            <Stars />
            <div className="text-sm text-gray-700">(34 votes)</div>
          </div>
          <Link href="/courses/design">
            <button className="text-sm bg-orange-500 px-3 py-2 rounded-md text-white hover:bg-orange-400">
              View Content
            </button>
          </Link>
        </div>
      </div>
      
      <div className="flex flex-col space-y-2 items-center shadow-sm bg-orange-50 w-full p-4">
        <div className="relative h-60 w-full">
          <Image
            src={pro}
            objectFit="cover"
            className="rounded-md"
            layout="fill"
          />
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="text-gray-800 font-semibold">
            Introduction to Python Programming
          </div>
          <div className="text-orange-600 font-medium text-sm">NGN 50,000</div>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-start">
            <Stars />
            <div className="text-sm text-gray-700">(34 votes)</div>
          </div>
          <Link href="/courses/python">
            <button className="text-sm bg-orange-500 px-3 py-2 rounded-md text-white hover:bg-orange-400">
              View Content
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Courses;

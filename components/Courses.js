import React from "react";
import Stars from "./Stars";
import Image from "next/image";

function Courses() {
  const web = "/web.jpg";
  const robo = "/robo.jpg";
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
          <div className="text-orange-600 font-medium text-md">NGN 10,000</div>
        </div>
        <div className="flex items-center justify-start w-full">
          <Stars />
          <div className="text-sm text-gray-700">(120 votes)</div>
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
          <div className="text-orange-600 font-medium text-md">NGN 10,000</div>
        </div>
        <div className="flex items-center justify-start w-full">
          <Stars />
          <div className="text-sm text-gray-700">(34 votes)</div>
        </div>
      </div>
      {/*  */}
      <div className="flex flex-col space-y-2 items-center shadow-sm bg-orange-50 w-full p-4">
        <div className="relative h-60 w-full">
          <Image
            src={robo}
            objectFit="cover"
            className="rounded-md"
            layout="fill"
          />
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="text-gray-800 font-semibold">Robotics</div>
          <div className="text-orange-600 font-medium text-md">NGN 15,000</div>
        </div>
        <div className="flex items-center justify-start w-full">
          <Stars />
          <div className="text-sm text-gray-700">(80 votes)</div>
        </div>
      </div>
      {/*  */}
    </div>
  );
}

export default Courses;
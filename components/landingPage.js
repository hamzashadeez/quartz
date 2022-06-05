import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "./logo";


function LandingPage() {
    const bg = '/bg.jpg'
  return (
    <div className="m-0 relative">
      {/* Hero */}
      <div className="h-screen bg-orange-50 flex items-center justify-center">
        <div>
          {/* Navbar */}
          <div className=" absolute top-0 left-0 w-full bg-white shadow-sm flex items-center justify-between px-4 py-1">
            <Logo />
            <ul className="space-x-4 text-sm mx-3 hidden text-orange-500 ">
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">Courses</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
              <li>
                <Link href="#">Price</Link>
              </li>
              <li>
                <Link href="#">Reviews</Link>
              </li>
            </ul>
          </div>
          <div 
        //   className="flex lg:flex-row"
          >
            <div>
              {/* notes */}
              <div className="text-lg p-4 text-orange-500 font-semibold">
                Build your skill to advance your career path
              </div>
              <div className="text-md px-4 text-orange-500 font-thin">
                Learn IT Skills from professional instrustors and earn MIT
                certificate
              </div>
              <button className="bg-orange-500 w-auto m-4 text-white rounded-sm px-4 py-2">
                <Link href="#">Get Started</Link>
              </button>
            </div>
            {/* image */}
            <div className="w-full mt-4 p-4 h-60 relative">
                <Image src={bg} objectFit='contain' layout="fill"/>
            </div>
          </div>
        </div>
      </div>

      {/* Courses */}

      {/* About */}

      {/* Reviews */}

      {/* Pricing */}

      {/* Contact */}

      {/* Footer */}
    </div>
  );
}

export default LandingPage;

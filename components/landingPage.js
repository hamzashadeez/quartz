import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "./logo";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsFillTelephoneInboundFill } from "react-icons/bs";

const sendWhatsAppMessage = ()=>{}
const copyToClipboard = ()=>{}

function LandingPage() {
  const bg = "/bg.jpg";
  return (
    <div className="m-0 relative">
      {/* Navbar */}
      <div className=" sticky top-0 left-0 w-full bg-white shadow-sm flex items-center justify-between px-4 py-1">
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
      {/* Hero */}
      <div className="h-screen bg-white flex items-center justify-center">
        <div>
          <div>
            <div>
              {/* notes */}
              <div className="text-lg p-4 text-gray-800 font-semibold">
                Build your skill to advance your career path
              </div>
              <div className="text-md px-4 text-gray-500 font-medium">
                Learn IT Skills from professional instrustors and earn MIT
                certificate
              </div>
              <button className="bg-orange-500 w-auto m-4 text-white rounded-sm px-4 py-2">
                <Link href="#about">Get Started</Link>
              </button>
            </div>
            {/* image */}
            <div className="w-full mt-4 p-4 h-60 relative">
              <Image src={bg} objectFit="contain" layout="fill" />
            </div>
          </div>
        </div>
      </div>

      {/* Courses */}

      {/* About */}
      <div id="about" className="p-4 bg-orange-50 mb-2">
        <div className="text-orange-500 text-center uppercase mb-2">
          About Us
        </div>
        <div className="text-gray-700">
          Quartz Engineering and IT Services has been running for dedicates, we
          provide Consultancy Services and train thousand of students different
          Computer Science courses.{" "}
        </div>
      </div>

      {/* Reviews */}

      {/* Pricing */}

      {/* Contact */}
      <div className="p-6 flex flex-col items-center justify-center" id="contact">
        <h4 className=" text-orange-500 mb-3 text-center">Contact</h4>
        
        <button onClick={()=>copyToClipboard()} className="bg-gray-100 px-3 py-1 mb-4 rounded-md text-gray-800 font-medium flex items-center justify-between">
          <BsFillTelephoneInboundFill size={17} className='my-0 mr-2 w-5'/>
          +2348109593515
        </button>
        <button onClick={()=>sendWhatsAppMessage()} className="bg-green-400 px-3 py-1 rounded-md text-gray-800 font-medium flex items-center justify-between">
          <AiOutlineWhatsApp size={17} className='my-0 mr-2 w-5'/>
          Talk on WhatsApp
        </button>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 p-4 text-gray-200 text-center">
        <div>
          <h4 className=" text-orange-500 mb-3 ">Company</h4>
          <ul className="space-y-3 text-sm mx-3 ">
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
              <Link href="#">Reviews</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className=" text-orange-500 mb-3 mt-8">Contact</h4>
          <ul className="space-y-3 text-sm mx-3 ">
            <li>+234 810 959 3515</li>
            <li>Quartz@gmail.com</li>
            <li>
              No 22 Hospital road Tudun Wada, Zaria,
              <br /> Kaduna State, Nigeria
            </li>
          </ul>
        </div>
        {/* end */}
      </div>
    </div>
  );
}

export default LandingPage;

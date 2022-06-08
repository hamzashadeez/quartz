import React from "react";
import { FaCode, FaMobileAlt } from "react-icons/fa";
import { GiTeacher} from 'react-icons/gi'
import {MdOutlineDraw} from 'react-icons/md'

function Services() {
  return (
    <div className="flex flex-col space-y-4 items-center shadow-sm bg-white px-4 py-6">
      {/*  */}
      <div className="p-4 border-2 w-full border-orange-50 shadow-sm mb-3 flex justify-center items-center flex-col space-y-3">
        <div className="flex justify-center text-orange-500 items-center w-28 h-28 rounded-full shadow-md border-2 border-orange-100">
          <FaCode size={45} />
        </div>
        <div className="text-orange-400 font-semibold">Web Design</div>
      </div>
      {/*  */}
      <div className="p-4 border-2 w-full border-orange-50 shadow-sm mb-3 flex justify-center items-center flex-col space-y-3">
        <div className="flex justify-center text-orange-500 items-center w-28 h-28 rounded-full shadow-md border-2 border-orange-100">
          <FaMobileAlt size={42} />
        </div>
        <div className="text-orange-400 font-semibold">App Development</div>
      </div>
      {/*  */}
      <div className="p-4 border-2 w-full border-orange-50 shadow-sm mb-3 flex justify-center items-center flex-col space-y-3">
        <div className="flex justify-center text-orange-500 items-center w-28 h-28 rounded-full shadow-md border-2 border-orange-100">
          <MdOutlineDraw size={42} />
        </div>
        <div className="text-orange-400 font-semibold">UI/UX Design</div>
      </div>
      {/*  */}
      <div className="p-4 border-2 w-full border-orange-50 shadow-sm mb-3 flex justify-center items-center flex-col space-y-3">
        <div className="flex justify-center text-orange-500 items-center w-28 h-28 rounded-full shadow-md border-2 border-orange-100">
          <GiTeacher size={45} />
        </div>
        <div className="text-orange-400 font-semibold">IT Training</div>
      </div>
    </div>
  );
}

export default Services;

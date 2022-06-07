import React from "react";
import { AiFillStar } from "react-icons/ai";
function Stars() {
  return (
    <div className="text-orange-500 flex items-center justify-between px-2 py-1 space-x-1">
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
    </div>
  );
}

export default Stars;

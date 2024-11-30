import React from "react";
import img1 from "../Goolkeepers/image.png";
import imag from "../Defenders/image.png";

const Goolkeepers = () => {
  return (
    <div>
      <div className="flex  text-3xl  font-bold ">
        {" "}
        <p className="mt-4">GOALKEEPER</p>
      </div>

      <div className="flex gap-4 mt-4">
        <div className=" flex w-72 h-44">
          {" "}
          <img src={imag} alt="" />
        </div>
        <div className=" flex w-72 h-44">
          {" "}
          <img src={img1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Goolkeepers;

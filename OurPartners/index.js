import React from "react";
import sega from "../Image.js/sega.png";
import jonex from "../Image.js/jj jonex.png";
import india from "../Image.js/India.png";
import graviti from "../Image.js/gravity.png";

const OurPartners = () => {
  return (
    <div>
      <div className="grid  border-black border    bg-slate-900  ">
        <p className="flex  text-4xl">
          {" "}
          <h1 className=" flex  text-4xl  p-4  gap-2 text-white  font-extrabold ">
            OUR <p className=" text-4xl  text-white">PARTNERS</p>{" "}
          </h1>
        </p>
        <div className="flex items-center p-8  gap-8 justify-center ">
          <img className="h-24  border-white  border-4 " src={sega} alt="" />
          <img className="h-24   border-white  border-4" src={jonex} alt="" />
          <img
            className="h-24    border-white    border-4"
            src={india}
            alt=""
          />
          <img className="h-24    border-white border-4" alt="" src={graviti} />
        </div>
      </div>
    </div>
  );
};

export default OurPartners;

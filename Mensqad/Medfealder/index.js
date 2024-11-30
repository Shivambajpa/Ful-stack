import React from "react";
import img from "../Medfealder/image.png";
import img1 from "../Medfealder/image copy.png";
import img2 from "../Medfealder/image copy 6.png";
import img3 from "../Medfealder/image copy 5.png";
import img4 from "../Medfealder/image copy 4.png";
import img5 from "../Medfealder/image copy 3.png";
import img6 from "../Medfealder/image copy 2.png";

const Medfealder = () => {
  return (
    <div>
      <div className="flex text-4xl  font-bold  pt-4 ">
        <h1>Medfealder</h1>
      </div>
      <div className="flex gap-5 pt-4  ">
        {" "}
        <img src={img} className=" bg-blue-300 border-4 border-white" alt="" />
        <img src={img1} className=" bg-blue-300 border-4 border-white" alt="" />
        <img src={img2} className=" bg-blue-300 border-4 border-white" alt="" />
        <img src={img3} className=" bg-blue-300 border-4 border-white" alt="" />
        <img src={img4} className=" bg-blue-300 border-4 border-white" alt="" />
        <img src={img5} className=" bg-blue-300 border-4 border-white" alt="" />
      </div>
    </div>
  );
};

export default Medfealder;

import React from "react";
import img2 from "../Defenders/image copy.png";
import img4 from "../Defenders/image copy 8.png";
import img5 from "../Defenders/image copy 7.png";
import img6 from "../Defenders/image copy 6.png";
import img7 from "../Defenders/image copy 5.png";

import img8 from "../Defenders/image copy 4.png";
import img9 from "../Defenders/image copy 3.png";
import img10 from "../Defenders/image copy 2.png";
import Goolkeepers from "../Goolkeepers";
import { Link } from "react-router-dom";
import Forwordmens from "../Forword";
import Medfealder from "../Medfealder";
import Coaches from "../Coaches";

const Dfenders = () => {
  return (
    <div className="w-screen  p-4 bg-gradient-to-r to-orange-400 from-green-500">
      <div>
        <Goolkeepers />
      </div>
      <div className="flex font-bold text-3xl pt-4">
        {" "}
        <Link to={"/Sports"}>
          {" "}
          <h1>Defenders</h1>
        </Link>
      </div>
      <div className=" flex gap-5  pt-4 w-full ">
        <img src={img5} className=" border-4 bg-blue-300 border-white" alt="" />
        <img src={img2} alt="" className=" bg-blue-300 border-4 border-white" />
        <img src={img4} alt="" className=" bg-blue-300 border-4 border-white" />
        <img src={img5} alt="" className=" bg-blue-300 border-4 border-white" />
        <img src={img6} alt="" className="bg-blue-300 border-4 border-white" />
        <img
          src={img7}
          alt=""
          className=" bg-blue-300  border-4 border-white"
        />
      </div>

      <div className="flex pt-4  gap-4">
        {" "}
        <img src={img8} alt="" className=" bg-blue-300 border-4 border-white" />
        <img src={img9} alt="" className=" bg-blue-300 border-4 border-white" />
        <img src={img10} alt="" className="bg-blue-300 border-4 border-white" />
      </div>
      <div>
        {" "}
        <div></div>
        <div className="flex gap-4 pt-4">
          {" "}
          <Medfealder />
        </div>
        <div>
          <Forwordmens />
        </div>
        <div>
          <Coaches />
        </div>
      </div>
    </div>
  );
};

export default Dfenders;

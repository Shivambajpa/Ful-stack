import React from "react";
import img from "../WomensSquad/Golfkeeper/image copy.png";
import img1 from "../WomensSquad/Golfkeeper/image.png";
import img2 from "../WomensSquad/Defender/image copy 2.png";
import img3 from "../WomensSquad/Defender/image copy 3.png";
import img4 from "../WomensSquad/Defender/image copy 4.png";
import img5 from "../WomensSquad/Defender/image copy.png";
import img6 from "../WomensSquad/Defender/image copy 3.png";
import Midfeailder from "./Midfeailder";
import Forword from "./Forword";
import { Link } from "react-router-dom";

const WomenSquad = () => {
  return (
    <div className="  grid bg-gradient-to-r   to-orange-400 from-green-500 p-5 ">
      {" "}
      <div className="flex border-black font-bold text-4xl p-5 pt-4">
        <h1>GoalKeepers</h1>
      </div>
      <div className="flex gap-4  border4 bg-gradient-to-r to-orange-400 from-green-500    border-black">
        <img
          src={img}
          className="flex border-4 h-80 border-black shadow-2xl bg-blue-400"
          alt=""
        />
        <img
          src={img1}
          className="flex border-4 h-80 border-black shadow-2xl bg-blue-400"
          alt=""
        />
      </div>
      <div className=" flex  font-bold text-4xl   p-5">
        <Link to={"/Sports"}>
          {" "}
          <h1>Dfenders</h1>
        </Link>
      </div>
      <div className="flex gap-4    border4 bg-gradient-to-r to-orange-400 from-green-500">
        {" "}
        <img
          src={img2}
          className="flex border-4  h-80 border-black shadow-2xl bg-blue-400"
          alt=""
        />
        <img
          src={img3}
          className="flex border-4 h-80 border-black shadow-2xl bg-blue-400"
          alt=""
        />
        <img
          src={img4}
          className="flex border-4  h-80 border-black shadow-2xl bg-blue-400"
          alt=""
        />
        <img
          src={img5}
          className="flex border-4  h-80 border-black shadow-2xl bg-blue-400"
          alt=""
        />
        <img
          src={img6}
          className="flex border-4 h-80 border-black shadow-2xl bg-blue-400"
          alt=""
        />
      </div>
      <div className=" ">
        <Midfeailder />
      </div>
      <div>
        <Forword />
      </div>
    </div>
  );
};

export default WomenSquad;

import React from "react";
import img from "../Forword/image.png";
import img1 from "../Forword/image copy.png";
import img2 from "../Forword/image copy 5.png";
import img3 from "../Forword/image copy 4.png";
import img4 from "../Forword/image copy 3.png";
import img5 from "../Forword/image copy 2.png";

const Forwordmens = () => {
  return (
    <div>
      <div className="flex gap-4 text-4xl font-bold">
        <h1>Forword</h1>
      </div>
      <div>
        <div className="flex gap-4    pt-4">
          <img
            src={img}
            className=" bg-blue-300 border-4 border-white"
            alt=""
          />
          <img
            src={img1}
            className=" bg-blue-300 border-4 border-white"
            alt=""
          />
          <img
            src={img2}
            className=" bg-blue-300 border-4 border-white"
            alt=""
          />
          <img
            src={img3}
            className=" bg-blue-300 border-4 border-white"
            alt=""
          />
          <img
            src={img4}
            className=" bg-blue-300 border-4 border-white"
            alt=""
          />

          <img
            src={img5}
            className=" bg-blue-300 border-4 border-white"
            alt=""
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Forwordmens;

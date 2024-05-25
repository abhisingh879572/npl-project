import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const SkillsComponent = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-10 sm:min-h-[100px] sm:grid sm:place-items-center border-20 border-white">
        <div className="container w-full h-full border border-white rounded-md p-9">
          <h2 className="p-5 font-serif text-2xl text-center bg-black border-white text-m text-cyan-50 border-20 sm:text-3xl ">
            Step Forward to Success!
            <br />
            +91-7355010622 | akshatverma0522@gmail.com
            <br />
            <br />
          </h2>
        </div>
      </div>
    </>
  );
};

export default SkillsComponent;

import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";
import Gellery1 from "../Gallery/Gellery1";
import LeadershipCoaching from "../LeadershipCoaching/LeadershipCoaching";
import Ser from "./ser";
const skillsData = [
  {
    name: "Best Price",
    icon: (
      <FaCameraRetro className="text-5xl duration-300 text-primary group-hover:text-black" />
    ),
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "0",
  },
  {
    name: "Fast and Safe",
    icon: (
      <GiNotebook className="text-5xl duration-300 text-primary group-hover:text-black" />
    ),
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "500",
  },
  {
    name: "Experience Drivers",
    icon: (
      <SlNote className="text-5xl duration-500 text-primary group-hover:text-black" />
    ),
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "1000",
  },
];
const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <Ser />
        <LeadershipCoaching />

        <Gellery1 />
      </div>
    </>
  );
};

export default Services;

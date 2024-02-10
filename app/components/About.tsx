import { useGSAP } from "@gsap/react";
import { data } from "../lib/data";
import { useRef } from "react";
import gsap from "gsap";

export const About = () => {
  return (
    <div className=" bg-teal-400 text-black h-screen flex justify-center w-full items-center ">
      <div className="flex w-[60vw] h-[60vh]">
        <div className="flex-1 h-full bg-blue-500">
          <h1 className="text-6xl text-black">ABOUT</h1>
        </div>
        <div className="flex-1 h-full bg-green-500">
          <p>{data.about.description}</p>
        </div>
      </div>
    </div>
  );
};

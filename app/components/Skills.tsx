"use client";
import { useGSAP } from "@gsap/react";
import { data } from "../lib/data";
import { useRef } from "react";
import gsap from "gsap";

export const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (skillsRef.current && targetRef.current) {
      gsap.to(targetRef.current, {
        scrollTrigger: {
          trigger: skillsRef.current,
          pin: targetRef.current,
          start: "top 20%",
          end: "bottom 80%",
          scrub: true,
        },
      });
    }
  }, {});
  return (
    <div className="  text-black py-40  flex justify-center w-full items-center ">
      <div className="flex w-[60vw]">
        <div ref={targetRef} className="w-[50%] h-full ">
          <h1 className="text-6xl text-black">Skills</h1>
        </div>
        <div ref={skillsRef} className="w-[50%] h-full flex flex-col">
          {data.skills.data.map((item, i) => (
            <div className="py-5" key={i}>
              <h1 className="text-3xl">{item}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

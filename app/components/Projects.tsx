"use client";
import { useGSAP } from "@gsap/react";
import { data } from "../lib/data";
import { useRef } from "react";
import gsap from "gsap";

export const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (projectsRef.current && targetRef.current) {
      gsap.to(targetRef.current, {
        scrollTrigger: {
          trigger: projectsRef.current,
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
          <h1 className="text-6xl text-black">Projects</h1>
        </div>
        <div ref={projectsRef} className="w-[50%] h-full flex flex-col">
          {data.projects.data.map((item, i) => (
            <div className="py-5" key={i}>
              <h1 className="text-3xl">{item.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

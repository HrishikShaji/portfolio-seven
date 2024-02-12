"use client";
import { useGSAP } from "@gsap/react";
import { data } from "../lib/data";
import { useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";

export const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (projectsRef.current && targetRef.current) {
      const height = projectsRef.current.getBoundingClientRect().height;
      const headingHeight = targetRef.current.getBoundingClientRect().height;
      gsap.to(targetRef.current, {
        scrollTrigger: {
          trigger: projectsRef.current,
          pin: targetRef.current,
          start: "top 20%",
          end: `+=${height - headingHeight}`,
          scrub: true,
        },
      });
    }
  }, {});
  return (
    <div className="  text-black py-40  flex justify-center w-full items-center ">
      <div className="flex w-[90vw]">
        <div ref={targetRef} className="w-[50%] h-full ">
          <h2 className="text-7xl text-black">Projects</h2>
        </div>
        <div ref={projectsRef} className="w-[50%] h-full flex flex-col gap-20">
          {data.projects.data.map((item, i) => (
            <Project key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface ProjectProps {
  item: any;
}

const Project: React.FC<ProjectProps> = ({ item }) => {
  return (
    <div className=" flex relative justify-between items-center gap-2">
      <h3 className="text-3xl">{item.title}</h3>
    </div>
  );
};

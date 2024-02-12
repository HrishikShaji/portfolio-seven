"use client";
import { useGSAP } from "@gsap/react";
import { data } from "../lib/data";
import { useRef } from "react";
import gsap from "gsap";
import Circle from "./Circle";

export const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (skillsRef.current && targetRef.current) {
      const height = skillsRef.current.getBoundingClientRect().height;
      const headingHeight = targetRef.current.getBoundingClientRect().height;
      if (height && headingHeight) {
        gsap.to(targetRef.current, {
          scrollTrigger: {
            trigger: skillsRef.current,
            pin: targetRef.current,
            start: "top 20%",
            end: `+=${height - headingHeight}`,
            scrub: true,
          },
        });
      }
    }
  }, {});
  return (
    <div className="  text-black py-40  flex justify-center w-full items-center ">
      <div className="flex w-[90vw]">
        <div className="w-[50%] h-full ">
          <h2 ref={targetRef} className="text-7xl text-black">
            Skills
          </h2>
        </div>
        <div ref={skillsRef} className="w-[50%]  h-full flex flex-col gap-20">
          {data.skills.data.map((item, i) => (
            <SkillItem key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface SkillItemProps {
  item: any;
}

const SkillItem: React.FC<SkillItemProps> = ({ item }) => {
  const circleRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (circleRef.current) {
      const circleTl = gsap.timeline({
        scrollTrigger: {
          trigger: circleRef.current,
          start: "top 35%",
          end: "top 5%",
          scrub: true,
        },
      });

      circleTl
        .fromTo(
          circleRef.current,
          {
            scale: 0,
          },
          {
            scale: 1,
            transformOrigin: "center",
          },
        )
        .to(circleRef.current, {
          scale: 0,
        });
    }
  }, {});
  return (
    <div className=" flex relative justify-between items-center gap-2">
      <h3 className="text-3xl">{item.name}</h3>
      <div className="relative  flex justify-center items-center ">
        <Circle level={item.level} />
        <h1 className="absolute">{`${item.level * 10}%`}</h1>
      </div>
    </div>
  );
};

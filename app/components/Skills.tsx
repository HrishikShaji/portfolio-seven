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
  const lineRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  useGSAP(() => {
    if (titleRef.current && itemRef.current && lineRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: itemRef.current,
          start: "top 20%",
          end: "bottom 20%",
          scrub: true,
        },
      });

      tl.fromTo(
        titleRef.current,
        {
          scaleX: 1,
        },
        {
          scaleX: 2,
        },
      ).to(titleRef.current, {
        scaleX: 1,
      });
    }
  }, {});
  return (
    <div ref={itemRef} className="py-5 flex flex-col gap-2">
      <h1 ref={titleRef} className="text-3xl">
        {item}
      </h1>
      <div ref={lineRef} className="h-1 w-full bg-black" />
    </div>
  );
};

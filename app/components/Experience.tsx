"use client";
import { useGSAP } from "@gsap/react";
import { data } from "../lib/data";
import { useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export const Experience = () => {
  const experienceRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (experienceRef.current && targetRef.current) {
      const height = experienceRef.current.getBoundingClientRect().height;
      const headingHeight = targetRef.current.getBoundingClientRect().height;
      gsap.to(targetRef.current, {
        scrollTrigger: {
          trigger: experienceRef.current,
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
          <h2 className="text-7xl text-black">Experience</h2>
        </div>
        <div
          ref={experienceRef}
          className="w-[50%] h-full gap-20 flex flex-col"
        >
          {data.experience.data.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface ItemProps {
  item: any;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  return (
    <div className=" flex relative justify-between items-start gap-2">
      <div className="flex flex-col gap-10">
        <h3 className="text-3xl max-w-[60%]">{item.position}</h3>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl">{item.company}</h1>
          <h1>{item.description}</h1>
        </div>
      </div>
      <h2 className="flex-shrink-0">{`${item.startYear}-${item.endYear}`}</h2>
    </div>
  );
};

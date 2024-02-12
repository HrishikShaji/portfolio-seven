"use client";
import { useGSAP } from "@gsap/react";
import { data } from "../lib/data";
import { useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (featuresRef.current && targetRef.current) {
      const height = featuresRef.current.getBoundingClientRect().height;
      const headingHeight = targetRef.current.getBoundingClientRect().height;
      gsap.to(targetRef.current, {
        scrollTrigger: {
          trigger: featuresRef.current,
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
          <h2 className="text-7xl text-black">Features</h2>
        </div>
        <div ref={featuresRef} className="w-[50%] h-full gap-20 flex flex-col">
          {data.features.data.map((item, i) => (
            <Feature key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface FeatureProps {
  item: any;
}

const Feature: React.FC<FeatureProps> = ({ item }) => {
  return (
    <div className=" flex relative justify-between items-start gap-2">
      <div className="flex flex-col gap-10">
        <h3 className="text-3xl max-w-[60%]">{item.title}</h3>
        <h1>{item.desc}</h1>
      </div>
    </div>
  );
};

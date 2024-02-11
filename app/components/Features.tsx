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
      gsap.to(targetRef.current, {
        scrollTrigger: {
          trigger: featuresRef.current,
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
          <h1 className="text-6xl text-black">Features</h1>
        </div>
        <div ref={featuresRef} className="w-[50%] h-full flex flex-col">
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
  const circleRef = useRef<HTMLImageElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  useGSAP(() => {
    if (titleRef.current && circleRef.current && itemRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: itemRef.current,
          start: "top 35%",
          end: "top 5%",
          scrub: true,
        },
      });

      const circleTl = gsap.timeline({
        scrollTrigger: {
          trigger: circleRef.current,
          start: "top 35%",
          end: "top 5%",
          scrub: true,
        },
      });

      tl.fromTo(
        titleRef.current,

        {
          scale: 1,
        },
        {
          transformOrigin: "left",
          scale: 2,
        },
      ).to(titleRef.current, {
        scale: 1,
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
    <div
      ref={itemRef}
      className="py-5 flex relative justify-between items-start gap-2"
    >
      <div className="py-5 flex flex-col gap-10">
        <h1 className="text-3xl max-w-[60%]" ref={titleRef}>
          {item.title}
        </h1>
        <h1>{item.desc}</h1>
      </div>
      <Image
        src={item.img}
        height={1000}
        width={1000}
        alt="image"
        ref={circleRef}
        className="h-24 object-cover w-24 rounded-full absolute -right-40 bg-black"
      />
    </div>
  );
};
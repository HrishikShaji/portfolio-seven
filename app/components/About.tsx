"use client";
import { useGSAP } from "@gsap/react";
import { data } from "../lib/data";
import { useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

export const About = () => {
  const paraRef = useRef<HTMLParagraphElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (paraRef.current && targetRef.current) {
      gsap.to(targetRef.current, {
        scrollTrigger: {
          trigger: paraRef.current,
          pin: targetRef.current,
          start: "top 20%",
          end: "bottom 80%",
          scrub: true,
        },
      });
    }
    if (paraRef.current) {
      const text = new SplitType(paraRef.current, { types: "lines" });
      const words = gsap.utils.toArray(".word");
      const tl = gsap.timeline({ defaults: { opacity: 0.2 } });
      tl.from(words, {
        opacity: 0.2,
      });
      if (text.lines) {
        text.lines.forEach((target) => {
          gsap.from(target, {
            opacity: 0.2,
            scrollTrigger: {
              trigger: target,
              markers: true,
              scrub: 1,
              start: "top center",
              end: "bottom center",
            },
          });
        });
      }
    }
  }, {});

  const newPara = data.about.description.split(" ");

  return (
    <div className="  text-black py-40  flex justify-center w-full items-center ">
      <div className="flex w-[60vw]">
        <div ref={targetRef} className="w-[50%] h-full ">
          <h1 className="text-6xl text-black">ABOUT</h1>
        </div>
        <div className="w-[50%] h-full ">
          <p ref={paraRef} className="text-3xl  flex flex-wrap">
            {data.about.description}
          </p>
        </div>
      </div>
    </div>
  );
};

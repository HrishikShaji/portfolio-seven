"use client";
import { useGSAP } from "@gsap/react";
import { data } from "../lib/data";
import { useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

export const About = () => {
  const paraRef = useRef<HTMLParagraphElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (paraRef.current && targetRef.current) {
      const height = paraRef.current.getBoundingClientRect().height;
      const headingHeight = targetRef.current.getBoundingClientRect().height;
      gsap.to(targetRef.current, {
        scrollTrigger: {
          trigger: paraRef.current,
          pin: targetRef.current,
          start: "top 20%",
          end: `+=${height - headingHeight}`,
          scrub: true,
        },
      });
    }
    if (paraRef.current) {
      const text = new SplitType(paraRef.current, { types: "lines" });

      text.lines?.forEach((line) => {
        const words = new SplitType(line, { types: "chars" });

        if (words.chars) {
          gsap.to(words.chars, {
            color: "black",
            stagger: 0.025,
            ease: "none",
            scrollTrigger: {
              trigger: words.chars,
              scrub: 1,
              start: "top center",
              end: "+=2px",
            },
          });
        }
      });
    }
  }, {});

  return (
    <div className="  text-black py-40  flex justify-center w-full items-center ">
      <div className="flex w-[90vw]">
        <div ref={targetRef} className="w-[50%] h-full ">
          <h2 className="text-7xl text-black">ABOUT</h2>
        </div>
        <div className="w-[50%] h-full ">
          <h3
            ref={paraRef}
            className="text-3xl leading-[50px] text-neutral-300"
          >
            {data.about.description}
          </h3>
        </div>
      </div>
    </div>
  );
};

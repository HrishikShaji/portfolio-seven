import { useGSAP } from "@gsap/react";
import { data } from "../lib/data";
import { useRef } from "react";
import gsap from "gsap";

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      if (containerRef.current && paraRef.current) {
        gsap.to(paraRef.current, {
          color: "red",
          scale: 0.5,
          transformOrigin: "top",
          scrollTrigger: {
            trigger: paraRef.current,
            start: "top bottom",
            end: "top 75%",
            scrub: 5,
            markers: true,
          },
        });
        gsap.to(paraRef.current, {
          color: "red",
          scale: 2,
          transformOrigin: "top",
          scrollTrigger: {
            trigger: paraRef.current,
            start: "top 25%%",
            end: "top top",
            scrub: 5,
            markers: true,
          },
        });
      }
    },
    { scope: containerRef },
  );
  return (
    <div ref={containerRef} className=" bg-teal-400 text-black  flex  ">
      <p className="text-8xl font-semibold text-center" ref={paraRef}>
        {data.about.description}
      </p>
    </div>
  );
};

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; // Import ScrollTrigger separately
import React, { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

interface CircleProps {
  level: number;
}

const Circle: React.FC<CircleProps> = ({ level }) => {
  const pathRef = useRef<SVGCircleElement>(null);
  const mainRef = useRef<SVGSVGElement>(null);

  useGSAP(() => {
    const path = pathRef.current;
    const main = mainRef.current;

    const circumference = 2 * Math.PI * 40; // Circumference of the circle

    const revealPercentage = (level * 10) / 100; // Calculate the percentage of the circle to reveal

    const offset = circumference * (1 - revealPercentage); // Calculate the offset to start from the top

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: main,
        start: "top center",
        end: "top 20%",
        scrub: 1,
      },
    });

    tl.fromTo(
      path,
      {
        strokeDasharray: circumference, // Set the strokeDasharray to the circumference
        strokeDashoffset: circumference, // Set the strokeDashoffset to the circumference to hide the whole circle initially
      },
      {
        strokeDashoffset: offset, // Offset to start from the top based on the level
      },
    );
  }, []);

  return (
    <svg width="100" height="100" ref={mainRef}>
      <circle
        cx="50"
        cy="50"
        stroke="#a3a3a3"
        strokeWidth={10}
        r="40"
        fill="none"
        transform="rotate(-90, 50, 50)" // Rotate the circle to start from the top
      />
      <circle
        cx="50"
        cy="50"
        stroke="black"
        ref={pathRef}
        strokeWidth={10}
        r="40"
        fill="none"
        transform="rotate(-90, 50, 50)" // Rotate the circle to start from the top
      />
    </svg>
  );
};

export default Circle;

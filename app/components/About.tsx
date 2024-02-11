"use client";
import { useGSAP } from "@gsap/react";
import { data } from "../lib/data";
import { useRef } from "react";
import gsap from "gsap";

export const About = () => {
	const paraRef = useRef<HTMLParagraphElement>(null);
	const targetRef = useRef<HTMLDivElement>(null);

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
	}, {});
	return (
		<div className="  text-black py-40  flex justify-center w-full items-center ">
			<div className="flex w-[60vw]">
				<div ref={targetRef} className="w-[50%] h-full ">
					<h1 className="text-6xl text-black">ABOUT</h1>
				</div>
				<div className="w-[50%] h-full ">
					<p ref={paraRef} className="text-3xl">
						{data.about.description}
					</p>
				</div>
			</div>
		</div>
	);
};

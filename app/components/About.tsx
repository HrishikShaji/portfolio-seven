import { useGSAP } from "@gsap/react";
import { data } from "../lib/data";
import { useRef } from "react";
import gsap from "gsap";

export const About = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const paraRef = useRef<HTMLParagraphElement>(null);
	const oneRef = useRef<HTMLHeadingElement>(null);
	const twoRef = useRef<HTMLHeadingElement>(null);
	const threeRef = useRef<HTMLHeadingElement>(null);
	const fourRef = useRef<HTMLHeadingElement>(null);
	const fiveRef = useRef<HTMLHeadingElement>(null);

	useGSAP(
		() => {
			if (
				containerRef.current &&
				oneRef.current &&
				twoRef.current &&
				threeRef.current &&
				fourRef.current &&
				fiveRef.current
			) {
				const animation = (el: HTMLHeadingElement) => {
					gsap.fromTo(
						el,
						{
							scale: 3,
						},
						{
							scale: 1,
							scrollTrigger: {
								trigger: el,
								start: "top 75%",
								end: "top 50%",
								scrub: true,
								markers: true,
							},
						},
					);
					gsap.fromTo(el, { scale: 1 }, {
						scale: 3,
						scrollTrigger: {
							trigger: el,
							start: "top 25%",
							end: "top top",
							scrub: true,
							markers: true,
						},
					});
				};
				animation(oneRef.current);
				animation(twoRef.current);
				animation(threeRef.current);
				animation(fourRef.current);
				animation(fiveRef.current);
			}
		},
		{ scope: containerRef },
	);
	return (
		<div
			ref={containerRef}
			className=" bg-teal-400 text-black  flex flex-col gap-10 w-full items-center "
		>
			<h1 className="text-xl" ref={oneRef}>
				one
			</h1>
			<h1 className="text-xl" ref={twoRef}>
				two
			</h1>
			<h1 className="text-xl" ref={threeRef}>
				three
			</h1>
			<h1 className="text-xl" ref={fourRef}>
				four
			</h1>
			<h1 className="text-xl" ref={fiveRef}>
				five
			</h1>
		</div>
	);
};

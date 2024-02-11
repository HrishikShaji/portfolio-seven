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
	const circleRef = useRef<HTMLDivElement>(null);
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
			className="py-10 flex relative justify-between items-center gap-2"
		>
			<h1 ref={titleRef} className="text-3xl">
				{item}
			</h1>
			<div
				ref={circleRef}
				className="h-24 w-24 rounded-full absolute -right-40 bg-black"
			/>
		</div>
	);
};

"use client";
import { useGSAP } from "@gsap/react";
import { data } from "../lib/data";
import { useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export const Projects = () => {
	const projectsRef = useRef<HTMLDivElement>(null);
	const targetRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		if (projectsRef.current && targetRef.current) {
			const height = projectsRef.current.getBoundingClientRect().height;
			const headingHeight = targetRef.current.getBoundingClientRect().height;
			gsap.to(targetRef.current, {
				scrollTrigger: {
					trigger: projectsRef.current,
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
					<h2 className="text-8xl text-black">Projects</h2>
				</div>
				<div ref={projectsRef} className="w-[50%] h-full flex flex-col gap-20">
					{data.projects.data.map((item, i) => (
						<Project key={i} item={item} />
					))}
				</div>
			</div>
		</div>
	);
};

interface ProjectProps {
	item: any;
}

const Project: React.FC<ProjectProps> = ({ item }) => {
	const arrowRef = useRef<HTMLDivElement>(null);
	const itemRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const linkRef = useRef<HTMLAnchorElement>(null);
	useGSAP(() => {
		if (
			titleRef.current &&
			arrowRef.current &&
			itemRef.current &&
			linkRef.current
		) {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: itemRef.current,
					start: "top 35%",
					end: "top 5%",
					scrub: true,
				},
			});

			const arrowTl = gsap.timeline({
				scrollTrigger: {
					trigger: arrowRef.current,
					start: "top 35%",
					end: "top 5%",
					scrub: true,
				},
			});

			const linkTl = gsap.timeline({
				scrollTrigger: {
					trigger: arrowRef.current,
					start: "top 25%",
					end: "top 15%",
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

			arrowTl
				.fromTo(
					arrowRef.current,
					{
						scale: 0,
					},
					{
						scale: 1,
						transformOrigin: "center",
					},
				)
				.to(arrowRef.current, {
					scale: 0,
				});

			linkTl
				.fromTo(
					linkRef.current,
					{
						opacity: 0,
					},
					{
						opacity: 1,
					},
				)
				.to(linkRef.current, {
					opacity: 0,
				});
		}
	}, {});
	return (
		<div
			ref={itemRef}
			className=" flex relative justify-between items-center gap-2"
		>
			<h3 ref={titleRef} className="text-3xl">
				{item.title}
			</h3>
			<div
				ref={arrowRef}
				className="h-24 w-24 rounded-full flex justify-center items-center absolute right-10 bg-black"
			>
				<Link href="/" ref={linkRef} className="text-white">
					o
				</Link>
			</div>
		</div>
	);
};

"use client";
import { useGSAP } from "@gsap/react";
import { data } from "../lib/data";
import { useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export const Testimonials = () => {
	const testimonialsRef = useRef<HTMLDivElement>(null);
	const targetRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		if (testimonialsRef.current && targetRef.current) {
			const height = testimonialsRef.current.getBoundingClientRect().height;
			const headingHeight = targetRef.current.getBoundingClientRect().height;
			gsap.to(targetRef.current, {
				scrollTrigger: {
					trigger: testimonialsRef.current,
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
					<h2 className="text-7xl text-black">Testimonials</h2>
				</div>
				<div
					ref={testimonialsRef}
					className="w-[50%] h-full gap-20 flex flex-col"
				>
					{data.testimonials.map((item, i) => (
						<Testimonial key={i} item={item} />
					))}
				</div>
			</div>
		</div>
	);
};

interface TestimonialProps {
	item: any;
}

const Testimonial: React.FC<TestimonialProps> = ({ item }) => {
	const circleRef = useRef<HTMLImageElement>(null);
	useGSAP(() => {
		if (circleRef.current) {

			const circleTl = gsap.timeline({
				scrollTrigger: {
					trigger: circleRef.current,
					start: "top 35%",
					end: "top 5%",
					scrub: true,
				},
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
			className=" flex relative justify-between items-start gap-2"
		>
			<div className=" flex flex-col gap-10">
				<h3 className="text-3xl" >
					{item.name}
				</h3>
				<h1>{item.desc}</h1>
			</div>
			<Image
				src={item.img}
				height={1000}
				width={1000}
				alt="image"
				ref={circleRef}
				className="h-24 object-cover w-24 rounded-full flex-shrink-0  bg-black"
			/>
		</div>
	);
};

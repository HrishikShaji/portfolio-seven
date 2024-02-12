"use client";
import { useGSAP } from "@gsap/react";
import { data } from "../lib/data";
import { useRef } from "react";
import gsap from "gsap";

export const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (contactRef.current && targetRef.current) {
      const height = contactRef.current.getBoundingClientRect().height;
      const headingHeight = targetRef.current.getBoundingClientRect().height;
      gsap.to(targetRef.current, {
        scrollTrigger: {
          trigger: contactRef.current,
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
      <div className="flex w-[60vw]">
        <div ref={targetRef} className="w-[50%] h-full ">
          <h1 className="text-6xl text-black">Contact</h1>
        </div>
        <div ref={contactRef} className="w-[50%] h-full flex gap-20 flex-col">
          <p className="text-3xl">{`
						Ready to bring your web project to life? Whether you're a small
						business owner, startup founder, or creative entrepreneur, I'm here
						to collaborate and turn your vision into a stunning reality. Feel
						free to reach out to discuss your project, ask questions, or just
						say hello. I'm available for freelance web development work and
						would love to hear from you. Let's make something amazing together.
					`}</p>
          <form className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <label className="text-2xl">NAME</label>
              <input />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-2xl">EMAIL</label>
              <input />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-2xl">MESSAGE</label>
              <textarea />
            </div>
            <button>SEND</button>
          </form>
          <div>
            <h1>{`Email: YourEmail@example.com`}</h1>
            <h1>
              {`

Phone: +1 (XXX) XXX-XXXX
`}
            </h1>
            <h1>
              {` 

						Location: [Your City, Your Country]
`}
            </h1>
            <h1>
              {`


LinkedIn: Your LinkedIn Profile
							`}
            </h1>

            <h1>{`

GitHub: Your GitHub Profile
						`}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

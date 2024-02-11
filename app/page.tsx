"use client";
import Image from "next/image";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Testimonials } from "./components/Testimonials";
import { Features } from "./components/Features";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Features />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  );
}

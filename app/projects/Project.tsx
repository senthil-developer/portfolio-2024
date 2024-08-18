"use client";

import Image from "next/image";

import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";

export type projectProps = {
  id: string;
  title: string;
  description: string;
  websiteLink: string;
  githubLink: string;
  img: string;
  techStack: string[];
};

export const Project = () => {
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [scrollWidth, setScrollWidth] = useState<number>(0);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (sectionRef.current) {
      setScrollWidth(sectionRef.current.scrollWidth);
    }
  }, [sectionRef.current]);

  useGSAP(() => {
    if (triggerRef.current && sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        {
          x: 0,
        },
        {
          x: `-${scrollWidth - scrollWidth / 10}px`,
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top 5%",
            end: () => `+=${scrollWidth}`,
            scrub: 1,
            pin: true,
          },
        },
      );
    }
  }, [scrollWidth]);

  return (
    <div>
      <div className="overflow-hidden p-4" ref={triggerRef}>
        <h1 className="title">Projects</h1>

        <div
          className="mt-4 flex h-full w-full gap-5 text-black"
          ref={sectionRef}
        >
          {projects.map((project, index) => (
            <div
              className="relative z-10 flex h-[80vh] w-[90%] shrink-0 flex-col overflow-hidden rounded-md p-4 before:absolute before:inset-0 before:-z-10 before:size-full before:bg-[linear-gradient(to_right_top,#d16ba5,#c777b9,#ba83ca,#aa8fd8,#9a9ae1,#8aa7ec,#79b3f4,#69bff8,#52cffe,#41dfff,#46eefa,#5ffbf1)] before:blur max-md:justify-center md:flex-row md:items-center"
              key={index}
            >
              <div className="flex h-[60%] w-full flex-col justify-between gap-6 py-4 text-base md:w-[40%]">
                <div className="space-y-4">
                  <h2>
                    Project : <strong>{project.title}</strong>
                  </h2>
                  <p>
                    <span className="block text-gray-600">Description :</span>
                    {project.description}
                  </p>
                </div>
                <div className="flex w-full flex-wrap gap-2">
                  <span className="block w-full">Tech Stack :</span>
                  {project.techStack.map((keyword, index) => (
                    <div
                      className="cursor-default rounded-full bg-green-300 bg-opacity-70 p-1 px-3 transition-all duration-200 hover:bg-opacity-100"
                      key={index}
                    >
                      {keyword}
                    </div>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    className="w-fit rounded-full bg-cyan-500 bg-opacity-70 p-1 px-3 transition-all hover:bg-opacity-100"
                  >
                    source code
                  </Link>
                  <Link
                    href={project.websiteLink}
                    target="_blank"
                    className="w-fit rounded-full bg-cyan-500 bg-opacity-70 p-1 px-3 transition-all hover:bg-opacity-100"
                  >
                    View Project
                  </Link>
                </div>
              </div>
              <div className="relative h-[60%] w-full rounded-lg md:w-[60%]">
                <Image
                  fill
                  src={project.img}
                  alt={project.title}
                  className="size-full rounded-inherit object-contain md:object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const projects: projectProps[] = [
  {
    id: "1",
    title: "Twitter Clone",
    description:
      "A social media platform mimicking Twitter's features, allowing users to post, follow, and interact with tweets.",
    githubLink: "https://github.com/senthil-developer/twitter-clone",
    websiteLink: "https://frontend-twitter.netlify.app",
    img: "/project/twitter.jpg",
    techStack: [
      "Next.js",
      "Express.js",
      "MongoDB",
      "TypeScript",
      "Cloudinary",
      "React Query",
      "Middleware",
      "React hook form",
      "Zod",
    ],
  },
  {
    id: "2",
    title: "Movie Universe",
    description:
      "A comprehensive movie database app providing detailed information about movies, actors, and directors, similar to IMDb.",
    githubLink: "https://github.com/senthil-developer/movies",
    websiteLink: "https://movieuniverse-nextjs.netlify.app",
    img: "/project/movie-universe.jpg",
    techStack: ["Next.js", "Framer Motion"],
  },
  {
    id: "3",
    title: "Miro",
    description:
      "A collaborative whiteboard application for creating, sharing, and managing whiteboards in real-time.",
    githubLink: "https://github.com/senthil-developer/miro",
    websiteLink: "https://miro-nextjs14.vercel.app",
    img: "/project/miro.jpg",
    techStack: [
      "Next.js",
      "TypeScript",
      "Convex",
      "LiveBlock",
      "Clerk Auth",
      "Framer Motion",
    ],
  },
  {
    id: "4",
    title: "E-commerce",
    description:
      "An online store application featuring a variety of products filters for user engagement.",
    githubLink: "https://github.com/senthil-developer/react-e-commerce",
    websiteLink: "https://react-filter-e-commerce.netlify.app/",
    img: "/project/e-commerce.jpg",
    techStack: ["React.js", "TypeScript"],
  },
  {
    id: "5",
    title: "Face Animate",
    description:
      "A 3D face animation application that uses various effects and filters to animate facial expressions.",
    githubLink: "https://github.com/senthil-developer/THREEJS-MEDIAPIPE",
    websiteLink: "https://threejs-mediapipe.vercel.app",
    img: "/project/threejs-mediapipe.jpg",
    techStack: [
      "Next.js",
      "TypeScript",
      "Three.js",
      "React Three Fiber",
      "React WebCam",
    ],
  },
  {
    id: "6",
    title: "Image AI Hub",
    description:
      "An AI-powered platform for Redesign your Image in seconds Using AI",
    githubLink: "https://github.com/senthil-developer/AI_IMAGE_GENERATOR",
    websiteLink: "https://imageaihub.vercel.app/",
    img: "/project/image-ai-hub.jpg",
    techStack: ["Next.js", "TypeScript", "Clerk", "Zod", "Zustand"],
  },
  {
    id: "7",
    title: "Image Reveal",
    description:
      "An interactive tool designed to reveal images in engaging and visually creative ways.",
    githubLink: "https://github.com/senthil-developer/image-reveal-animation",
    websiteLink: "https://image-reveal-animation-js.netlify.app/",
    img: "/project/image-reveal.jpg",
    techStack: ["Vanilla JavaScript", "GSAP"],
  },
  {
    id: "8",
    title: "Infinite Scroll",
    description:
      "A web application featuring infinite scrolling for smooth and continuous content loading as users scroll.",
    githubLink:
      "https://github.com/senthil-developer/infinite-scroll-animation",
    websiteLink: "https://infinite-scroll-animation-js.netlify.app/",
    img: "/project/infinite-scroll.jpg",
    techStack: ["Vanilla JavaScript", "GSAP", "Intersection Observer API"],
  },
  {
    id: "9",
    title: "Monster Energy",
    description:
      "A 3D website for Monster Energy featuring interactive elements and engaging animations.",
    githubLink:
      "https://github.com/senthil-developer/monster-energy-drink-3d-landing-page",
    websiteLink: "https://monster-drink.netlify.app/",
    img: "/project/monster-energy.jpg",
    techStack: ["React.js", "TypeScript", "GSAP", "Framer Motion"],
  },
];

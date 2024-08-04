import { Metadata } from "next";
import Skill from "@/components/Skill";
import { BackgroundGradient } from "@/components/ui/backgroundGradient";
import PLaceHolderComponent from "@/components/PLaceHolderComponent";
import { Suspense } from "react";

import html from "@/public/skill/html.png";
import react from "@/public/skill/reactJs.png";
import css from "@/public/skill/css.png";
import scss from "@/public/skill/scss.png";
import js from "@/public/skill/js.png";
import nextJs from "@/public/skill/nextJs.png";
import zustand from "@/public/skill/zustand.png";
import blender from "@/public/skill/blender.png";
import threeJs from "@/public/skill/threeJs.png";
import redux from "@/public/skill/redux.png";
import ts from "@/public/skill/ts.png";
import tailwind from "@/public/skill/tailwind.png";
import socketIo from "@/public/skill/socketIo.png";
import git from "@/public/skill/git.png";

export const metadata: Metadata = {
  title: "Skills",
  description: "SkillsPage",
  icons: {
    icon: "/next.svg",
  },
};

const SkillsPage = () => {
  const skills = [
    { icon: "/skill/html.png", name: "HTML", placeholder: html },
    { icon: "/skill/css.png", name: "CSS", placeholder: css },
    { icon: "/skill/scss.png", name: "SCSS", placeholder: scss },
    { icon: "/skill/tailwind.png", name: "Tailwind", placeholder: tailwind },
    { icon: "/skill/js.png", name: "JavaScript", placeholder: js },
    { icon: "/skill/ts.png", name: "TypeScript", placeholder: ts },
    { icon: "/skill/reactJs.png", name: "React JS", placeholder: react },
    { icon: "/skill/nextJs.png", name: "Next Js", placeholder: nextJs },
    { icon: "/skill/threeJs.png", name: "Three Js", placeholder: threeJs },
    { icon: "/skill/redux.png", name: "Redux", placeholder: redux },
    { icon: "/skill/zustand.png", name: "Zustand", placeholder: zustand },
    { icon: "/skill/socketIo.png", name: "Socket Io", placeholder: socketIo },
    { icon: "/skill/blender.png", name: "Blender", placeholder: blender },
    { icon: "/skill/git.png", name: "Git", placeholder: git },
  ];
  return (
    <div className="flex h-full w-full  flex-col gap-2">
      <h1 className="mb-7 mt-2 w-fit -rotate-6 border-b-4 border-green-400 text-4xl font-bold sm:ml-8 lg:mb-0">
        Skills
      </h1>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {skills.map((skill, i) => {
          return (
            <BackgroundGradient
              key={i}
              className="flex h-fit w-[200px] flex-col gap-3 rounded-[22px] bg-zinc-950 p-4 text-center"
              animate={true}
            >
              <Suspense
                fallback={
                  <PLaceHolderComponent
                    className={"size-40 "}
                    url={skill.placeholder}
                  />
                }
              >
                <Skill url={skill.icon} />
              </Suspense>
              <div className="text-lg text-white">
                <h3>{skill.name}</h3>
              </div>
            </BackgroundGradient>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsPage;

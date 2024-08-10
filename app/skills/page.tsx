import { Metadata } from "next";
import { BackgroundGradient } from "@/components/ui/backgroundGradient";
import dynamic from "next/dynamic";

import html from "@/public/skill/html.png";
import react from "@/public/skill/reactJs.png";
import css from "@/public/skill/css.png";
import js from "@/public/skill/js.png";
import nextJs from "@/public/skill/nextJs.png";
import zustand from "@/public/skill/zustand.png";
import blender from "@/public/skill/blender.png";
import threeJs from "@/public/skill/threeJs.png";
import ts from "@/public/skill/ts.png";
import tailwind from "@/public/skill/tailwind.png";
import git from "@/public/skill/git.png";
import nodeJs from "@/public/skill/nodeJS.png";
import mongoDB from "@/public/skill/mongoDB.png";

export const metadata: Metadata = {
  title: "Skills",
  description: "SkillsPage",
  icons: {
    icon: "/next.svg",
  },
};

const SkillsPage = () => {
  const Skill = dynamic(() => import("@/components/Skill"), { ssr: false });

  const skills = [
    { icon: "/skill/html.png", name: "HTML", placeholder: html },
    { icon: "/skill/css.png", name: "CSS", placeholder: css },
    { icon: "/skill/tailwind.png", name: "Tailwind", placeholder: tailwind },
    { icon: "/skill/js.png", name: "JavaScript", placeholder: js },
    { icon: "/skill/ts.png", name: "TypeScript", placeholder: ts },
    { icon: "/skill/nextJs.png", name: "Next Js", placeholder: nextJs },
    { icon: "/skill/reactJs.png", name: "React JS", placeholder: react },
    { icon: "/skill/threeJs.png", name: "Three Js", placeholder: threeJs },
    { icon: "/skill/nodeJS.png", name: "Node Js", placeholder: nodeJs },
    { icon: "/skill/mongoDB.png", name: "Mongo DB", placeholder: mongoDB },
    { icon: "/skill/zustand.png", name: "Zustand", placeholder: zustand },
    { icon: "/skill/blender.png", name: "Blender", placeholder: blender },
    { icon: "/skill/git.png", name: "Git", placeholder: git },
  ];
  return (
    <div className="flex h-full w-full flex-col gap-2">
      <h1 className="title">Skills</h1>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {skills.map((skill, i) => {
          return (
            <BackgroundGradient
              key={i}
              className="z-50 flex h-fit w-[200px] flex-col gap-3 rounded-[22px] bg-zinc-950 p-4 text-center"
              animate={true}
            >
              <Skill url={skill.icon} />
              <div className="select-none text-lg text-white">
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

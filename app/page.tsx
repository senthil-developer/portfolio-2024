import MotionDiv from "@/components/MotionDiv";
import CanvaScene from "@/components/Scene";
import Link from "next/link";

export default async function Home() {
  const variants = {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,

      opacity: 1,
    },
    transition: {
      duration: 1,
    },
  };

  return (
    <MotionDiv className="h-full" {...variants}>
      <div className="flex h-full w-full flex-col items-center justify-center lg:flex-row">
        {/* CANVAS CONTAINER */}
        <div className="h-[50%] w-full lg:h-full lg:w-[50%]">
          <CanvaScene />
        </div>

        {/* TEXT CONTAINER */}
        <div className="flex flex-col justify-center gap-8 lg:h-full lg:w-1/2">
          {/* TITLE */}
          <h1 className="text-4xl font-bold md:text-6xl">Crafting</h1>
          {/* DESC */}
          <p className="md:text-xl">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>

          {/* BUTTONS */}
          <div className="flex w-full gap-4">
            <LinkButton link="/project" title="View My Work" />
            <LinkButton link="/contact" title="Contact Me" />
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}

const LinkButton = ({ link, title }: { link: string; title: string }) => {
  return (
    <Link href={link}>
      <button className="rounded-full bg-black p-4 text-white dark:bg-white dark:text-black">
        {title}
      </button>
    </Link>
  );
};

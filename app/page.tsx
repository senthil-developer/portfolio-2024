import MotionDiv from "@/components/MotionDiv";
import CanvaScene from "@/components/Scene";

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
        <div className="flex flex-col justify-center gap-8 max-lg:px-4 lg:h-full lg:w-1/2">
          {/* TITLE */}
          <h1 className="text-4xl font-bold md:text-6xl">Hi,</h1>
          {/* DESC */}
          <p className="md:text-xl">
            Recent graduate with expertise in React, TypeScript, and Next.js,
            along with hands-on experience in Three.js for 3D graphics.
            Proficient in Sass, Bootstrap, Tailwind CSS, and GSAP for styling
            and animations. Passionate about crafting engaging web experiences
            and eager to apply my skills to innovative front-end and full-stack
            projects.
          </p>

          {/* BUTTONS */}
          <div className="flex w-full gap-4">
            <LinkButton
              link="/senthil-resume.pdf"
              title="Resume"
              download="senthil-resume.pdf"
            />
            <LinkButton link="/contact" title="Contact Me" />
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}

const LinkButton = ({
  link,
  title,
  download,
}: {
  link: string;
  title: string;
  download?: string;
}) => {
  return (
    <a href={link} download={download}>
      <button className="rounded-full bg-black p-4 text-white dark:bg-white dark:text-black">
        {title}
      </button>
    </a>
  );
};

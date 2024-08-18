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
        <div className="flex flex-col justify-center gap-8 lg:h-full lg:w-1/2">
          {/* TITLE */}
          <h1 className="text-4xl font-bold md:text-6xl">Hi,</h1>
          {/* DESC */}
          <p className="md:text-xl">
            Welcome to my digital portfolio, where frontend innovation meets
            elegant design. With a strong foundation in crafting intuitive user
            interfaces and a deep understanding of modern web technologies, my
            work exemplifies a commitment to delivering exceptional user
            experiences. Explore my projects to see how I blend creativity with
            technical prowess to bring captivating and functional digital
            experiences to life.
          </p>

          {/* BUTTONS */}
          <div className="flex w-full gap-4">
            <LinkButton
              link="/linkedin.png"
              title="Resume"
              download="senthil-resume.png"
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

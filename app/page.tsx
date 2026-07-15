import MotionDiv from "@/components/MotionDiv";
import CanvaScene from "@/components/Scene";
import { Download } from "lucide-react";
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
      <div className="flex h-full w-full flex-col items-center justify-center md:flex-row">
        {/* CANVAS CONTAINER */}
        <div className="h-[50%] w-full md:h-full md:w-[50%]">
          <CanvaScene />
        </div>

        {/* TEXT CONTAINER */}
        <div className="flex flex-col justify-center gap-8 max-lg:px-4 md:h-full md:w-1/2">
          {/* TITLE */}
          <h1 className="text-4xl font-bold md:text-6xl">Hi,</h1>
          {/* DESC */}
          <p className="md:text-xl">
            Software Engineer with 1.8 years of experience building scalable web applications and enterprise software across
            frontend and backend systems. Experienced in developing high-performance React and Next.js applications,
            architecting secure APIs with Node.js and AWS serverless services, and optimizing large-scale data-intensive
            interfaces handling thousands of records. Skilled in TypeScript, PostgreSQL, DynamoDB, Docker, and modern cloud-
            native development, with a strong focus on performance, scalability, maintainable architecture, and delivering
            production-ready software for enterprise clients.
          </p>

          {/* BUTTONS */}
          <div className="flex w-full gap-4">
            <a
              href="/senthil_resume.pdf"
              download="senthil_resume.pdf"
              className="flex items-center gap-2 rounded-full bg-black p-1 px-2 text-white dark:bg-white dark:text-black"
            >
              Resume
              <Download size={20} />
            </a>
            <Link
              href="/contact"
              title="Contact Me"
              className="rounded-full bg-black p-1 px-2 text-white dark:bg-white dark:text-black"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}

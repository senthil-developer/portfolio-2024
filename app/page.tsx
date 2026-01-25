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
            Software Engineer with 1.4 years of experience building
            high-performance, scalable web applications. Strong background in
            React, Next.js, and TypeScript, with hands-on experience optimizing
            large, data-intensive UIs and designing secure backend services.
            Proven ability to architect reliable data flows, improve performance
            at scale, and deliver production-ready solutions using Node.js, AWS,
            DynamoDB, and PostgreSQL. Passionate about clean engineering, system
            design, and building maintainable, user-centric products.
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

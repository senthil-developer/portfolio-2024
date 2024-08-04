import { HoverEffect } from "@/components/ui/card-hover-effect";

export type projectProps = {
  id: string;
  title: string;
  description: string;
  link: string;
  img?: string | URL;
  keywords?: string;
}[];

const Page = () => {
  return (
    <div className="flex h-full w-full  flex-col gap-2">
      <h1 className="mb-7 mt-2 w-fit -rotate-6 border-b-4 border-green-400 text-4xl font-bold hover:-rotate-12 hover:transition-all hover:duration-300 sm:ml-8 lg:mb-0">
        Projects
      </h1>

      <div className="mx-auto w-full px-8">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
};

export default Page;

export const projects: projectProps = [
  {
    id: "1",

    title: "Movie universe",
    description:
      "A movie app that provides information about movies, actors, directors, and more,just like imdb",
    link: "/projects/1",
    img: "/project1.png",
    keywords: "movie,app,imdb",
  },

  {
    id: "2",
    title: "Miro",
    description:
      "A complete whiteboards application that allows you to create, collaborate, and share whiteboards.",
    link: "/projects/2",
    img: "/project1.png",
    keywords: "movie,app,imdb",
  },
  {
    id: "3",
    title: "Face animate",
    description:
      "A face animation app that allows you to 3D animate your face with different effects, like a filter",
    link: "/projects/3",
    img: "/project1.png",
    keywords: "movie,app,imdb",
  },
  {
    id: "4",
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "/projects/4",
    img: "/project1.png",
    keywords: "movie,app,imdb",
  },
];

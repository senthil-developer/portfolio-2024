import { Metadata } from "next";
import { Project } from "./Project";

export const metadata: Metadata = {
  title: "Project",
  description: "Project Page",
};

const Page = () => {
  return (
    <div className="h-full w-full">
      <Project />
    </div>
  );
};

export default Page;

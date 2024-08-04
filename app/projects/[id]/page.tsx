import { Metadata } from "next";
import { projects } from "../page";
type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const id = params.id;
  const project = projects.find((project) => project.id === id);

  return {
    title: project?.title,
    description: project?.description,
    keywords: ["hello", "world"],
    icons: {
      icon: project?.img,
    },
  };
}
const ProjectIDPage = ({ params }: Props) => {
  const { id } = params;
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h1 className=""> {id} page </h1>
    </div>
  );
};

export default ProjectIDPage;

"use client";

import PLaceHolderComponent from "@/components/PLaceHolderComponent";
import Scene from "@/components/NotFoundCanvaPage";
import { Suspense } from "react";
import PlaceHolder from "@/public/pageNotFound.png";
import light404 from "@/public/light404.png";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme } = useTheme();
  return (
    <main className="0 relative h-screen dark:pt-1">
      <Suspense
        fallback={
          <PLaceHolderComponent
            url={theme === "light" ? light404 : PlaceHolder}
            className="size-full"
          />
        }
      >
        <Scene />
      </Suspense>
    </main>
  );
}

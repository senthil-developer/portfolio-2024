"use client";

import Link from "next/link";
import SocialLinks from "@/links.json";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

type Props = {};

const MobileNav = (props: Props) => {
  const path = usePathname();
  const link = SocialLinks.links;

  const [isOpen, setIsOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <button
        className="relative z-[1] flex h-8 w-9 flex-col justify-between "
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <motion.div
          variants={topVariants}
          animate={isOpen ? "opened" : "closed"}
          className={cn(
            "h-1 w-10 origin-left rounded",
            !isOpen ? "bg-black dark:bg-white" : "bg-black dark:bg-white",
          )}
        ></motion.div>
        <motion.div
          variants={centerVariants}
          animate={isOpen ? "opened" : "closed"}
          className="h-1 w-10 rounded bg-black dark:bg-white"
        ></motion.div>
        <motion.div
          variants={bottomVariants}
          animate={isOpen ? "opened" : "closed"}
          className={cn(
            "h-1 w-10 origin-left rounded",
            !isOpen ? "bg-black dark:bg-white" : "bg-black dark:bg-white",
          )}
        ></motion.div>
      </button>

      {isOpen && (
        <motion.div
          variants={listVariants}
          initial="closed"
          animate="opened"
          className="absolute left-0 top-0 flex h-screen  w-screen flex-col items-center justify-center gap-8 bg-white text-4xl dark:bg-black"
        >
          {link.map((item) => (
            <motion.div
              variants={listItemVariants}
              className={cn(
                "",
                path === item.name.toLowerCase() && "te xt-orange-950",
              )}
              key={item.name}
            >
              <Link
                href={item.link}
                className={cn(
                  "hover:text-opacity-65 ",
                  path === item.link &&
                    "text-orange-500 hover:text-opacity-100",
                )}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default MobileNav;

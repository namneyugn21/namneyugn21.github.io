"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "../../utils/cn.ts";


export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "hidden sm:flex max-w-fit fixed top-10 inset-x-0 mx-auto border-[0.5px] border-[rgba(255,255,255,0.5)] dark:border-white/[0.5] rounded-full dark:bg-[rgb(25,69,79)] bg-black shadow-[0_2px_25px_rgba(195,225,255,0.15)] z-[5000] px-8 py-4 items-center justify-center space-x-10",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-300 scale-100 hover:scale-[1.15] transition-transform duration-200 ease-in-out"
            )}
          >
            <span className="hidden sm:block exo2-regular text-[17px]">
              {navItem.name}
            </span>
          </a>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

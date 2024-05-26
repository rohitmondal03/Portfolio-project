"use client"

import { motion } from "framer-motion";

import { PROJECT_DATA } from "@/lib/config";
import { ProjectCard } from "./project-card";


export function ProjectSection() {
  return (
    <motion.section
      className="px-3 sm:px-10 md:py-10 md:px-16 space-y-12 md:space-y-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
    >
      <div className="space-y-3 md:space-y-6">
        <h1 className="text-5xl text-orange-500 dark:text-yellow-500 font-bold text-center ">
          Projects
        </h1>
        <p className="text-center text-md sm:text-xl">
          Highlighted Projects: Showcasing Innovative Websites Driven by NextJS, Prisma ORM, NextAuth.js, TailwindCSS and amazing packages.
        </p>
      </div>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 mx-auto md:gap-x-4 gap-y-6">
        {PROJECT_DATA.map((data) => {
          return (
            <ProjectCard {...data} key={data.id} />
          );
        })}
      </motion.div>
    </motion.section>
  );
}
import Link from "next/link";
import Image from "next/image";
import { GitHubLogoIcon, CursorArrowIcon } from "@radix-ui/react-icons";

import type { TProjectsData } from "@/lib/types";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


export function ProjectCard(data: TProjectsData) {
  return (
    <Card className="w-fit mx-auto rounded-2xl border-4 border-zinc-400" key={data.id}>
      <CardHeader className="text-center">
        <CardTitle className="font-bold text-3xl">
          {data.id}. {data.title}
        </CardTitle>
        <CardDescription className="text-sm sm:text-lg">
          {data.desc}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <Image
          src={data.img}
          alt="project img"
          width={500}
          height={300}
          className="mx-auto rounded-2xl sm:rounded-3xl"
        />
        <ul className="text-left list-disc text-black dark:text-zinc-200 mx-auto space-y-2">
          {data.featuresList.map((items: string) => (
            <li key={items}>{items}</li>
          ))}
        </ul>
        <CardFooter className="flex flex-row justify-center gap-x-6 w-fit mx-auto border-2 border-dotted border-zinc-500 px-3 py-2 rounded-3xl">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href={data.liveLink}
                target="_blank"
              >
                <CursorArrowIcon className="hover:scale-125 transition-all duration-200" />
              </Link>
            </TooltipTrigger>
            <TooltipContent className="bg-black text-white dark:bg-white dark:text-black">
              <p>{data.liveLink}</p>
            </TooltipContent>
          </Tooltip>
          <Separator
            orientation="vertical"
            className="bg-black dark:bg-white h-[20px] m-0 p-0"
          />
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href={data.githubLink}
                target="_blank"
              >
                <GitHubLogoIcon className="hover:scale-125 transition-all duration-200" />
              </Link>
            </TooltipTrigger>
            <TooltipContent className="bg-black text-white dark:bg-white dark:text-black">
              <p>Github link of {data.title}</p>
            </TooltipContent>
          </Tooltip>
        </CardFooter>
      </CardContent>
    </Card>
  )
}
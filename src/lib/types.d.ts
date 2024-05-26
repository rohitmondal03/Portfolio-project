import type { StaticImageData } from "next/image";


export type TLayout = Readonly<{
  children: React.ReactNode;
}>

export type TNavLinks = {
  title: string;
  link: string;
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
}

export type TProjectsData = {
  id: number
  title: string,
  img: StaticImageData,
  desc: string,
  featuresList: Array<string>,
  liveLink: string,
  githubLink: string
}

export type TSocialLinks = {
  title: string,
  icon: LucideIcon,
  link: string
}

export type TCreditLink = {
  redirect: string
  title: string
}
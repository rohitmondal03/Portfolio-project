import {
  GitHubLogoIcon,
  TwitterLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
  ReaderIcon,
} from "@radix-ui/react-icons";

import { TNavLinks, TProjectsData } from "./types";
import { bioSyncImg, opentypedImg } from "./imports";


export const NAV_LINKS: TNavLinks[] = [
  {
    title: 'GitHub',
    icon: GitHubLogoIcon,
    link: "https://github.com/rohitmondal03/"
  },
  {
    title: "Twitter",
    icon: TwitterLogoIcon,
    link: "https://twitter.com/RohitMo62534745"
  },
  {
    title: "LinkedIn",
    icon: LinkedInLogoIcon,
    link: "https://www.linkedin.com/in/rohit-mondal-61662a16b/"
  },
  {
    title: "Resume",
    icon: ReaderIcon,
    link: "https://flowcv.com/resume/vgsaaqno90",
  },
  {
    title: "Email",
    icon: EnvelopeClosedIcon,
    link: "mailto:rohitmondall8000@gmail.com"
  }
]

export const PROJECT_DATA: Array<TProjectsData> = [
  {
    id: 1,
    title: "OpenTyped",
    img: opentypedImg,
    desc: "Your Gateway to Open-source projects",
    featuresList: [
      "Built 'OpenTyped' with Next.js (and Typescript), Prisma, and NextAuth for seamless open-source project listing, enhancing the developer community's resource access.",
      "Leveraged Railway for efficient database management, ensuring data integrity in 'OpenTyped', a platform for project discovery.",
      "With 'OpenTyped', I aimed to facilitate collaboration by providing a user-friendly hub for open source projects, fostering a dynamic development ecosystem.",
    ],
    githubLink: "https://github.com/rohitmondal03/opentyped",
    liveLink: "https://opentyped-nextjs.vercel.app"
  },
  {
    id: 2,
    title: "BioSync",
    img: bioSyncImg,
    desc: "A website to create onlien personal links and share it with anyone",
    featuresList: [
      "Leveraged NextJS and its easy to use route handlers, server-actions and opengraph for seamless user experience.",
      "Used TailwindCSS and shadcnUI for styling and pre-made components",
      "For databases operations, Prisma ORM is used, which provides easy-to-use and javascript-friendly APIs for developers.",
      "Used Supabase, which is a postgresql Backend-as-a-service, for storing data of users and authentications details."
    ],
    githubLink: "https://github.com/rohitmondal03/Bio-Sync",
    liveLink: "https://bio-sync.vercel.app/",
  },
]
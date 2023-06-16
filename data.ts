import { IProject, ISkills, INavItem } from "./type";

export const NAV_ITEMS: INavItem[] = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
];

export const skills: ISkills[] = [
  {
    skill: "HTML",
  },
  {
    skill: "CSS",
  },
  {
    skill: "Javascript",
  },
  {
    skill: "React JS",
  },
  {
    skill: "Next JS",
  },
  {
    skill: " Typescript",
  },
  {
    skill: "Tailwind",
  },
  {
    skill: "Github",
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "Nevo-clothing",
    description:
      "Nevo-clothing is an online store where you can get quality adults clothes without stresss.",
    image: "/assets/projects/nevo-clothing.png",
    github: "https://github.com/wasami-martins/nevo-clothing",
    link: "https://nevo-clothing.vercel.app/",
  },
  {
    id: 2,
    name: "mShop",
    description:
      "mShop is a one-stop shop where you can buy everything you need at afford prices.",
    image: "/assets/projects/mShop.png",
    github: "https://github.com/wasami-martins/mShop",
    link: "https://mshops.vercel.app/",
  },
  {
    id: 3,
    name: "Clean Juice Landing Page",
    description:
      "clean juice is an animated website built using react Js and tailwindCss.",
    image: "/assets/projects/clean-juice.png",
    github: "https://github.com/wasami-martins/clean-juice",
    link: "https://clean-juice.vercel.app/",
  },
  {
    id: 4,
    name: "Crypto hub",
    description:
      "This is a business where you get the latest update on crypto market and prices.",
    image: "/assets/projects/crypto.png",
    github: "https://github.com/wasami-martins/crypto-hub",
    link: "https://crypto-hubs.netlify.app/",
  },
];

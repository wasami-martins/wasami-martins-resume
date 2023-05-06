export interface INavItem {
  label: string;
  page: string;
}

export interface ISkills {
  skill: string;
}

export interface IProject {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
  github: string;
}

export type Category = "react" | "next";

import { ProjectType } from "../types/ProjectType";

export const projects: ProjectType[] = [
  {
    name: "Fullstack CRUD",
    techs: ["devicon-react-original", "devicon-express-original", "devicon-typescript-original", "devicon-sass-original", "devicon-mongodb-plain"],
    images: [
      "/utils/img/projects/fs1.png",
      "/utils/img/projects/fs2.png",
      "/utils/img/projects/fs3.png",
    ],
    repo: "https://github.com/YuriLRodrigues/First-Fullstack-Project",
    deploy: "https://first-fs-project-with-hookform-zod.vercel.app/"
  },
  {
    name: "Portfólio",
    techs: ["devicon-react-original", "devicon-typescript-original", "devicon-tailwindcss-plain"],
    images: [
      "/utils/img/projects/portfolio1.png",
      "/utils/img/projects/portfolio2.png",
      "/utils/img/projects/portfolio3.png",
    ],
    repo: "",
    deploy: ""
  },
  {
    name: "PokeReact",
    techs: ["devicon-react-original", "devicon-sass-original"],
    images: [
      "/utils/img/projects/poke1.png",
      "/utils/img/projects/poke2.png",
      "/utils/img/projects/poke3.png",
    ],
    repo: "https://github.com/YuriLRodrigues/Pokedex-Api-React",
    deploy: "https://pokedex-api-react-six.vercel.app/"
  },
  {
    name: "Ecommerce ML",
    techs: ["devicon-react-original", "devicon-sass-original"],
    images: [
      "/utils/img/projects/ecommerce1.png",
      "/utils/img/projects/ecommerce2.png",
      "/utils/img/projects/ecommerce3.png",
    ],
    repo: "https://github.com/YuriLRodrigues/Pokedex-Api-React",
    deploy: "https://mercado-livre-react.vercel.app/"
  }
];

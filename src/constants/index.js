import {
    css,
    git,
    html,
    java,
    javascript,
    mysql,
    nodejs,
    reactjs,
    tailwind,
    threejs,
    django,
    php
    
} from '../assets'

export const navLinks = [
  {
    id: "AboutMe",
    title: "About",
  },
  {
    id: "Skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
];

const technologiesAtWork = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "mysql",
      icon: php,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];

  const technologiesForFun = [
    {
      name: "threejs",
      icon: threejs,
    },
    {
      name: "django",
      icon: django,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "React JS",
      icon: reactjs,
    }
  ];

export {
  technologiesAtWork,
  technologiesForFun,
}
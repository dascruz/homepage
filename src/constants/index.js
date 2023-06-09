import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  piano,
  start,
  prod,
  helpmap,
  mario,
  blog,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Data Engineer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Creative Artist",
    icon: creator,
  },
];

const technologies = [
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
    name: "TypeScript",
    icon: typescript,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Start UC3M",
    icon: start,
    iconBg: "#383E56",
    date: "Oct 2022 - Present",
    points: [
      "Developed and maintained 3+ websites using HTML5, CSS3 and JavaScript.",
      "Collaborated with 5+ cross-functional teams including marketing, finance, and other developers to create amazing events.",
      "Implemented responsive design and ensured cross-browser compatibility.",
      "Participated in code reviews providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Audio Production Teacher",
    company_name: "Private Lessons",
    icon: prod,
    iconBg: "#383E56",
    date: "Feb 2019 - May 2021",
    points: [
      "Taught private lessons of the basics of audio production in Ableton Live.",
      "Helped 3+ creative artists achieve their goals through the use of digital audio workstations.",
      "Laid the foundations for learning advanced audio mixing and mastering techniques.",
    ],
  },
  {
    title: "Pianist",
    company_name: "Conservatorio Profesional de Música Rodolfo Halffter",
    icon: piano,
    iconBg: "#383E56",
    date: "Sep 2018 - May 2021",
    points: [
      "Developed an extensive repertoire of 20+ classical music pieces.",
      "Gave quarterly recitals in collaboration with fellow musicians.",
      "Leaded the school choir along with teachers and gave annual concerts for 200+ people.",
    ],
  },
];

const projects = [
  {
    name: "HelpMap",
    description:
      "An interactive map of war-affected areas that shows events and resources to civilians near the location.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "nestjs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: helpmap,
    source_code_link: "https://github.com/dascruz/helpmap/",
  },
  {
    name: "Super Mario Bros Revisited",
    description:
      "A Super Mario Bros level 1-1 clone made with Python and Pyxel game engine.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pyxel",
        color: "green-text-gradient",
      },
    ],
    image: mario,
    source_code_link: "https://github.com/dascruz/mario-bros-revisited/",
  },
  {
    name: "Tech Blog",
    description:
      "A technical blog on my learning journey of software engineering and deep learning .",
    tags: [
      {
        name: "hugo",
        color: "blue-text-gradient",
      },
      {
        name: "git",
        color: "green-text-gradient",
      },
      {
        name: "markdown",
        color: "pink-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/dascruz/dascruz.github.io/",
  },
];

export { services, technologies, experiences, projects };

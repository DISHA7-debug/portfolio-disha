import {
  mobile,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  carrent,
  jobit,
  tripguide,
  threejs,
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

export const hero = {
  name: "Disha Chopra",
  tagline: "I craft sleek UIs and build smooth frontend experiences.",
};

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "UI Designer",
    icon: mobile,
  },
  {
    title: "Web Animator",
    icon: creator,
  },
  {
    title: "Open Source Contributor",
    icon: web,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Joint Head - Technical Projects",
    company_name: "IEEE MUJ",
    icon: web,
    iconBg: "#E6DEDD",
    date: "May 2025 – Present",
    points: [
      "Leading technical web development projects.",
      "Mentoring junior devs and managing project flow.",
    ],
  },
  {
    title: "Junior Web Team Member",
    company_name: "IEEE MUJ",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "Dec 2024 – May 2025",
    points: [
      "Contributed to the official IEEE website and dashboards.",
      "Worked on React-based frontend for events.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "ACM MUJ",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "Sep 2024 – Feb 2025",
    points: [
      "Created responsive pages for internal tools.",
      "Improved UI/UX using Tailwind and component libraries.",
    ],
  },
];

const projects = [
  {
    name: "Job IT",
    description:
      "Web app that allows users to search for jobs, view salary ranges, and locate available positions based on location.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "nodejs", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A travel booking platform that allows users to browse and book trips, with recommendations and custom itineraries.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
   {
    name: "Car Rent",
    description:
      "Car rental web application that allows users to book, rent, and manage car rentals with real-time availability and filters.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
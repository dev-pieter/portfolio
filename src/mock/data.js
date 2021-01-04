import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Pieter | Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Pieter Nortje',
  subtitle: 'Welcome to my Developer Portfolio.',
  cta: 'About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'pieter2.jpg',
  paragraphOne: 'A passionate programmer with a mind for creating innovative and efficient code through the utilization of object orientated methods. I am an independent individual, able to follow established procedures and work under little to no supervision.',
  paragraphTwo: 'I am a student at the university of pretoria (second year level) studying towards a degree in Bsc IT. ',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1b6IEE-8cwGHSyKBxx1OksWqr-xbH-CoV/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'email',
  email: 'pieter_nortje@outlook.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

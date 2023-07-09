import { Projectcard } from "../components";
import {Reveal} from '../utils'

import profilepic from '../assets/Profilepic.jpg';
import profilepic2 from '../assets/Profilepic2.jpg';

const Projects = () => {
  return (
    <section className="max-w-5xl mx-auto my-20" id="projects">
      <Reveal>
        <p className='text-5xl font-extrabold text-white py-2'>Projects<span className='text-yellow-300'>.</span></p>
      </Reveal>

      <div className='grid grid-cols-2 gap-12 mt-10'>
        {projects.map((project) => {
          return <Projectcard key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Neura 2023",
    imgSrc: [profilepic, profilepic2, profilepic, profilepic2],
    code: "https://www.github.com",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: [
      {
        name: "react",
        color: "text-yellow-300",
      },
      {
        name: "framer",
        color: "text-yellow-300",
      },
      {
        name: "tailwind",
        color: "text-yellow-300",
      },
    ],  
    description: "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.",
    modalContent: (
      <>
        <p>
          Pain.app is a real-time coaching app for students learning to paint.
          This app is my baby, designed and built on my own.
        </p>
        <p>
          The tech stack is based on top of Flutter for the mobile app,
          connected to a Python & FastAPI backend, with data stored in Postgres,
          deployed on Heroku.
        </p>
        <p>
          Because this isn&apos;t real, here&apos;s some gibberish to fill space{" "}
          {":)"}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
    deg : "2deg",
  },
  {
    title: "ERP",
    imgSrc: [profilepic, profilepic, profilepic, profilepic],
    code: "https://www.github.com",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: [
      {
        name: "PHP",
        color: "text-yellow-300",
      },
      {
        name: "MySQL",
        color: "text-yellow-300",
      },
      {
        name: "JS",
        color: "text-yellow-300",
      },
    ],      
    description:"A social community for painters to connect with others in their community. I handle everything backend (50K monthly active users).",
    modalContent: (
      <>
        <p>
          The Canvas Club is a social community for painters to connect with
          others in their community.
        </p>
        <p>
          I work primarily on the backend, a collection of Node & Express
          microservices. Data is stored primarily in Postgres & cached in Redis.
        </p>
        <p>
          The team in total consists of 5 developers. This is a passion project
          for all of us.
        </p>
        <p>
          Because this isn&apos;t real, here&apos;s some gibberish to fill space{" "}
          {":)"}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
    deg : "2deg",
  },
  {
    title: "To-Do List",
    imgSrc: [profilepic, profilepic, profilepic, profilepic],
    code: "https://www.github.com",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: [
      {
        name: "Django",
        color: "text-yellow-300",
      },
      {
        name: "SQL",
        color: "text-yellow-300",
      },
      {
        name: "tailwind",
        color: "text-yellow-300",
      },
    ],  
    description:"Think Zapier but for paint. Built with a team of four college friends and scaled to > 1 billion requests per day. This was a fun one.",
    modalContent: (
      <>
        <p>
          Brush wire is essentially Zapier but for paint. Built with a team of
          four college friends and scaled to {">"} 1 billion requests per day.
          This was a fun one.
        </p>
        <p>
          Since &quot;Zapier for paint&quot; doesn&apos;t mean anything, be
          creative {":)"}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
    deg : "2deg",
  },
  {
    title: "Games",
    imgSrc: [profilepic, profilepic, profilepic, profilepic],
    code: "https://www.github.com",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: [
      {
        name: "HTML",
        color: "text-yellow-300",
      },
      {
        name: "CSS",
        color: "text-yellow-300",
      },
      {
        name: "JS",
        color: "text-yellow-300",
      },
    ],  
    description:"I couldn't think of another paint reference app, so here we are. I think you get the idea, right? Use your imagination 🌈",
    modalContent: (
      <>
        <p>Alright, you got me. I&apos;m all out of paint references.</p>
        <p>
          Point is, use this space to explain a bit further WHAT this project
          is, as well as what YOU contributed to it.
        </p>
        <p>You get the idea. Now more lorem {":)"}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
    deg : "2deg",
  },
];

export default Projects
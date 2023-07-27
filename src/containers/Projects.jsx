import { Projectcard } from "../components";
import {Reveal} from '../utils'

import profilepic from '../assets/Profilepic.jpg';
import {expense1, expense2, expense3, expense4, neura1, neura2, neura3, todolist1, todolist2, todolist3} from '../assets'

const Projects = () => {
  return (
    <section className="max-w-5xl mx-auto my-20 scroll-mt-24 px-5" id="projects">
      <Reveal>
        <p className='text-2xl md:text-5xl xl:text-6xl font-extrabold text-white py-2'>Projects<span className='text-yellow-300'>.</span></p>
      </Reveal>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mt-10'>
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
    imgSrc: [neura1, neura3, neura2],
    code: "https://github.com/Vikram0118/Neura",
    projectLink: "https://neura-2k23.netlify.app/",
    tech: [
      {
        name: "React",
        color: "text-yellow-300",
      },
      {
        name: "Framer",
        color: "text-yellow-300",
      },
      {
        name: "Tailwind",
        color: "text-yellow-300",
      },
    ],  
    description: "A national-level technical symposium, providing participants from various colleges across Puducherry and India with event details.",
    modalContent: (
      <>
        <p>
          Neura 2023 is an exciting national-level technical symposium that aims to bring together talented individuals from colleges across Puducherry.
          As a featured website, Neura's platform offers a comprehensive and engaging experience for participants, providing them with all the necessary information about the event.
        </p>
        <p>
        Through the Neura website, participants can explore detailed event schedules, understand the requirements for each contest, and access resources to enhance their preparation. The website's user-friendly interface ensures seamless navigation, enabling participants to register for their desired contests conveniently.
        </p>
      </>
    ),
    deg : "2deg",
  },
  {
    title: "ERP",
    imgSrc: [profilepic, profilepic, profilepic, profilepic],
    code: "https://www.github.com",
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
    imgSrc: [todolist1, todolist2, todolist3],
    code: "https://github.com/Vikram0118/To_Do_List",
    projectLink : "https://projects-tododlist.netlify.app/",
    tech: [
      {
        name: "React",
        color: "text-yellow-300",
      },
      {
        name: "CSS",
        color: "text-yellow-300",
      },
      {
        name: "HTML",
        color: "text-yellow-300",
      },
    ],  
    description:"A sleek and efficient To-Do List built with React and CSS, for organizing tasks efficiently with a user-friendly interface.",
    modalContent: (
      <>
        <p>
        The React CSS Todo List is a powerful yet elegant web application designed to help users manage their tasks and stay organized. Leveraging the capabilities of React and CSS, this feature-rich todo list offers a seamless and intuitive user experience. Users can easily add, edit, and delete tasks with just a few clicks, making it effortless to stay on top of their daily activities.
        </p>
        <p>
        Additionally, the React CSS Todo List utilizes local storage, ensuring that tasks are automatically saved, even if the user closes the browser.
        </p>
      </>
    ),
    deg : "2deg",
  },
  {
    title: "Expense Tracker",
    imgSrc: [expense1, expense2, expense3,expense4],
    code: "https://github.com/Vikram0118/Personal-Finance-App",
    projectLink: "https://projects-expensetracker.netlify.app/",
    tech: [
      {
        name: "React",
        color: "text-yellow-300",
      },
      {
        name: "Tailwind",
        color: "text-yellow-300",
      },
      {
        name: "Context API",
        color: "text-yellow-300",
      },
    ],  
    description:"A user-friendly and visually appealing web application which enables effortless expense tracking and budget management.",
    modalContent: (
      <>
        <p>
        The React Tailwind CSS Expense Tracker is a feature-rich web application that empowers users to effortlessly manage their expenses and keep track of their budgets. With a sleek and visually appealing interface powered by Tailwind CSS, users can enjoy a smooth and immersive experience while staying in control of their finances
        </p>
        <p>
        The integration of Context API for state management ensures seamless data flow and enhanced performance, making it easy to add, edit, and categorize expenses in real-time.
        </p>
      </>
    ),
    deg : "2deg",
  },
];

export default Projects
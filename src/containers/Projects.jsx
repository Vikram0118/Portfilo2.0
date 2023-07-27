import { Projectcard } from "../components";
import {Reveal} from '../utils'
import {expense1, expense2, expense3, expense4, neura1, neura2, neura3, todolist1, todolist2, todolist3, erp1, erp2, erp3, erp4, erp5, erp6} from '../assets'

const Projects = () => {
  return (
    <section className="max-w-5xl mx-auto my-20 scroll-mt-24 px-5" id="projects">
      <Reveal>
        <p className='text-2xl md:text-5xl xl:text-6xl font-extrabold text-white py-2'>Projects<span className='text-main1'>.</span></p>
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
        color: "text-main1",
      },
      {
        name: "Framer",
        color: "text-main1",
      },
      {
        name: "Tailwind",
        color: "text-main1",
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
    imgSrc: [erp1, erp2, erp3, erp4, erp5, erp6],
    // code: "https://www.github.com",
    tech: [
      {
        name: "PHP",
        color: "text-main1",
      },
      {
        name: "MySQL",
        color: "text-main1",
      },
      {
        name: "JS",
        color: "text-main1",
      },
    ],      
    description:"An ERP system for the college's Office of Controller of Examination, automating student enrollment, course registration, and exam registration.",
    modalContent: (
      <>
        <p>
        The created website serves as an ERP (Enterprise Resource Planning) system tailor-made for the Office of Controller of Examination in the college. Its primary function is to streamline and automate various processes related to student enrollment and academic course management.
        </p>
        <p>
          This ERP offers features such as automated student enrollment, institution email ID generation, merit-based Honor/Minor program allotment, timestamp-based Open Elective Course allotment, semester-wise course registration (including 0 credit courses), and end-of-semester exam registration.
        </p>
        <p>
        Overall, the PHP-based ERP system optimizes the administrative tasks of the Office of Controller of Examination, reduces manual efforts, minimizes errors, and enhances the overall efficiency of academic operations in the college. Its user-friendly interface and automation features make it an indispensable tool for managing the complex processes involved in student enrollment and academic course administration.
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
        color: "text-main1",
      },
      {
        name: "CSS",
        color: "text-main1",
      },
      {
        name: "HTML",
        color: "text-main1",
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
        color: "text-main1",
      },
      {
        name: "Tailwind",
        color: "text-main1",
      },
      {
        name: "Context API",
        color: "text-main1",
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
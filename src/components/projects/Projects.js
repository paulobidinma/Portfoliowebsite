import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="FLIGHT BOOKING WEBSITE"
          des="This is a website for a luxury travel agency built with ReactJS, Vite and TailwindCss."
          src={projectOne}
          githubLink="https://github.com/paulobidinma/Flight-booking-react"
          websiteLink="https://flight-booking-react.vercel.app/"

        />
        <ProjectsCard
          title="E-commerce Website"
          des="This is a full stack ecommerce website built with NextJS, Tailwindcss and MongoDB"
          src={projectTwo}
          githubLink="https://github.com/paulobidinma/NextJS-Ecommerce-Website"
          websiteLink="https://next-js-ecommerce-website-eight.vercel.app/"
        />
        
        <ProjectsCard
          title="Admin Dashboard"
          des="This is a analytics dashboard built with ReactJS, Vite and TailwindCss."
          src={projectThree}
          githubLink="https://github.com/paulobidinma/React-Admin-Dashboard-Master"
          websiteLink="https://react-admin-dashboard-master-nu.vercel.app/"
        />
      
      </div>
    </section>
  );
}

export default Projects
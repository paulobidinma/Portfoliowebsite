import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix, projectSeven, projectEight, projectNine ,projectTen} from "../../assets/index";
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
          title="Blogging SaaS application"
          des="This is a SaaS using Next.js, Kinde-Auth, Supabase, Prisma, Stripe, and Tailwind CSS."
          src={projectSeven}
          githubLink="https://github.com/paulobidinma/BlogMarshal"
          websiteLink="https://blog-marshal-coral.vercel.app/"
        />
        
        <ProjectsCard
          title="Car Rental"
          des="This is a website for renting cars built with ReactJS, Vite, Bootstrap and TailwindCss."
          src={projectFour}
          githubLink="https://github.com/paulobidinma/React-Car-Rental"
          websiteLink="https://react-car-rental-ochre.vercel.app/"
        />
        
        <ProjectsCard
          title="Trading Analysis Terminal(UI/UX design)"
          des="This Figma design features a terminal with real-time and historical market data, offering tools to help traders and investors make informed decisions."
          src={projectTen}
          // githubLink="https://github.com/paulobidinma/BlogMarshal"
          websiteLink="https://www.figma.com/design/2xGqppek5XjcwdqgkGH4SH/X-Capital?node-id=0-1&t=ZKAYP2P2cfqoGOzo-1"
        />

        <ProjectsCard
          title="Invoice Platform"
          des="This is a Invoice Platform using Next.js, Mailtrap, Auth.js, Tailwind"
          src={projectThree}
          githubLink="https://github.com/paulobidinma/InvoiceMarshal"
          websiteLink="https://invoice-marshal.vercel.app/"
        />

        <ProjectsCard
          title="Netflix Clone"
          des="This is a clone of the netflix landing page after signing in built with ReactJS, Vite and TailwindCss."
          src={projectOne}
          githubLink="https://vercel.com/paul-obidinmas-projects/netflix-clone"
          websiteLink="https://clone-vert-nu.vercel.app/"

        />
        <ProjectsCard
          title="E-commerce Website"
          des="This is a full stack ecommerce website built with NextJS, Tailwindcss and MongoDB"
          src={projectTwo}
          githubLink="https://github.com/paulobidinma/NextJS-Ecommerce-Website"
          websiteLink="https://next-amazona-v2-final.vercel.app/"
        />

        <ProjectsCard
          title="Banking Website"
          des="This is a website for banking built with Next.js, TypeScript, Appwrite and TailwindCss."
          src={projectFive}
          githubLink="https://github.com/paulobidinma/BankingApp"
          websiteLink="https://banking-app-sage.vercel.app/"
        />

        <ProjectsCard
          title="Car Showcase Website"
          des="This is a website for displaying car models built with Next.js, TypeScript and TailwindCss."
          src={projectSix}
          githubLink="https://github.com/paulobidinma/Car-Showcase-Website"
          websiteLink="https://car-showcase-website-theta.vercel.app/"
        />

        <ProjectsCard
          title="Merch Online Store/Website (Contract)"
          des="This is a wordpress website for selling print products, from clothing to merchandise."
          src={projectEight}
          githubLink=""
          websiteLink="https://royalstyles.net/"
        />

        <ProjectsCard
          title="Cleaning Services Website (Contract)"
          des="This is a wordpress website for an award-winning cleaning company that offers you the best yet affordable cleaning services for residential and commercial clients."
          src={projectNine}
          githubLink=""
          websiteLink="https://joyce-clean.de/"
        />
      
      </div>
    </section>
  );
}

export default Projects

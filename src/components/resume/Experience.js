import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
      >
        <div>
          <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px]">2020 - 2023</p>
            <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
          </div>
          <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="NYSC Intern"
              subTitle="Securities and Exchange Commission(SEC) Nigeria - (January 2023 - November 2023)"
              des="Collaborated with the Applications Development team to design, develop, test, and maintain software applications such as SEC CRM (Customer Relationship Manager) and HumanSoft. 
              Supported the team in troubleshooting and resolving technical issues reported by users.
              "
            />
            <ResumeCard
              title="IT intern"
              subTitle="Investment and Securities Tribunal Nigeria - (September 2021 - December 2021)"
              des={'Spearheaded the installation, maintenance, and repair of hardware and software components of the organization’s \r\n            computers and computer peripherals.\r\n            Liaised with senior colleagues for documentation, testing, implementation, and maintenance of web pages and \r\nmultimedia design using appropriate web publishing, editing, and graphic design applications.\r\n            '}
            />
            <ResumeCard
              title="Front-end Developer Intern"
              subTitle="The Smart Hub Nigeria - (July 2020 - September 2020)"
              result="Oman"
              des="Collaborated on a project to create a web-based medical appointment scheduling software. Managed the database of the application."
            />
          </div>
        </div>
      </motion.div>
  );
};

export default Experience;

import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2024</p>
          <h1 className="text-3xl md:text-4xl font-bold">Certification</h1>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="BCS level 4 Certificate in IT"
            subTitle="BCS, The Chartered Institute for IT"
            result="Success"
            des="Issued December 2024"
          />
          <ResumeCard
            title="Meta Back-end Developer Certificate"
            subTitle="Meta"
            result="Success"
            des="Issued May 2024"
          />
          <ResumeCard
            title="Professional Scrum Master I (PSM I)"
            subTitle="Scrum.org"
            result="Success"
            des="Issued March 2024"
          />
          <ResumeCard
            title="Google Project Management Certificate"
            subTitle="Coursera"
            result="Success"
            des="Issued January 2024"
          />
          <ResumeCard
            title= "B.SC Computer Science"
            subTitle="Bowen University, Iwo"
            des="2018 - 2022"
          />
          <ResumeCard
            title="Java Programming | Machine Learning | Oracle SQL fundamentals "
            subTitle="New Horizons Computer Learning Centers"
            result="Success"
            des="Issued November 2022"
          />
          </div>
      </div>
    </motion.div>
  );
};

export default Achievement;

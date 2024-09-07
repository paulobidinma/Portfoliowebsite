import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedinIn, FaGithub, FaEnvelope  } from "react-icons/fa";
// import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Programmer.", "Web Developer.", "Front-end Developer.", "Wordpress Developer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full  flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY PORTFOLIO</h4>
        <h1 className="text-7xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Paul Obidinma</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I am a dedicated web developer and programmer driven by the challenge of transforming concepts into seamless digital experiences. 
        With expertise in various technologies, I prioritize clean, efficient, and maintainable code—from front-end aesthetics to back-end functionality.
        Thriving in collaborative environments, I excel in team settings where effective communication is key. 
        Each project is an opportunity to tackle unique challenges, utilizing a strategic approach and a passion for elegant solutions. 
        In a rapidly evolving tech landscape, I maintain a growth mindset, constantly seeking new knowledge and skills.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/paul-obidinma-45b356230/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                <FaLinkedinIn />
            </a>

            <a href="mailto:oziomaobidinma3@gmail.com" rel="noopener noreferrer" className="bannerIcon">
                <FaEnvelope />
            </a>
            
            <a href="https://github.com/paulobidinma" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                <FaGithub />
            </a>
          </div>
        </div>
        {/* <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default LeftBanner
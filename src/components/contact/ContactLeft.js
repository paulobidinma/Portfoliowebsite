import React from 'react'
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Paul Obidinma</h3>
        <p className="text-lg font-normal text-gray-400">
          Web Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        Feel free to reach out if you have any questions or if you're interested in collaboration..
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+2348144913898</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">oziomaobidinma3@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
    </div>
  );
}

export default ContactLeft
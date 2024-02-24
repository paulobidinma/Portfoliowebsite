import React from 'react'
import { AiOutlineGlobal } from "react-icons/ai";
import { FaCode} from "react-icons/fa";
import { CiServer} from "react-icons/ci";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Full-stack Development"
          des="Creating seamless, end-to-end web solutions."
          icon={<AiOutlineGlobal />}
        />
        <Card
          title="Backend Development"
          des="Building robust server-side applications."
          icon={<CiServer/>}
        />
        <Card
          title="Code Review and Optimization"
          des="Ensuring code quality and performance."
          icon={<FaCode />}
        />
        
      </div>
    </section>
  );
}

export default Features
import React from "react";
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt,
  FaDatabase, FaGithub, FaGitAlt
} from "react-icons/fa";
import {
  SiJavascript, SiTailwindcss, SiJsonwebtokens, SiPostman
} from "react-icons/si";

// Skills categorized
const frontendSkills = [
  { name: "HTML", level: 90, icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", level: 85, icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", level: 50, icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React.js", level: 80, icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind CSS", level: 80, icon: <SiTailwindcss className="text-teal-400" /> },
];

const backendSkills = [
  { name: "Node.js", level: 80, icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", level: 80, icon: <FaNodeJs className="text-lime-400" /> },
  { name: "REST API", level: 75, icon: <SiPostman className="text-orange-400" /> },
  { name: "JSON", level: 75, icon: <SiPostman className="text-amber-300" /> },
  { name: "Authentication", level: 75, icon: <SiJsonwebtokens className="text-pink-500" /> },
];

const databaseSkills = [
  { name: "MySQL", level: 80, icon: <FaDatabase className="text-indigo-500" /> },
  { name: "Git", level: 85, icon: <FaGitAlt className="text-red-400" /> },
  { name: "GitHub", level: 80, icon: <FaGithub className="text-white" /> },
];

const SkillSection = ({ title, skills }) => (
  <div className="mb-10 w">
    <h3 className="text-2xl font-semibold text-purple-300 mb-4">{title}</h3>
    <div className="grid sm:grid-cols-3 gap-8">
      {skills.map((skill, index) => (
        <div key={index}>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xl">{skill.icon}</span>
            <span className="text-md font-medium">{skill.name}</span>
          </div>
          <div className="w-full h-3 bg-gray-700 rounded-full">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="bg-[#0f172a] text-white py-12 px-4 sm:px-8 ">
      <div className="w-[80%]	 mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-purple-400">My Skills</h2>

        <SkillSection title="Frontend Skills" skills={frontendSkills} />
        <SkillSection title="Backend & API Skills" skills={backendSkills} />
        <SkillSection title="Database & Tools" skills={databaseSkills} />
      </div>
    </section>
  );
};

export default Skills;

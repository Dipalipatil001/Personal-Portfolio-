import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

// Sample project images (you can replace with your own)
import project1Img from "../assets/project1.png";
import project2Img from "../assets/project2.png";
import project3Img from "../assets/project3.png";
import project4Img from "../assets/project4.png";

const projects = [
  {
    title: "Student Result Dashboard",
    description: "A full-stack dashboard to manage and display student results using React, Node.js, and MySQL.",
    tech: ["React", "Node.js", "MySQL", "Express"],
    github: "https://github.com/your-username/student-dashboard",
    live: "https://your-dashboard.vercel.app",
     image: project1Img,
  },
  {
    title: "E-Grampanchayat System",
    description: "A government-related web app for managing grampanchayat data like birth, marriage, and tax.",
    tech: ["React", "Node.js", "MySQL"],
    github: "https://github.com/your-username/e-grampanchayat",
    live: "https://e-grampanchayat.vercel.app",
    image: project2Img,
  },
  {
    title: "Portfolio Website",
    description: "A personal developer portfolio built with React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/Dipalipatil001/Personal-Portfolio-.git",
    live: "https://your-portfolio.vercel.app",
    image: project3Img,
  },
  {
    title: "FoodShop  Website",
    description: "A personal developer portfolio built with React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/Dipalipatil001/Foodshop",
    live:" https://foodshop-phi.vercel.app/",
    image: project4Img,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16  bg-[#0f172a]">
      <div className="w-full mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-600 mb-12 underline underline-offset-8">
          Projects
        </h2>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-purple-300"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              )}

              <div className="p-6">
                <h3 className="text-2xl font-bold text-indigo-800 mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-purple-100 text-purple-700 px-3 py-1 text-xs font-semibold rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-white bg-gray-800 px-4 py-2 rounded hover:bg-black transition"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-white bg-gradient-to-r from-green-500 to-green-700 px-4 py-2 rounded hover:scale-105 transition"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

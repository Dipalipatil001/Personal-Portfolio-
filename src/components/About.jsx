import React from 'react';
import aboutImage from '../assets/about.jpeg'; // use your image path

const About = () => {
  return (
    <section id="about" className="w-full bg-[#0f172a] text-white py-16 px-9">
      <h2 className="text-4xl font-bold text-center text-purple-400 mb-12">About Me</h2>

      <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-between  px-16 ">
        {/* Left - Image */}
        <div className="flex-shrink-0 w-full md:w-1/2 ml-9">
         <img
            src={aboutImage}
            alt="Deepali Patil"
            className="w-full md:w-[400px] h-auto rounded-2xl shadow-2xl border-4 border-purple-400 hover:scale-105 transition-transform duration-500"
          />

        </div>

        {/* Right - Text */}
        <div className="w-full md:w-1/2 text-lg leading-relaxed text-gray-300  py-9">
          <p className="mb-4">
            Hello! I'm <span className="text-blue-300 font-semibold">Deepali Patil</span>, a passionate Full Stack Developer with a focus on React.js, Node.js, and modern web technologies.
          </p>
          <p className="mb-4">
            I have a strong academic background in Computer Applications and experience developing user-friendly, responsive web apps.
          </p>
          <p>
            I'm enthusiastic about building meaningful digital experiences and always eager to learn new technologies. I'm open to full-time or internship opportunities where I can grow and contribute to impactful projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

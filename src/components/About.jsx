import React from 'react';
import aboutImage from '../assets/about.jpeg'; // Update the image path as needed

const About = () => {
  return (
    <section id="about" className="w-full bg-[#0f172a] text-white py-16 px-6 sm:px-10 lg:px-20">
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-purple-400 mb-12">
        About Me
      </h2>

      {/* Content Wrapper */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Right - Text Section */}
        <div className="w-full md:w-1/2 text-base sm:text-lg leading-relaxed text-gray-300">
          <p className="mb-4">
            Hello! I'm <span className="text-blue-300 font-semibold">Deepali Patil</span>, a passionate Full Stack Developer
            with a focus on <span className="text-purple-300 font-semibold">React.js</span>, <span className="text-purple-300 font-semibold">Node.js</span>, and modern web technologies.
          </p>
          <p className="mb-4">
            I have a strong academic background in Computer Applications and experience developing
            user-friendly, responsive web applications that deliver seamless digital experiences.
          </p>
          <p>
            I'm always eager to learn new technologies and collaborate on meaningful projects.
            Currently, I'm open to full-time or internship opportunities where I can grow and
            contribute to impactful solutions.
          </p>
        </div>

        {/* Left - Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={aboutImage}
            alt="Deepali Patil"
            className="w-56 sm:w-72 md:w-80 lg:w-[400px] h-auto rounded-2xl shadow-2xl border-4 border-purple-400 hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

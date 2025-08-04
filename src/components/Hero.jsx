import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope ,  FaPhoneAlt } from 'react-icons/fa';
import heroImage from '../assets/photo.jpg'; // update path if needed

const Hero = () => {
  return (
    <section className="bg-[#0f172a] min-h-[80vh] flex items-center px-8 md:px-16 py-10">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto">
        {/* Left Section */}
        <div className="text-white max-w-xl space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Hello, I'M</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">Deepali Patil</h2>
          <p className="text-lg font-medium">
           <span className="text-cyan-300">FUll Stack Developer</span>
          </p>
          <p className="text-sm text-gray-300">
           I'm a passionate web developer dedicated to building responsive, user-friendly web applications using modern technologies 
           like React, Node.js, and Tailwind CSS. I focus on creating intuitive UI and delivering smooth user experiences
          </p>

          {/* Social Icons with border */}
          <div className="flex gap-4 text-xl mt-4">
            <a href="https://github.com/Dipalipatil001" className="border border-cyan-400 p-2 rounded-full  text-white transition">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/deepali-patil-1a9511280/" className="border border-cyan-400 p-2 rounded-full  text-blue-400 transition">
              <FaLinkedin />
            </a>
            <a href="patildeepali1602@gmail.com" className="border border-cyan-400 p-2 rounded-full  text-white transition">
              <FaEnvelope />
            </a>
            <a href="+91 8669092101" className="border border-cyan-400 p-2 rounded-full  text-green-400 transition">
             <FaPhoneAlt />
            </a>
          </div>

          {/* Button */}
          <div>
          <a
          href="/deepali_fullstack.pdf"
          download
          className="inline-block mt-4 px-6 py-2 bg-cyan-400 text-black font-semibold rounded-full hover:bg-cyan-300 transition"
        >
          Download Resume
        </a>

          </div>
        </div>

        {/* Image Section */}
        <div className="mt-10 md:mt-0">
          <img
            src={heroImage}
            alt="Deepali Patil"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full border-8 border-cyan-600 shadow-lg object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

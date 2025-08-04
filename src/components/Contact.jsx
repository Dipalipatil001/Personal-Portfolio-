import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-purple-800 mb-10 underline decoration-blue-400">
          Get in Touch
        </h2>

        <p className="text-white mb-8 text-lg">
          Feel free to connect with me for any project collaboration, job opportunity, or just to say hi!
        </p>

        <div className="flex justify-center gap-6 text-3xl text-blue-700 mb-10">
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

        <form className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border-b-2 border-blue-300 focus:outline-none focus:border-blue-600 p-3 text-lg rounded"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border-b-2 border-blue-300 focus:outline-none focus:border-blue-600 p-3 text-lg rounded"
              required
            />
          </div>
          <div className="mb-6">
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full border-b-2 border-blue-300 focus:outline-none focus:border-blue-600 p-3 text-lg rounded"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

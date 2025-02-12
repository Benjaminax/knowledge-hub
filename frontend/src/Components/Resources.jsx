import React from "react";
import { motion } from "framer-motion";
import AILesson1 from "../assets/resources/ai-introduction-lesson-1.pdf?url";
import AILesson2 from "../assets/resources/history-and-evolution-of-ai-lesson-2.pdf?url";
import resourcesBackground from "../assets/images/resources-background.jpg";

const Resources = ({ darkMode }) => {
  return (
    <section
      id="resources"
      className="relative min-h-screen flex items-center justify-start text-left"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${resourcesBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content Container */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          {/* Heading */}
          <h2
            className={`text-4xl font-bold ${
              darkMode ? "text-white" : "text-white"
            } mb-12 font-montserrat`}
          >
            Trial Resources You Can Download
          </h2>

          {/* Resource Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Resource Card 1 */}
            <div
              className={`p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h3
                className={`text-2xl font-semibold ${
                  darkMode ? "text-white" : "text-gray-800"
                } mb-4 font-montserrat`}
              >
                AI Introduction - Lesson 1
              </h3>
              <p
                className={`text-lg ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                } mb-6 font-montserrat`}
              >
                Download our free guide to AI introduction for beginners.
              </p>
              <a
                href={AILesson1}
                download="ai-introduction-lesson-1.pdf"
                className={`${
                  darkMode
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-green-800 hover:bg-green-900"
                } text-white px-6 py-3 rounded-lg transition duration-300 font-montserrat`}
              >
                Download
              </a>
            </div>

            {/* Resource Card 2 */}
            <div
              className={`p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h3
                className={`text-2xl font-semibold ${
                  darkMode ? "text-white" : "text-gray-800"
                } mb-4 font-montserrat`}
              >
                History and Evolution of AI - Lesson 2
              </h3>
              <p
                className={`text-lg ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                } mb-6 font-montserrat`}
              >
                Learn about the history and evolution of AI with our detailed lesson.
              </p>
              <a
                href={AILesson2}
                download="history-and-evolution-of-ai-lesson-2.pdf"
                className={`${
                  darkMode
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-green-800 hover:bg-green-900"
                } text-white px-6 py-3 rounded-lg transition duration-300 font-montserrat`}
              >
                Download
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resources;
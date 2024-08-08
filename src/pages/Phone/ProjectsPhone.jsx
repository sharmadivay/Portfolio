import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import projectData from "../../data/projectData.json";
import ProjectCard from "../../components/ProjectCard.jsx";

const ProjectsPhone = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 1;
  const { ref, inView } = useInView({
    triggerOnce: false, // Allow triggering multiple times
    threshold: 0.1,
  });

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + cardsToShow, projectData.length - cardsToShow)
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - cardsToShow, 0));
  };

  // Create a reference array to hold card references
  const cardRefs = useRef([]);

  // Use callback ref to collect references
  const setCardRef = useCallback((node, index) => {
    if (node) {
      cardRefs.current[index] = node;
    }
  }, []);

  return (
    <>
      <div
        id="projects"
        className="relative h-screen flex flex-col items-center w-full p-8"
      >
        <h1 className="text-3xl text-white mb-8 w-full flex items-center justify-center">
          Projects
        </h1>
        <div className="relative flex overflow-x-auto space-x-4 px-4 py-8 w-full max-w-screen-xl scrollbar-hidden">
          <div className="flex flex-nowrap w-full">
            {projectData
              .slice(currentIndex, currentIndex + cardsToShow)
              .map((project, idx) => {
                // Use IntersectionObserver hook

                // Attach ref to the card and use the index
                setCardRef(ref, idx);

                return (
                  <motion.div
                    key={project.name}
                    ref={ref}
                    style={{ scrollbarWidth: "none" }}
                    className="relative w-full flex-shrink-0 p-4"
                    initial={{
                      opacity: 0,
                      scale: 0.5,
                      translateX: "50%",
                      translateY: "50%",
                    }}
                    animate={
                      inView
                        ? {
                            opacity: 1,
                            scale: 1,
                            translateX: "0%",
                            translateY: "0%",
                          }
                        : {
                            opacity: 0,
                            scale: 0.5,
                            translateX: "50%",
                            translateY: "50%",
                          }
                    }
                    exit={{
                      opacity: 0,
                      scale: 0.5,
                      translateX: "-50%",
                      translateY: "-50%",
                    }}
                    transition={{
                      duration: 0.6,
                      type: "spring",
                      stiffness: 300,
                    }}
                    whileHover={{
                      scale: 1.1,
                      y: -10,
                      zIndex: 10,
                      rotate: -2,
                      boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.3)",
                      transition: { duration: 0.3 },
                    }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                );
              })}
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-8 flex justify-between px-4">
          <motion.button
            onClick={handlePrevious}
            className="bg-gradient-to-r from-[#ff6f61] to-[#d75959] text-white p-3 rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition duration-300 ease-in-out"
            disabled={currentIndex === 0}
            whileHover={{ boxShadow: "0px 12px 24px rgba(255, 111, 97, 0.6)" }}
            whileTap={{ scale: 0.95 }}
          >
            <FaArrowLeft size={24} className="bg-transparent" />
          </motion.button>
          <motion.button
            onClick={handleNext}
            className="bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white p-3 rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition duration-300 ease-in-out"
            disabled={currentIndex + cardsToShow >= projectData.length}
            whileHover={{ boxShadow: "0px 12px 24px rgba(0, 198, 255, 0.6)" }}
            whileTap={{ scale: 0.95 }}
          >
            <FaArrowRight size={24} className="bg-transparent" />
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default ProjectsPhone;

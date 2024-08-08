import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import SkillCard from "../components/SkillCard";
import skillsData from "../data/skillData.json";

const Skills = () => {
  const mainControls = useAnimation();
  const categoryControls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const scrollRefs = {
    Frontend: useRef(null),
    Backend: useRef(null),
  };

  useEffect(() => {
    if (inView) {
      mainControls.start("visible").then(() => {
        categoryControls.start("visible");
      });
    } else {
      mainControls.start("hidden");
      categoryControls.start("hidden");
    }
  }, [inView, categoryControls, mainControls]);

  const scrollLeft = (category) => {
    if (scrollRefs[category].current) {
      const cardWidth = scrollRefs[category].current.children[0].clientWidth;
      scrollRefs[category].current.scrollBy({
        left: -cardWidth * 2, // Scroll by the width of two cards
        behavior: "smooth",
      });
    }
  };

  const scrollRight = (category) => {
    if (scrollRefs[category].current) {
      const cardWidth = scrollRefs[category].current.children[0].clientWidth;
      scrollRefs[category].current.scrollBy({
        left: cardWidth * 2, // Scroll by the width of two cards
        behavior: "smooth",
      });
    }
  };

  const categoryVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
      },
    }),
  };

  return (
    <div id="skills" ref={ref} className="mx-5 mt-5">
      <motion.div
        className="
          bg-[#0c1327]
          h-auto 
          rounded-xl 
          shadow-lg 
          p-5 
          text-white
          overflow-hidden
        "
        initial={{ x: "100vw", opacity: 0 }}
        animate={mainControls}
        variants={{
          hidden: { x: "100vw", opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        <h1 className="text-3xl text-white mb-8 w-full flex items-center justify-center bg-[#0c1327]">
          Skills
        </h1>
        <div className="flex flex-col items-center space-y-8 bg-transparent">
          {Object.keys(skillsData).map((category, index) => (
            <motion.div
              key={category}
              className="flex flex-col space-y-4 rounded-xl p-4 w-full border border-[#ff8500]"
              custom={index}
              initial="hidden"
              animate={categoryControls}
              variants={categoryVariants}
            >
              <h2 className="text-2xl text-[#ff8500] mb-4 text-center">
                {category}
              </h2>
              <div className="flex items-center space-x-2">
                <button
                  className="bg-[#ff8500] text-white py-2 px-4 rounded-full hover:bg-[#e67e00] transition duration-300"
                  onClick={() => scrollLeft(category)}
                >
                  &lt;
                </button>
                <div
                  className="flex overflow-x-auto space-x-4 w-full snap-x hide-scrollbar"
                  ref={scrollRefs[category]}
                >
                  {skillsData[category].map((skill, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-[calc(100%/2)] snap-start"
                    >
                      <SkillCard skill={skill} />
                    </div>
                  ))}
                </div>
                <button
                  className="bg-[#ff8500] text-white py-2 px-4 rounded-full hover:bg-[#e67e00] transition duration-300"
                  onClick={() => scrollRight(category)}
                >
                  &gt;
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;

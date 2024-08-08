import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

import skillsData from "../../data/skillData.json";
import SkillCardPhone from "../../components/phone/SkillCardPhone";

const SkillsPhone = () => {
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
        left: -cardWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = (category) => {
    if (scrollRefs[category].current) {
      const cardWidth = scrollRefs[category].current.children[0].clientWidth;
      scrollRefs[category].current.scrollBy({
        left: cardWidth,
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
    <div id="skills" ref={ref} className="mx-2 mt-5 overflow-hidden">
      <motion.div
        className="bg-[#0c1327] h-auto rounded-xl shadow-lg p-4 text-white overflow-hidden"
        initial={{ x: "100vw", opacity: 0 }}
        animate={mainControls}
        variants={{
          hidden: { x: "100vw", opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        <h1 className="text-3xl text-white mb-4 w-full flex items-center justify-center bg-[#0c1327] ">
          Skills
        </h1>
        <div className="flex flex-col items-center space-y-6 bg-transparent">
          {Object.keys(skillsData).map((category, index) => (
            <motion.div
              key={category}
              className="flex flex-col space-y-3 rounded-lg p-3 w-full border border-[#ff8500] overflow-hidden"
              custom={index}
              initial="hidden"
              animate={categoryControls}
              variants={categoryVariants}
            >
              <h2 className="text-2xl text-[#ff8500] mb-3 text-center">
                {category}
              </h2>
              <div className="flex items-center">
                <button
                  className="bg-[#ff8500] text-white py-1 px-3 rounded-full hover:bg-[#e67e00] transition duration-300"
                  onClick={() => scrollLeft(category)}
                >
                  &lt;
                </button>
                <div
                  className="flex overflow-x-auto w-full hide-scrollbar"
                  ref={scrollRefs[category]}
                >
                  {skillsData[category].map((skill, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-[calc(100%)] sm:w-[calc(100%/1.2)] md:w-[calc(100%/3)] snap-center"
                    >
                      <SkillCardPhone skill={skill} />
                    </div>
                  ))}
                </div>
                <button
                  className="bg-[#ff8500] text-white py-1 px-3 rounded-full hover:bg-[#e67e00] transition duration-300"
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

export default SkillsPhone;

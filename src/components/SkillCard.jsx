import { motion } from "framer-motion";
import PropTypes from "prop-types";

const SkillCard = ({ skill }) => {
  return (
    <motion.div
      className="
        bg-[#1e2a38] 
        rounded-2xl 
        shadow-lg 
        p-6 
        w-full
        h-full
        flex 
        flex-col 
        justify-between 
        items-start
        text-white
        mr-4
      "
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-bold mb-2 text-[#00A7E1] bg-[#1e2a38] ">
        {skill.name}
      </h2>
      <div className="flex flex-col mb-4 space-y-2 bg-[#1e2a38] ">
        <div className="flex justify-between bg-[#1e2a38] ">
          <span className="font-semibold bg-[#1e2a38] ">Level:</span>
          <span className=" bg-[#1e2a38] ">{skill.level}</span>
        </div>
        <div className="flex justify-between bg-[#1e2a38] ">
          <span className="font-semibold bg-[#1e2a38] ">Experience:</span>
          <span className="f bg-[#1e2a38] ">{skill.experience}</span>
        </div>
        <div className="flex justify-between bg-[#1e2a38] ">
          <span className="font-semibold bg-[#1e2a38] flex-none mr-2 ">
            Skills In Action:
          </span>
          <span className=" bg-[#1e2a38] ">{skill.skillsInAction}</span>
        </div>
      </div>
    </motion.div>
  );
};

SkillCard.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
    skillsInAction: PropTypes.string.isRequired, // New category
  }).isRequired,
};

export default SkillCard;

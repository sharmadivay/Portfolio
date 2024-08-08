import { motion } from "framer-motion";
import PropTypes from "prop-types";

const SkillCardPhone = ({ skill }) => {
  return (
    <motion.div
      className="
        bg-[#1e2a38] 
        rounded-2xl 
        shadow-lg 
        p-4 
        w-full
        h-full
        flex 
        flex-col 
        justify-between 
        items-start
        text-white
        mr-2
        overflow-hidden
      "
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-lg sm:text-xl font-bold mb-2 text-[#00A7E1]">
        {skill.name}
      </h2>
      <div className="flex flex-col mb-4 space-y-2 bg-[#1e2a38]">
        <div className="flex justify-between bg-[#1e2a38]">
          <span className="font-semibold bg-[#1e2a38]">Level:</span>
          <span className="bg-[#1e2a38]">{skill.level}</span>
        </div>
        <div className="flex justify-between bg-[#1e2a38]">
          <span className="font-semibold bg-[#1e2a38] mr-1">Experience:</span>
          <span className="bg-[#1e2a38]">{skill.experience}</span>
        </div>
      </div>
    </motion.div>
  );
};

SkillCardPhone.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
    skillsInAction: PropTypes.string.isRequired,
  }).isRequired,
};

export default SkillCardPhone;

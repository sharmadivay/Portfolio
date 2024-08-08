// import { motion } from "framer-motion";

// const HoverAnimationDiv = () => {
//   return (
//     <motion.div
//       className="bg-blue-500 rounded-lg h-40 w-40 flex items-center justify-center"
//       whileHover={{
//         scale: 1.1,
//         rotate: 10,
//         boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.2)",
//       }}
//       transition={{ type: "spring", stiffness: 300, damping: 20 }}
//     >
//       <p className="text-white">Hover Me!</p>
//     </motion.div>
//   );
// };

// export default HoverAnimationDiv;

// import { motion } from "framer-motion";
// import { IoLogoInstagram } from "react-icons/io";
// import { AiFillGithub } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

// const HoverAnimationDiv = () => {
//   return (
//     <motion.div
//       className="w-10 h-10  bg-[#233356] rounded-full flex justify-center items-center"
//       whileHover={{
//         scale: 1.1,
//         rotate: 10,
//         backgroundColor: "#ff8500",
//         boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.2)",
//       }}
//       transition={{ type: "spring", stiffness: 300, damping: 20 }}
//     >
//       <motion.div whileHover={{ scale: 1.2 }} className="">
//         <IoLogoInstagram size={20} />
//       </motion.div>
//     </motion.div>
//   );
// };

// export default HoverAnimationDiv;

// import PropTypes from "prop-types";
// import { motion } from "framer-motion";

// const IconHoverEffect = ({ Icon }) => {
//   return (
//     <motion.div
//       className="relative bg-[#384b7c] rounded-full h-[200px] w-[200px] flex items-center justify-center"
//       whileHover={{
//         scale: 1.1,
//         rotate: 10,
//         boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.2)",
//       }}
//       transition={{
//         duration: 0.5,
//         type: "spring",
//         stiffness: 100,
//         damping: 15,
//       }}
//     >
//       <motion.div
//         className="absolute flex items-center justify-center bg-[#fe7a01] rounded-full p-2"
//         initial={{ opacity: 0, y: 0, x: 0 }}
//         whileHover={{
//           opacity: 1,
//           y: [-10, -20, -30],
//           x: [-10, -20, -30],
//           scale: 1.2,
//         }}
//         transition={{
//           duration: 0.5,
//           type: "spring",
//           stiffness: 100,
//           damping: 15,
//         }}
//       >
//         <Icon size={24} color="#fff" />
//       </motion.div>
//     </motion.div>
//   );
// };

// IconHoverEffect.propTypes = {
//   icons: PropTypes.arrayOf(PropTypes.elementType).isRequired,
// };

// export default IconHoverEffect;

import PropTypes from "prop-types";
import { motion } from "framer-motion";

const IconHoverEffect = ({ Icon, size = 16 }) => {
  return (
    <motion.div
      className="w-10 h-10  bg-[#233356] rounded-full flex justify-center items-cente"
      whileHover={{
        scale: 1.1,
        boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.2)",
      }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
    >
      <motion.div
        className=" flex items-center justify-center bg-[#233356] rounded-full p-2 overflow-hidden"
        initial={{ opacity: 1, y: 0, x: 0 }}
        whileHover={{
          y: -50,
          x: -50,
          scale: 1.2,
          rotate: 360,
        }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
      >
        <Icon size={size} />
      </motion.div>
    </motion.div>
  );
};

IconHoverEffect.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  size: PropTypes.number,
};

export default IconHoverEffect;

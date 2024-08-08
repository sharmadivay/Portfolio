import PropTypes from "prop-types";
import { motion } from "framer-motion";

const PortfolioImage = ({ src, alt, imgControls, divControls }) => {
  return (
    <motion.div
      className="bg-[#384b7c] rounded-full h-[80%] w-[70%] flex items-center justify-center"
      initial={{ x: "-100vw", opacity: 0 }} // Starting position for entrance animation
      animate={divControls}
      variants={{
        hidden: { opacity: 0, x: "-100vw" },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 100.5,
            type: "spring",
            stiffness: 100,
            damping: 15,
          },
        },
      }} // Final position for entrance animation
      // Entrance animation settings
      whileHover={{
        rotateY: 15,
        rotateX: 15,
        scale: 1.1,
        boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.2)",
      }}
    >
      <motion.img
        src={src}
        alt={alt}
        initial={{ x: "-100vw", opacity: 0 }} // Starting position for entrance animation
        animate={imgControls} // Final position for entrance animation
        variants={{
          hidden: { opacity: 0, x: "-100vw" },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration: 100.5,
              type: "spring",
              stiffness: 100,
              damping: 15,
            },
          },
        }}
        whileHover={{
          scale: 1.05,
        }}
        className="w-full h-auto rounded-full bg-transparent"
      />
    </motion.div>
  );
};

PortfolioImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  imgControls: PropTypes.object.isRequired,
  divControls: PropTypes.object.isRequired,
};

export default PortfolioImage;

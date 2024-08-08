import { useEffect } from "react";
import divayImage from "../assets/Divay-removebg-preview.png";
import { IoLogoInstagram } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";
import { MdMailOutline } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import PortfolioImage from "../components/PortfolioImage.jsx";
import IconHoverEffect from "../components/HoverAnimationDiv.jsx";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const imgControls = useAnimation();
  const divControls = useAnimation();
  const backgroundControls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      divControls.start("visible");
      imgControls.start("visible");
      backgroundControls.start("half").then(() => {
        setTimeout(() => backgroundControls.start("full"), 500);
      });
    } else {
      divControls.start("hidden");
      imgControls.start("hidden");
      backgroundControls.start("hidden");
    }
  }, [inView, divControls, imgControls, backgroundControls]);

  const backgroundVariants = {
    hidden: { width: "0%" },
    half: { width: "50%", transition: { duration: 1 } },
    full: { width: "100%", transition: { duration: 1 } },
  };

  return (
    <div
      id="about"
      className="min-h-screen flex  justify-center items-center bg-[#1c2b5a]"
    >
      <motion.div
        initial="hidden"
        animate={backgroundControls}
        variants={backgroundVariants}
        className="absolute top-0 left-0 h-full bg-[#1b2747] z-0"
      />
      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center w-full">
        <div className="pt-10 ml-10 flex justify-start md:justify-center items-center space-x-10 w-full md:w-[40%]">
          <div className="mt-30 hidden md:flex flex-col justify-end space-y-5">
            {[
              {
                href: "https://www.instagram.com/divaysharma",
                icon: IoLogoInstagram,
              },
              {
                href: "https://www.linkedin.com/in/divaysharma",
                icon: FaLinkedinIn,
              },
              { href: "https://github.com/sharmadivay", icon: AiFillGithub },
              { href: "mailto:sharmadivay0d1@gmail.com", icon: MdMailOutline },
            ].map(({ href, icon: Icon }, idx) => (
              <div
                key={idx}
                className="w-12 h-12 bg-[#233356] rounded-full flex justify-center items-center transition-transform duration-300 hover:scale-110"
              >
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <IconHoverEffect Icon={Icon} size={24} />
                </a>
              </div>
            ))}
          </div>
          <div>
            <motion.div ref={ref}>
              <PortfolioImage
                src={divayImage}
                alt="Divay"
                imgControls={imgControls}
                divControls={divControls}
              />
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col flex-wrap w-full ml-20  md:w-[60%] space-y-5 md:ml-[-5rem] mr-20 text-[#f6f6f8] ">
          <div className="text-md flex flex-col">
            <p className="text-md font-semibold">Hello, I&rsquo;m</p>
            <h1 className="text-6xl font-bold text-[#ff8500]">Divay</h1>
          </div>
          <div>
            <p className="space-y-3 text-lg text-gray-400">
              Highly motivated B.Tech student specializing in MERN stack
              development with a passion for creating dynamic, responsive web
              applications. Proficient in MongoDB, Express.js, React.js, and
              Node.js, with hands-on experience in developing full-stack
              projects from concept to deployment. Adept at problem-solving,
              collaborative in team settings, and committed to continuous
              learning to stay abreast of the latest industry trends. Strong
              foundation in computer science principles and a keen interest in
              leveraging technology to drive innovation and efficiency. Eager to
              contribute technical expertise and creative solutions to
              challenging development projects in a dynamic, growth-oriented
              environment.
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="space-x-5">
              <button className="p-3 px-6 rounded-full bg-[#feb300] text-[#f2eef9] font-semibold shadow-lg transition-transform duration-300 hover:scale-105 hover:translate-y-1 hover:shadow-[0px_5px_15px_rgba(0,0,0,0.3)]">
                <a href="/DiVaY_ShArMa.pdf" download className="bg-[#feb300]">
                  Download CV
                </a>
              </button>
              <button className="p-3 px-8 rounded-full bg-[#384b7c] text-[#f2eef9] font-semibold shadow-lg transition-transform duration-300 hover:scale-105 hover:translate-y-1 hover:shadow-[0px_5px_15px_rgba(0,0,0,0.3)]">
                <a href="#contact" className="bg-[#384b7c]">
                  Let&rsquo;s Talk
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

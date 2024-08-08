import { IoLogoInstagram } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";
import { MdMailOutline } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import IconHoverEffect from "../HoverAnimationDiv";
const Footer = () => {
  return (
    <div id="Footer" className="z-50 bg-gray-800 m-5 rounded-lg relative  ">
      <div className="container mx-auto px-4 z-50 bg-gray-800 m-2 rounded-lg p-5">
        <div className="text-center mb-6 bg-gray-800">
          <h1 className="text-2xl font-bold bg-gray-800">Divay Sharma</h1>
        </div>
        <div className="flex flex-wrap justify-between bg-gray-800">
          <div className="w-full flex mb-4 md:mb-0 bg-gray-800">
            <ul className="w-full mt-2 flex justify-around md:justify-center md:space-x-5 bg-gray-800">
              <li className="bg-gray-800">
                <a href="#about" className="hover:underline bg-gray-800">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:underline bg-gray-800">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:underline bg-gray-800">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline bg-gray-800">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full flex items-center space-x-5 justify-center space-y-5 bg-gray-800">
            {[
              {
                href: "https://www.instagram.com/divay._.sharma/",
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
        </div>
        <div className="mt-6 text-center bg-gray-800">
          <p className="text-sm bg-gray-800">
            &copy; {new Date().getFullYear()} Divay. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

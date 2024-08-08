import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="fixed navbar flex justify-center items-center w-full bg-transparent z-50">
      <div className="mt-5 p-10 py-0 rounded-full bg-[#0c1327]">
        <ul className="menu menu-horizontal px-1 space-x-14 bg-[#0c1327]">
          {[
            { to: "about", name: "About" },
            { to: "skills", name: "Skills" },
            { to: "projects", name: "Projects" },
            { to: "contact", name: "Contact" },
          ].map(({ to, name }, idx) => (
            <li key={idx} className="bg-[#0c1327]">
              <Link
                to={to}
                smooth={true}
                duration={500}
                spy={true} // Enables scroll spy feature
                onSetActive={() => handleSetActive(to)}
                activeClass="active-link" // Add activeClass to manage active state with CSS
                className={`${
                  activeSection === to
                    ? "text-[#f6f6f8] border-b-2 rounded-none border-solid border-[#ff8500] bg-[#0c1327]"
                    : "text-[#7487b2] bg-[#0c1327]"
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

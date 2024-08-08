import PropTypes from "prop-types";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-[#1e2a38] rounded-xl shadow-2xl p-6 w-full flex flex-col justify-between items-start text-white h-full">
      {/* Project Image */}
      <img
        src={project.image}
        alt={`${project.name} screenshot`}
        className="w-full h-20   md:h-48 object-cover rounded-md mb-4"
      />

      {/* Project Name */}
      <h2 className="text-xl md:text-2xl font-bold mb-2 text-[#00A7E1] bg-[#1e2a38] over">
        {project.name}
      </h2>

      {/* Project Description */}
      <p className="mb-4  text-sm bg-[#1e2a38]">{project.description}</p>

      {/* Skills Used */}
      <div className="mb-4 text-sm bg-[#1e2a38]">
        <span className="font-semibold bg-[#1e2a38]">Skills Used:</span>
        <ul className="list-disc list-inside ml-4 bg-[#1e2a38]">
          {project.skills.map((skill, index) => (
            <li key={index} className="bg-[#1e2a38]">
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 mt-auto">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#ff8500] text-white py-2 px-4 rounded-full hover:bg-[#e67e00] transition duration-300 text-sm"
        >
          GitHub
        </a>
        <a
          href={project.deploy}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#00A7E1] text-white py-2 px-4 rounded-full hover:bg-[#007bb5] transition duration-300 text-sm"
        >
          Deploy
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    deploy: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;

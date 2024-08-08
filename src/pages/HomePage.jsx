import Layout from "../components/Layout/Layout.jsx";
import Skills from "./Skills.jsx";
import About from "./About.jsx";
import Projects from "./Projexts.jsx";
import Contact from "./Contact.jsx";
import AboutPhone from "./Phone/AboutPhone.jsx";
import SkillsPhone from "./Phone/SkillsPhone.jsx";
import ProjectsPhone from "./Phone/ProjectsPhone.jsx";
import Footer from "../components/Layout/Footer.jsx";

const HomePage = () => {
  return (
    <>
      <div className="hidden md:flex relative">
        <Layout>
          <div className="min-h-screen">
            <About />
            <Skills />
            <Projects />
            <Contact />
          </div>
        </Layout>
      </div>
      <div className="flex  flex-col md:hidden relative">
        <div className="flex flex-col min-h-screen">
          <AboutPhone />
          <SkillsPhone />
          <ProjectsPhone />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomePage;

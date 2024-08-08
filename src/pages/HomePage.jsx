import Layout from "../components/Layout/Layout.jsx";
import Skills from "./Skills.jsx";
import About from "./About.jsx";
import Projects from "./Projexts.jsx";
import Contact from "./Contact.jsx";

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
      <div className="flex md:hidden relative">
        <div className="min-h-screen">
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default HomePage;

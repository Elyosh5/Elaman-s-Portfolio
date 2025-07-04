import Navigation from "./navigation/Navigation";
import scss from "./Layout.module.scss";
import Projects from "./projects/Projects";

const ProjectLayout = () => {
  return (
    <div className={scss.layout}>
      <main>
        <Projects />
      </main>
      <Navigation />
    </div>
  );
};

export default ProjectLayout;

"use client";
import { useState } from "react";
import scss from "./Projects.module.scss";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const myProject = {
  project1: {
    title: "Snake Game",
    description: "Classic snake game build with html, css, vanilla javascript.",
    link: "snake-game-khaki-five.vercel.app",
    image: "/snakeGame.png",
    id: 0,
  },
  project2: {
    title: "Burger-store",
    description:
      "A burger store application built with Html, Css, vanilla JavaScript.",
    link: "burger-store-beta.vercel.app",
    image: "/burgerStore.png",
    id: 1,
  },
  project3: {
    title: "TechPro",
    description:
      "Simple tech blog website built with Html, Css, vanilla JavaScript.",
    link: "tech-pro-nine.vercel.app",
    image: "/techPro.png",
    id: 2,
  },
  project4: {
    title: "Estate",
    description: "Simple website for real estate built with Html, Css.",
    link: "estate-ochre-eta.vercel.app",
    image: "/Estate.png",
    id: 3,
  },
  project5: {
    title: "Solar-system",
    description:
      "Solar system website built with Html, Css, vanilla JavaScript and ThreeJs.",
    link: "solar-system-seven-kohl.vercel.app",
    image: "/Solar-system.png",
    id: 4,
  },
};

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const projectsArray = Object.values(myProject);
  const currentProject = projectsArray[currentProjectIndex];

  const nextProject = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentProjectIndex((prevIndex) =>
        prevIndex === projectsArray.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 150);
  };

  const prevProject = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentProjectIndex((prevIndex) =>
        prevIndex === 0 ? projectsArray.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 150);
  };

  return (
    <div className={scss.Projects}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.project}>
            <div
              className={scss.projectCard}
              style={{
                opacity: isTransitioning ? 0.5 : 1,
                transform: isTransitioning
                  ? "translateY(-10px)"
                  : "translateY(0)",
              }}
            >
              <div className={scss.projectImage}>
                <img src={currentProject.image} alt={currentProject.title} />
              </div>
              <div className={scss.projectDetails}>
                <h2>{currentProject.title}</h2>
                <p>{currentProject.description}</p>
                <a
                  href={`https://${currentProject.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Project
                </a>
              </div>
              <div className={scss.arrows}>
                <FaArrowLeft
                  id={scss.arrow}
                  onClick={prevProject}
                  style={{ cursor: "pointer" }}
                />
                <FaArrowRight
                  id={scss.arrow}
                  onClick={nextProject}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

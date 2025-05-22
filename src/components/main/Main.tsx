import scss from "./Main.module.scss";
import MeteorEffect from "./Meteors";
import "./glitch.css";

const Main = () => {
  return (
    <div className={scss.Main}>
      <div className="container">
        <div className={scss.content}>
          <MeteorEffect />

          <h1>
            Hello
            <div className="glitch-wrapper">
              <span className="glitch" data-glitch="undefined">
                {"{undefined}"}
              </span>
            </div>
          </h1>

          <h2>I am </h2>
          <p>
            Junior Frontend Developer with a passion for building modern,
            user-friendly web experiences. I’ve spent the past year mastering
            HTML, CSS, JavaScript, TypeScript, React, and Next.js, creating
            clean, responsive interfaces. I’m driven by curiosity and the desire
            to keep learning as the tech world evolves. Ready to bring my skills
            to real-world projects and make an impact.
          </p>
          <a href="https://drive.google.com/file/d/1ex7ZgLg77jIWId48AZdpd53o3zDJ4F_u/view?usp=drive_link">
            Know Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;

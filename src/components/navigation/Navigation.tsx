import { IoHomeOutline } from "react-icons/io5";
import { LiaProjectDiagramSolid } from "react-icons/lia";

import { FaGithub } from "react-icons/fa";
import "./Navigation.scss";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="Navigation">
      <div className="container">
        <div className="content">
          <div className="button-container-1">
            <Link href="/">
              <span className="mas">Home</span>
              <button id="work" type="button" name="Hover">
                <IoHomeOutline />
              </button>
            </Link>
          </div>

          <div className="button-container-2">
            <Link href="/">
              <span className="mas">Projects</span>
              <button type="button" name="Hover">
                <LiaProjectDiagramSolid />
              </button>
            </Link>
          </div>

          <div className="button-container-3">
            <Link href="https://github.com/Elyosh5">
              <span className="mas">GitHub</span>
              <button type="button" name="Hover">
                <FaGithub />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

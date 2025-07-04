import Main from "./main/Main";
import Navigation from "./navigation/Navigation";
import scss from "./Layout.module.scss";

const Layout = () => {
  return (
    <div className={scss.layout}>
      <main>
        <Main />
      </main>
      <Navigation />
    </div>
  );
};

export default Layout;

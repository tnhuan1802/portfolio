import * as React from "react";
import About from "./About";
import "./MainPage.css";
import Work from "./Work";

interface IMainPageProps {}

const MainPage: React.FC<IMainPageProps> = (props) => {
  return (
    <div className="main-page-container">
      <About />
      <Work />
    </div>
  );
};

export default MainPage;

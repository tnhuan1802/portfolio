import * as React from "react";
import IntroText from "../IntroText";
import './IntroPage.css'

interface IIntroPageProps {}

const IntroPage: React.FC<IIntroPageProps> = (props) => {
  return (
    <div className="intro-page-container">
      <IntroText />
    </div>
  );
};

export default IntroPage;

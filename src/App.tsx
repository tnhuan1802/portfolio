import React from "react";
import "./App.css";
import IntroPage from "./components/IntroPage/IntroPage";
import MainPage from "./components/MainPage/MainPage";

const App = () => {
  return (
    <div className="App">
      <IntroPage />
      <MainPage />
    </div>
  )
};

export default App;

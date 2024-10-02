import React from "react";
import { AnimatedBackground } from "animated-backgrounds";
import Background from "../pages/Background";
import Intro from "../pages/Intro";
import Resume2 from "./Resume2";
import Experiences from "../components/experiences";
import Portfolio from "./Portfolio";
import About from "../pages/About";

function Home() {
  return (
    <div>
      {/* <AnimatedBackground animationName="matrixRain" /> */}

      <Background></Background>
      <Intro></Intro>
      <About></About>
      <Portfolio></Portfolio>
      <Experiences></Experiences>
      <Resume2></Resume2>
    </div>
  );
}
export default Home;

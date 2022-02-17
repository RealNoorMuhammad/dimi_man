import React from "react";
import Herosection from "../Component/Herosection/herosection";
import Footer from "../Component/Footer/Footer";
import Team from "../Component/Team/Team";
import Roadmap from "../Component/RoadMap/roadmap";
import Territory from "../Component/Territory/Territory";
import Cards from "../Component/Cards/Cards";
import Headsouth from "../Component/HeadSouth/Headsouth";
import Play from "../Component/Play/Play";
import Ownyour from "../Component/OwnYour/ownyour";
import Line from "../Component/Line/line";
const LandingPage = () => {
  return (
    <div>
      <Herosection />

      <Play />

      <Headsouth />

      <Cards />

      <Ownyour />

      <Territory />

      <Roadmap />

      <Line />
      <Team />

      <Footer />
    </div>
  );
};

export default LandingPage;

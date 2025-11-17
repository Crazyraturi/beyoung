import React from "react";
import Herosection from "../components/Home/Herosection";
import SuperSavingCombos from "../components/Home/SuperSavingCombos";
import NewArrival from "../components/Home/NewArrival";

const Home = () => {
  return (
    <div>
      <Herosection />
      <SuperSavingCombos/>
      <NewArrival />
    </div>
  );
};

export default Home;

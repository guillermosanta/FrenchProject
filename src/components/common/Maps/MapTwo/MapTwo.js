import React from "react";
import style from "./MapTwo.module.css";

import BackArrow from "./../../BackArrow";
import Header from "./../../Header";
import MapTwoImage from "./../../../../images/MapTwo.png";
import InsideSwitchButton from "./../../InsideSwitchButton";

function MapTwo() {
  return (
    <div>
      <Header content={"Carte 2"} />
      <BackArrow />
      <img className={style.image} src={MapTwoImage} alt="mapTwo" />
      <InsideSwitchButton content={"Jour 2"} link={"/Jour/2"} />
    </div>
  );
}

export default MapTwo;

import React from "react";
import BackArrow from "./../../BackArrow";
import Header from "./../../Header";
import style from "./MapFour.module.css";

import MapFourImage from "./../../../../images/MapFour.png";
import InsideSwitchButton from "./../../InsideSwitchButton";

function MapFour() {
  return (
    <div>
      <Header content={"Carte 4"} />
      <BackArrow />
      <img className={style.image} src={MapFourImage} alt="MapFour" />
      <InsideSwitchButton content={"Jour 4"} link={"/Jour/4"} />
    </div>
  );
}

export default MapFour;

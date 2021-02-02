import React from "react";
import BackArrow from "./../../BackArrow";
import Header from "./../../Header";
import style from "./MapThree.module.css";

import MapThreeImage from "./../../../../images/MapThree.png";
import InsideSwitchButton from "./../../InsideSwitchButton";

function MapThree() {
  return (
    <div>
      <Header content={"Carte 3"} />
      <BackArrow />
      <img className={style.image} src={MapThreeImage} alt="MapThree" />
      <InsideSwitchButton content={"Jour 3"} link={"/Jour/3"} />
    </div>
  );
}

export default MapThree;

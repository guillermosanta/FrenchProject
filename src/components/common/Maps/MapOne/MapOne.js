import React from "react";
import style from "./MapOne.module.css";

import BackArrow from "./../../BackArrow";
import Header from "./../../Header";
import MapOneImage from "./../../../../images/MapOne.png";
import InsideSwitchButton from "./../../InsideSwitchButton";

function MapOne() {
  return (
    <div>
      <Header content={"Carte 1"} />
      <BackArrow />
      <img className={style.image} src={MapOneImage} alt="mapOne" />
      <InsideSwitchButton content={"Jour 1"} link={"/Jour/1"} />
    </div>
  );
}

export default MapOne;

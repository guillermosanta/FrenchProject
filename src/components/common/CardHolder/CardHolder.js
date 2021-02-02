import React, { useEffect } from "react";
import style from "./CardHolder.module.css";
import Card from "./Card";

function CardHolder(props) {
  return (
    <div>
      <div className={style.cardHolder}>
        <Card
          color={"blue"}
          day={"1"}
          url={"/" + (props.isDaysOn ? "Jour/1" : "Carte/1")}
          isDaysOn={props.isDaysOn}
        />
        <Card
          color={"white"}
          day={"2"}
          url={"/" + (props.isDaysOn ? "Jour/2" : "Carte/2")}
          isDaysOn={props.isDaysOn}
        />
        <Card
          color={"white"}
          day={"3"}
          url={"/" + (props.isDaysOn ? "Jour/3" : "Carte/3")}
          isDaysOn={props.isDaysOn}
        />
        <Card
          color={"blue"}
          day={"4"}
          url={"/" + (props.isDaysOn ? "Jour/4" : "Carte/4")}
          isDaysOn={props.isDaysOn}
        />
      </div>
    </div>
  );
}

export default CardHolder;

import React from "react";
import style from "./CardHolder.module.css";
import Card from "./Card";

function CardHolder() {
  return (
    <div>
      <div className={style.cardHolder}>
        <Card color={"blue"} day={"1"} url={"Jour1"} />
        <Card color={"white"} day={"2"} url={"Jour2"} />
        <Card color={"white"} day={"3"} url={"Jour3"} />
        <Card color={"blue"} day={"4"} url={"Jour4"} />
      </div>
    </div>
  );
}

export default CardHolder;

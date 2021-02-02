import React from "react";
import style from "./DayThree.module.css";

import BackArrow from "./../../BackArrow";
import Header from "./../../Header";
import LeTour from "./../../../../images/LeTour.png";
import LaBuche from "./../../../../images/Bistro-Sous-Le-Fort.png";
import VielleVilleQuébec from "./../../../../images/VielleVilleQuébec.png";

import InfoCard from "./../../InfoCard";
import InsideSwitchButton from "./../../InsideSwitchButton";

function DayThree() {
  return (
    <div>
      <Header content={"Jour 3"} />
      <BackArrow />
      <div className={style.infoCardContainer}>
        <InfoCard
          image={LeTour}
          alt={"LeTour"}
          text={
            "Le matin nous allons un tour guidé dans le Vieux-Québec. Nous allons voir tous les endroits les plus importants dans le Vieux-Québec. Le guider est professionnel et utile. Nous allons appren ons beaucoup."
          }
        />
        <InfoCard
          image={LaBuche}
          alt={"LaBuche"}
          text={
            "Nous allons manger à la Bûche. La Bûche est un restaurant traditionnel du Québec dans la vieille ville de Québec. La décoration est originale et unique. Nous allons parler avec les propriétaires."
          }
        />
        <InfoCard
          image={VielleVilleQuébec}
          alt={"VielleVilleQuébec"}
          text={
            "Dans la nuit, nous allons visiter et promener la vieille ville de Québec. Nous allons voir les décorations de Noël! Le vieille ville de Québec a une histoire passionnante."
          }
        />
      </div>
      <InsideSwitchButton content={"Carte 3"} link={"/Carte/3"} />
    </div>
  );
}

export default DayThree;

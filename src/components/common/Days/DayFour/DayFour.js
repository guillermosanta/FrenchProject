import React from "react";
import BackArrow from "./../../BackArrow";
import Header from "./../../Header";
import style from "./DayFour.module.css";

import CielRestaurant from "./../../../../images/CielRestaurant.png";
import FerryImage from "./../../../../images/Ferry.png";
import PlainsImage from "./../../../../images/Plains.png";

import InfoCard from "./../../InfoCard";
import InsideSwitchButton from "./../../InsideSwitchButton";

function DayFour() {
  return (
    <div>
      <Header content={"Jour 4"} />
      <BackArrow />
      <div className={style.infoCardContainer}>
        <InfoCard
          image={CielRestaurant}
          alt={"CielRestaurant"}
          text={
            "Nous allons déjeuner au restaurant Ciel. Ce restaurant est dans un tour qui domine toute la ville. Nous allons prendre des photos dans cet unique Ciel restaurant."
          }
        />
        <InfoCard
          image={FerryImage}
          alt={"FerryImage"}
          text={
            "Dans le matin nous allons prendre le traversier de Québec à Lévis et immortaliser le skyline de Québec. Nous ne allons pas nager parce que le l'eau est trop froid!"
          }
        />
        <InfoCard
          image={PlainsImage}
          alt={"PlainsImage"}
          text={
            "Nous allons visiter les Plaines d'Abraham. Les Plaines d'Abraham sont un endroit historique et beau. La bataille des Plaines d'Abraham s'est déroulée le 13 septembre 1759 pendant la guerre de la conquête à Québec, en Nouvelle-France. Nous allons visiter les statues dans les Plaines d'Abraham."
          }
        />
      </div>
      <InsideSwitchButton content={"Carte 4"} link={"/Carte/4"} />
    </div>
  );
}

export default DayFour;

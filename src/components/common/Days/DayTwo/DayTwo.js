import React from "react";
import BackArrow from "./../../BackArrow";
import Header from "./../../Header";
import style from "./DayTwo.module.css";

import MuséeImage from "./../../../../images/Musée-des-civilisations.png";
import BistroSousLeFortImage from "./../../../../images/Bistro-Sous-Le-Fort.png";
import CôtesÀCôtesImage from "./../../../../images/Côtes-à-Côtes.png";

import InfoCard from "./../../InfoCard";
import InsideSwitchButton from "./../../InsideSwitchButton";

function DayTwo() {
  return (
    <div>
      <Header content={"Jour 2"} />
      <BackArrow />
      <div className={style.infoCardContainer}>
        <InfoCard
          image={MuséeImage}
          alt={"HotelImage"}
          text={
            "Le matin nous allons visiter le musée de la civilisation! C’est un musée pour découvrir l’histoire de la ville. Nous allons voir l'art ancien tandis que nous apprenons l’histoire."
          }
        />
        <InfoCard
          image={BistroSousLeFortImage}
          alt={"PetitChamplainImage"}
          text={
            "Nous allons manger au Bistro Sous Le Fort. C’est le restaurant parfait. Il a une bonne décoration et un bon service. C’est aussi près du musée."
          }
        />
        <InfoCard
          image={CôtesÀCôtesImage}
          alt={"CôtesÀCôtesImage"}
          text={
            "Nous allons dîner dans les Côtes-à-Côtes Resto. C’est un restaurant près de la rue Petit-Champlain. La nourriture est coûteuse!  Nous allons visiter les chefs!"
          }
        />
      </div>
      <InsideSwitchButton content={"Carte 2"} link={"/Carte/2"} />
    </div>
  );
}

export default DayTwo;

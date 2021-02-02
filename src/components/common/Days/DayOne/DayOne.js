import React from "react";
import style from "./DayOne.module.css";

import BackArrow from "./../../BackArrow";
import Header from "./../../Header";

import HotelImage from "./../../../../images/Hotel.png";
import PetitChamplainImage from "./../../../../images/Petit-Champlain.png";
import CôtesÀCôtesImage from "./../../../../images/Côtes-à-Côtes.png";

import InfoCard from "./../../InfoCard";
import InsideSwitchButton from "./../../InsideSwitchButton";

function DayOne() {
  return (
    <div>
      <Header content={"Jour 1"} />
      <BackArrow />
      <div className={style.infoCardContainer}>
        <InfoCard
          image={HotelImage}
          alt={"HotelImage"}
          text={
            "Nous allons rester à l'hôtel Fairmont Le Château Frontenac. C'est un hôtel magnifique dans le Vieux-Québec. Nous allons aller à la piscine, ou dîner au restaurant dans l’hôtel."
          }
        />
        <InfoCard
          image={PetitChamplainImage}
          alt={"PetitChamplainImage"}
          text={
            "Le matin, nous allons visiter la Rue Petit-Champlain. Petit-Champlain est une des plus belles rues du Canada. C’est dans le Vieux Québec. Nous allons peut-être faire des courses.Nous allons aussi peut-être voir une peinture murale à la Rue Petit-Champlain!"
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
      <InsideSwitchButton content={"Carte 1"} link={"/Carte/1"} />
    </div>
  );
}

export default DayOne;

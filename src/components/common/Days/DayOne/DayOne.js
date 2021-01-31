import React from "react";
import style from "./DayOne.module.css";

import BackArrow from "./../BackArrow";
import Header from "./../../Header";
import HotelImage from "./../../../../images/Hotel.png";
import PetitChamplainImage from "./../../../../images/Petit-Champlain.png";

import InfoCard from "./../../InfoCard";
import Button from "./../../Button";

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
          alt={"HotelImage"}
          text={
            "Le matin, nous allons magasiner à la Rue Petit-Champlain. Petit-Champlain est une des plus belles rues du Canada. C’est dans le Vieux Québec. Nous allons voir une peinture murale à la Rue Petit-Champlain!"
          }
        />
        <InfoCard
          image={HotelImage}
          alt={"HotelImage"}
          text={
            "Nous allons reseter à l'hôtel Fairmont Le Château Frontenac. C'est un hôtel magnifique dans le Vieux-Québec. Nous allons aller à la piscine, ou dîner au restaurant dans l’hôtel."
          }
        />
      </div>
      <Button link="/Map/1" />
    </div>
  );
}

export default DayOne;

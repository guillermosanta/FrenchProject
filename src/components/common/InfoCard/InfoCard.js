import React from "react";
import style from "./InfoCard.module.css";

function InfoCard(props) {
  return (
    <div className={style.infoCard}>
      <img src={props.image} alt={props.alt} />
      <p> {props.text} </p>
    </div>
  );
}

export default InfoCard;

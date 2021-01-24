import React from "react";
import style from "./Card.module.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Card(props) {
  return (
    <Link to={props.url}>
      <div className={style.card} style={{ backgroundColor: props.color }}>
        <h2 className={style.cardText}> Jour {props.day} </h2>
        <p> </p>
      </div>
    </Link>
  );
}

export default Card;

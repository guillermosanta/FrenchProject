import React, { useState } from "react";
import style from "./SwitchButton.module.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

function SwitchButton(props) {
  return (
    <div className={style.button}>
      <Link to={props.isDaysOn ? "/Cartes" : "/"}>
        <h3> {props.isDaysOn ? "Cartes" : "Jours"} </h3>
      </Link>
    </div>
  );
}

export default SwitchButton;

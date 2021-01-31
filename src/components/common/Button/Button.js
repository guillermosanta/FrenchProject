import React from "react";
import style from "./Button.module.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Button(props) {
  return (
    <div className={style.button}>
      <Link to={props.link}>
        <h3> Carte </h3>
      </Link>
    </div>
  );
}

export default Button;

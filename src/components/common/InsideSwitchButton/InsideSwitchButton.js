import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import style from "./InsideSwitchButton.module.css";

function InsideSwitchButton(props) {
  return (
    <div className={style.button}>
      <Link to={props.link}>
        <h3>{props.content} </h3>
      </Link>
    </div>
  );
}

export default InsideSwitchButton;

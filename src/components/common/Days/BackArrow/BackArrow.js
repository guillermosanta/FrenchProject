import React from "react";
import style from "./BackArrow.module.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

function BackArrow() {
  return (
    <Link to="/">
      <img
        src="https://static.thenounproject.com/png/2690272-200.png"
        alt="Back_Arrow"
        className={style.backArrow}
      />
    </Link>
  );
}

export default BackArrow;

import React from "react";
import style from "./LinkButton.module.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

function LinkButton() {
  return (
    <div className={style.button}>
      <Link to="/Sources">
        <h3>Sources</h3>
      </Link>
    </div>
  );
}

export default LinkButton;

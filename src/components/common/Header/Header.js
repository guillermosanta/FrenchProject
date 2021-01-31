import React from "react";
import style from "./Header.module.css";

import CanadaFlag from "./Flags/CanadaFlag";
import QuebecFlag from "./Flags/QuebecFlag";

function Header(props) {
  return (
    <div>
      <div className={style.header}>
        <CanadaFlag />
        <QuebecFlag />
        <h1 className={style.title}> {props.content}</h1>
        <QuebecFlag />
        <CanadaFlag />
      </div>
    </div>
  );
}

export default Header;

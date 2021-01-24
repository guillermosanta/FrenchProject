import React from "react";
import style from "./Header.module.css";

import CanadaFlag from "./Flags/CanadaFlag";
import QuebecFlag from "./Flags/QuebecFlag";

function Header() {
  return (
    <div>
      <div className={style.header}>
        <CanadaFlag />
        <QuebecFlag />
        <h1 className={style.title}> Nous allons aller au Québec!</h1>
        <QuebecFlag />
        <CanadaFlag />
      </div>
    </div>
  );
}

export default Header;

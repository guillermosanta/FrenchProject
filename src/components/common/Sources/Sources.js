import React from "react";
import style from "./Sources.module.css";

import Header from "./../Header";
import BackArrow from "./../BackArrow";

function Sources() {
  return (
    <div>
      <Header content={"Sources"} />
      <BackArrow />
      <div className={style.linkWrapper}>
        <a href="https://www.mcq.org/en"> {"https://www.mcq.org/en"} </a>
        <a href="https://www.voyagetips.com/que-faire-a-quebec/#Visiter_Quebec_en_2_jours">
          {
            "https://www.voyagetips.com/que-faire-a-quebec/#Visiter_Quebec_en_2_jours"
          }
        </a>
        <a href="http://www.bistrosouslefort.com/">
          {"http://www.bistrosouslefort.com/"}{" "}
        </a>
        <a href="https://onedayonetravel.com/visiter-quebec-pour-la-premiere-fois-conseils-et-astuces/ ">
          {
            "https://onedayonetravel.com/visiter-quebec-pour-la-premiere-fois-conseils-et-astuces/"
          }
        </a>
        <a href="https://www.quebec-cite.com/fr/quoi-faire-quebec/premiere-visite">
          {"https://www.quebec-cite.com/fr/quoi-faire-quebec/premiere-visite"}
        </a>
      </div>
    </div>
  );
}

export default Sources;

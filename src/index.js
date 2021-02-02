import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import {
  BrowserRouter as Router,
  Switch,
  useParams,
  Route,
} from "react-router-dom";

import Header from "./components/common/Header";
import PageBody from "./components/common/PageBody";
import CardHolder from "./components/common/CardHolder";
import SwitchButton from "./components/common/SwitchButton";
import LinkButton from "./components/common/LinkButton";
import Sources from "./components/common/Sources";

import DayOne from "./components/common/Days/DayOne";
import DayTwo from "./components/common/Days/DayTwo";
import DayThree from "./components/common/Days/DayThree";
import DayFour from "./components/common/Days/DayFour";

import MapOne from "./components/common/Maps/MapOne";
import MapTwo from "./components/common/Maps/MapTwo";
import MapThree from "./components/common/Maps/MapThree";
import MapFour from "./components/common/Maps/MapFour";

function App() {
  const [isDaysOn, setIsDaysOn] = useState(true);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header content={"Nous allons aller au Québec!"} />
            <PageBody>
              <CardHolder isDaysOn={true} />
            </PageBody>
            <div className={"buttonHolder"}>
              <SwitchButton isDaysOn={true} />
            </div>
            <LinkButton />
          </Route>
          <Route exact path="/Cartes">
            <Header content={"Nous allons aller au Québec!"} />
            <PageBody>
              <CardHolder isDaysOn={false} />
            </PageBody>
            <div className={"buttonHolder"}>
              <SwitchButton isDaysOn={false} />
            </div>
            <LinkButton />
          </Route>
          <Route path="/Jour/1">
            <DayOne />
          </Route>
          <Route path="/Jour/2">
            <DayTwo />
          </Route>
          <Route path="/Jour/3">
            <DayThree />
          </Route>
          <Route path="/Jour/4">
            <DayFour />
          </Route>
          <Route path="/Carte/1">
            <MapOne />
          </Route>
          <Route path="/Carte/2">
            <MapTwo />
          </Route>
          <Route path="/Carte/3">
            <MapThree />
          </Route>
          <Route path="/Carte/4">
            <MapFour />
          </Route>
          <Route path="/Sources">
            <Sources />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

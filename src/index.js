import React from "react";
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
import Footer from "./components/common/Footer";

import DayOne from "./components/common/Days/DayOne";
import DayTwo from "./components/common/Days/DayTwo";
import DayThree from "./components/common/Days/DayThree";
import DayFour from "./components/common/Days/DayFour";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header content={"Nous allons aller au Québec!"} />
            <PageBody>
              <CardHolder />
            </PageBody>
            <Footer />
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
        </Switch>
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

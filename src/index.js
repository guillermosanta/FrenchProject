import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/common/Header";
import PageBody from "./components/common/PageBody";
import CardHolder from "./components/common/CardHolder";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="">
            <Header />
            <PageBody>
              <CardHolder />
            </PageBody>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

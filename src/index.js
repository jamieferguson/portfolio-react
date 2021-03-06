import React from "react";
import { render } from "react-dom";

import "./Styles/index.scss";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home";
import WorkShorthand from "./Work/WorkShorthand";
import WorkViator from "./Work/WorkViator";
import WorkTGM from "./Work/WorkTGM";
import WorkAus from "./Work/WorkAus";

const supportsHistory = "pushState" in window.history;

const Portfolio = () => (
  <BrowserRouter forceRefresh={!supportsHistory}>
      <Route
        render={({ location }) => {
          return (
            <Route
              location={location}
              render={() => (
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/shorthand" component={WorkShorthand} />
                  <Route path="/viator" component={WorkViator} />
                  <Route path="/the-global-mail" component={WorkTGM} />
                  <Route path="/the-australian" component={WorkAus} />
                </Switch>
              )}
            />
          );
        }}
      />
  </BrowserRouter>
);

render(<Portfolio />, document.getElementById("portfolio"));

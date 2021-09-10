import React from "react";
import { Route } from "react-router-dom";
import Home from "./container/Home";
import Counter from "./container/Counter";

export default (
  <React.Fragment>
    <Route path="/" exact component={Home} />
    <Route path="/counter" component={Counter} />
  </React.Fragment>
);

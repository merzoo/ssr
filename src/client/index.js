import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import routes from "../routes";
import Header from "../components/Header";

hydrate(
  <BrowserRouter>
    <Header></Header>
    <div className="container" style={{ marginTop: 70 }}>
      {routes}
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

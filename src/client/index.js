import React from "react";
import { hydrate } from "react-dom";
import Counter from "../container/Counter";

hydrate(<Counter />, document.getElementById("root"));

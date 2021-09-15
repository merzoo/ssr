import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducers from "./reducers/index";

export function getClientStore() {
  let initState = window.context.state;

  console.log(initState);
  return createStore(reducers, initState, applyMiddleware(thunk, logger));
}

export function getServerStore() {
  return createStore(reducers, applyMiddleware(thunk, logger));
}

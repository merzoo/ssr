import Home from "./container/Home";
import Counter from "./container/Counter";

export default [
  {
    path: "/",
    component: Home,
    exact: true,
    key: "/",
    loadData: Home.loadData,
  },
  {
    path: "/counter",
    component: Counter,
    key: "/counter",
  },
];

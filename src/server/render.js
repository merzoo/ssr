import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, Route, matchPath } from "react-router-dom";
import routes from "../routes";
import Header from "../components/Header";
import { Provider } from "react-redux";
import { getServerStore } from "../store";

const store = getServerStore();

export default function render(req, res) {
  // 1. match route 获取需要匹配的路由组件，可以使用1. regx正则， matchPath是自带的
  let matchRoutes = routes.filter((route) => matchPath(req.path, route));
  // 2. fetch route page data
  let promises = [];
  matchRoutes.forEach((route) => {
    if (route.loadData) {
      promises.push(route.loadData(store));
    }
  });

  Promise.all(promises).then(() => {
    const html = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url}>
          <Header></Header>
          <div className="container" style={{ marginTop: 70 }}>
            {routes.map((route) => (
              <Route {...route} />
            ))}
          </div>
        </StaticRouter>
      </Provider>
    );
    res.send(`
      <html>
          <head>
              <title>SSR</title>
              <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
          </head>
          <body>
              <div id="root">${html}</div>
              <script>
                window.context = {
                  state: ${JSON.stringify(store.getState())}
                }
              </script>
              <script src="client.js"></script>
          </body>
      </html>
     `);
  });
}

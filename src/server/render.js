import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, Link } from "react-router-dom";
import routes from "../routes";
import Header from "../components/Header";
import { Provider } from "react-redux";
import { getServerStore } from "../store";

const store = getServerStore();

export default function render(req, res) {
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url}>
        <Header></Header>
        <div className="container" style={{ marginTop: 70 }}>
          {routes}
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
            <script src="client.js"></script>
        </body>
    </html>
   `);
}

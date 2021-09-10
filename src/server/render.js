import React from "react";
import { renderToString } from "react-dom/server";
import Home from "../container/Home";

export default function render(req, res) {
  const html = renderToString(<Home />);
  res.send(`
    <html>
        <head>
            <title>SSR</title>
        </head>
        <body>
            <div id="root">${html}</div>
            <script src="client.js"></script>
        </body>
    </html>
   `);
}

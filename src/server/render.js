import React from "react";
import { renderToString } from "react-dom/server";
import Home from "../container/Home";
import Counter from "../container/Counter";

export default function render(req, res) {
  const html = renderToString(<Counter />);
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

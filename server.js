const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
//# use alternate localhost and the port Heroku assigns to $PORT
const host = '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port);

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/WdDetail/:id", (req, res) => {
      const actualPage = "/WdDetail";
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
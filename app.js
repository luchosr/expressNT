const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const indexRouter = require("./routes/index");
const PORT = process.env.port;
const HOSTNAME = process.env.hostname;
const app = express();

app
  //   .get("/", (req, res) => res.send("Hola express"))
  .use(indexRouter)
  .listen(PORT, () =>
    console.log(`Server listening on http://${HOSTNAME}:${PORT}`)
  );

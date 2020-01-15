const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const indexRouter = require("./routes/index");
const path = require("path");
const PORT = process.env.port;
const HOSTNAME = process.env.hostname;
const app = express();

app
  //   .get("/", (req, res) => res.send("Hola express"))
  .use(indexRouter)
  .use(express.static("public"))
  .listen(PORT, () =>
    console.log(`Server listening on http://${HOSTNAME}:${PORT}`)
  );

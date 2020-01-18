const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const indexRouter = require("./routes/index");
const path = require("path");
const PORT = process.env.port;
const HOSTNAME = process.env.hostname;
const app = express();

app.use(express.json());

app.use(indexRouter);

app.listen(PORT, () =>
  console.log(`Server listening on http://${HOSTNAME}:${PORT}`)
);

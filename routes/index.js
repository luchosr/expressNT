const express = require("express");
const router = express.Router();

const endpoints = {
  GET: [
    "/",
    "/over/:ki",
    "/download",
    "/download/internet",
    "/area51",
    "/undefined",
    "/shout/:word",
    "/users",
    "/html/:name/:color",
    "/google"
  ],
  POST: ["/area51", "/users", "/series"]
};

router.route("/").get((req, res) => res.json(endpoints));

module.exports = router;

const express = require("express");
const router = express.Router();
const path = require("path");

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

router.route("/over/:ki").get((req, res) => {
  const { ki } = req.params;

  ki <= 9000
    ? res.sendFile(path.join(__dirname, "../public/images", "meh.jpg"))
    : res.sendFile(path.join(__dirname, "../public/images", "over9000.jpg"));
});

module.exports = router;

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

const routing = endpoint => router.route(endpoint);

routing("/").get((req, res) => res.json(endpoints));

routing("/over/:ki").get((req, res) => {
  const { ki } = req.params;

  ki <= 9000
    ? res.sendFile(path.join(__dirname, "../public/images", "meh.jpg"))
    : res.sendFile(path.join(__dirname, "../public/images", "over9000.jpg"));
});

routing("/download").get((req, res) => {
  res.send("no te entiendo");
});

routing("/download/internet").get((req, res) => {
  res.download(
    path.join(__dirname, "../public/images", "download-all-the-internet.jpeg")
  );
});

routing("/area51").get((req, res) =>
  res.status(401).json({ message: "RESTRICTED AREA. NO TRESPASSING." })
);

module.exports = router;

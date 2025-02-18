const express = require("express");
const path = require("path");

const rootDir = require("../util/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("In a middleware which always runs");
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;

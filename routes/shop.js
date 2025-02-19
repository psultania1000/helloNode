const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("../routes/admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
  console.log("books: ", adminData.products);
});

module.exports = router;

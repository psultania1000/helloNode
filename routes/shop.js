const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("../routes/admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", {
    prods: products,
    path: "/",
    pageTitle: "Shop",
  });
});

module.exports = router;

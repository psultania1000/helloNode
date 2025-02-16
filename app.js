const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded());

app.use("/", (req, res, next) => {
  console.log("In a middleware which always runs");
  next();
});

app.use("/add-products", (req, res, next) => {
  console.log("In product page: ");
  res.send(
    '<form action="/product" method="POST"><input type=\text" placeholder="Type here..."/><button type="submit">submit</button></form>'
  );
});

app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use((req, res, next) => {
  console.log("In another middleware");
  res.send("<h1>Hello from express</h1>");
});

app.listen(3000);

const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("home");
});

app.get("/about", function(req, res){
  res.render("about");
});


app.listen('3000');

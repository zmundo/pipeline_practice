const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("home");
});

//about route
app.get("/about", function(req, res){
  res.render("about");
});



app.listen(process.env.PORT || '3000');

const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.set("view-engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});


app.listen(3000, ()=>{
  console.log("Server is running or port: 3000");
});

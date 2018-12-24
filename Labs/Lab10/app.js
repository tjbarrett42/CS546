const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
//const static = express.static(__dirname + "/public"); No css
//const movieData = require("./data.js");

const configRoutes = require("./routes");
const exphbs = require("express-handlebars");

// We create our express isntance:
const app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//app.use(static); No css
configRoutes(app);

app.listen(3000, function() {
  console.log("Your server is now listening on port 3000! Navigate to http://localhost:3000 to access it");

  if (process && process.send) process.send({done: true}); // ADD THIS LINE
});
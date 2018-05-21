// Boiler Plate
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT||3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Actual code

//Routing
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Listener
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
    });
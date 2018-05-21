//Dependancies

var path = require("path");

//Page Routing

module.exports = function(app) {

    //Get
        app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
        });
    
    //Default
        app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
        });

};
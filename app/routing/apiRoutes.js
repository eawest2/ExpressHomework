// Import users

var users = require("../data/users.js");

//Page routing

module.exports = function (app) {

    //Get requests
    app.get("/api/users", function (req,res) {
        res.json(users);
    });

    //Post requests

    app.post("/api/users", function (req,res) {
        users.push(req.body);
        console.log(req);

        var differenceArr = [];

        for (var i = 0; i<users.length; i++){
            var working = users[i]

            var difference = (Math.abs(working.scores[1] - req.scores[1]) +
            Math.abs(working.scores[2] - req.scores[2]) +
            Math.abs(working.scores[3] - req.scores[3]) +
            Math.abs(working.scores[4] - req.scores[4]) +
            Math.abs(working.scores[5] - req.scores[5]) +
            Math.abs(working.scores[6] - req.scores[6]) +
            Math.abs(working.scores[7] - req.scores[7]) +
            Math.abs(working.scores[8] - req.scores[8]) +
            Math.abs(working.scores[9] - req.scores[9]) +
            Math.abs(working.scores[10] - req.scores[10]));

            differenceArr.push(difference);

        }
        
        
        
        res.json()
    });
};
// Import users

var users = require("../data/users.js");

//Page routing

module.exports = function (app) {

    //Get requests
    app.get("/api/users", function (req,res) {
        res.json(users);
    });

    //Post requests

    app.post("/api/users", function(req, res) {
        console.log("New Entry: " + JSON.stringify(req.body));
        var newEntry = req.body;
        var entryScores = newEntry.scores;
        var totalDiffArr = []
        var lowest = 51;
        var matchName;
        var matchPhoto;

        for (var i = 0; i < users.length; i++) {
            var totalDiff = 0;
            for (var j = 0; j < entryScores.length; j++) {
            totalDiff += Math.abs(Number(users[i].scores[j]) - Number(entryScores[j]));
            }
            console.log(totalDiff);

            totalDiffArr.push(totalDiff);
            console.log("totalDiffArr: " + totalDiffArr);

            if (totalDiff < lowest) {
            lowest = totalDiff;
            matchName = users[i].name;
            matchPhoto = users[i].photo;
            console.log(matchName);
            console.log(matchPhoto);
            }
        }
        //***** When you send it back to the front end, it has to use the properties name and photo since that is what you are using in the front end when you do data.name and data.photo. It is expecting to find name and photo. It also has to be returned as an object *****
        var match = {
            name: matchName,
            photo: matchPhoto
        }
        console.log(match);
        res.json(match);
        });
};
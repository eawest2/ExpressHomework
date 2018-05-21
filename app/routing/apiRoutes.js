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
        
        generateMatch(req, res);
        });
};

function generateMatch (req, res){
    var newEntry = req.body;
        var entryScores = newEntry.scores;
        var diffArr = []
        var lowest = 51;
        var matchName;
        var matchPhoto;

        for (var i = 0; i < users.length; i++) {
            var difference = 0;
            for (var j = 0; j < entryScores.length; j++) {
            difference += Math.abs(Number(users[i].scores[j]) - Number(entryScores[j]));
            }
            console.log(difference);

            diffArr.push(difference);
            console.log("diffArr: " + diffArr);

            if (difference < lowest) {
            lowest = difference;
            matchName = users[i].name;
            matchPhoto = users[i].photo;
            console.log(matchName);
            console.log(matchPhoto);
            }
        }
        var match = {
            name: matchName,
            photo: matchPhoto
        };
        
        users.push(newEntry);
        res.json(match);
        console.log(match);
}
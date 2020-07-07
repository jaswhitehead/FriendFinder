//Pull required dependencies
var path = require("path");

//Export HTML routes
module.exports = function (app) {
    
    // Deliver any input from the user to the Home Page.
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });

    // Ddeliver survey page route.
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

  
}
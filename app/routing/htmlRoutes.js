var path = require("path");

module.exports = function (app) {
    
    // This will deliver a survey page route
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    // This will deliver any input from the user to the Home Page.
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });

}
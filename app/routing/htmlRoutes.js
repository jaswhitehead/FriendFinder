//Pull required dependencies (Ive seen it done this way: module.exports = function (app, path))
var path = require("path");

module.exports = function (app) {
    
    // If no matching route is found, default to the Home Page.
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    // Get request to deliver the Survey page.
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

}
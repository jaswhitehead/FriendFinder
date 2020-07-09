// Call the express & path packages
var express = require("express");
var path = require("path");

// Initialize Express to listen to a port
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// These routes give the server a "map" of how to respond when users visit or request data from various URLs.
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// LISTENER
// The below code effectively "starts" the server
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT + '. Go to: http://localhost:'+ PORT);
});
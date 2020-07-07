// Call the express package
var express = require("express");

// Read File
var path = require("path");

// Initialize Express to listen to a port
var app = express();

var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
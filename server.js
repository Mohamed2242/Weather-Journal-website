// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

//body-parser allow the backend to access JSON data sent from the client using request.body in POST route handler.
const bodyParser = require("body-parser");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));


// Setup Server

// Callback function to complete GET '/all'
const getAll = (req, res) => res.status(200).send(projectData);
// GET Route
app.get("/all", getAll);

// Callback function to complete POST '/add'
const postData = (req, res) => {
    projectData = req.body;
    console.log(projectData);
    res.status(200).send(projectData);
  }
// GET Route
app.post("/add", postData);

const port = 4040;

// function to test the server 
const listening = () =>
console.log(`Server running at http://localhost:${port}`);

// spin up the server
app.listen(port, listening);
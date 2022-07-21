// Setup empty JS object to act as endpoint for all routes
let projectData = {};


const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();
const cors = require ("cors"); 



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use(express.static('website')); 

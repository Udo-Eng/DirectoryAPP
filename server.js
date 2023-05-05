const express = require('express');
const app = express();
const logger = require("./logger");
const connectToDataBase = require('./config');
const router = require("./route");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

// connect to the database
connectToDataBase();

//Enable the parsing of 
app.use(express.json());

//Enable the parsing of form input 
app.use(express.urlencoded({extended: false}));

app.use(cors());

// Set Up the routes for employees
app.use("/api/v1/employees",router);


// A general error handler middleware
app.use((err,req,res,next) => {
    if(err)  res.status(500).send("Server error unable to respond");
})

// Specify the PORT for the server
const PORT =  process.env.PORT || 5000;


// Listen on port 5000 or process.env.PORT
app.listen(PORT, () => {
        logger.info(`Application running on port ${PORT}`);
});



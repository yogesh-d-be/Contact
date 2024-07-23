require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const connect = require('./Common/DbConnection');


const app = express();
const cors = require('cors');
const contactRouter = require('./Routes/ContactRouter');
const jsonParser = bodyParser.json();
app.use(cors());
app.use(jsonParser);

// Connect to the database
connect();

// Define routes

app.use("/api/contact",contactRouter)


const { PORT } = process.env;
const port = PORT || 5000; 
app.listen(port, () => {
    console.log("Server is running:", port);
});

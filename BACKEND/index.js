const express = require('express');
require("dotenv").config();
const app = express()
const cors = require("cors")
const { mongoose } = require('mongoose');

require("./db/connection")
const OUR_PROJECT = require("./models/ProjectShema")
const router =require("./routes/router")

const port = 3000;

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(port, () => {
    console.log("Server starting ")
})
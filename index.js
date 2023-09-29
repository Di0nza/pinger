const express = require('express');
require("dotenv").config();
const cors = require("cors");
const app = express();
const startPinger = require('./startPinger');
app.use(cors());

startPinger();

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
});
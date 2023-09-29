const express = require('express');
require("dotenv").config();
const cors = require("cors");
const app = express();

app.use(cors());

setInterval(()=>{
    fetch(process.env.LINK)
        .then(data=> {
            console.log(data);
        })
        .catch(e =>{
            console.log(e);
        });
}, 5*60*1000);

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
});
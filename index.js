const express = require('express');
require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(cors());

let date;

function dateOutput(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${day.toString().length === 1 ? `0${day}` : `${day}`}.${month.toString().length === 1 ? `0${month}` : `${month}`}.${year} | ${hours}:${minutes.toString().length === 1 ? `0${minutes}` : `${minutes}`}`;
}
setInterval(()=>{
    date = new Date();
    fetch('http://test.server195361.nazwa.pl')
        .then(()=> {
            console.log(`Сервак пинганулся ${dateOutput(date)}`)
        })
        .catch(e =>{
            console.log(e);
        });
}, 10*60*1000);

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
});
const express = require("express");
const app = express();


const dbconfig = require('./db')
const roomsroute = require('./routes/roomsroute')
app.use('/api/rooms',roomsroute)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Node server started on port ${port}...`));

const express = require("express");
const app = express();
const dbconfig = require('./db')
const roomsroute = require('./routes/roomsroute')
const usersRoute = require('./routes/usersRoute')

app.use(express.json())
app.use('/api/rooms',roomsroute)
app.use('/api/users', usersRoute)
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Node server started on port ${port}...`));

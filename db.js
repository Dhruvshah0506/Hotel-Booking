const mongoose = require("mongoose");

var mongoURL =
  "mongodb+srv://Dhruv:dhruv123@cluster0.ufiuv.mongodb.net/Rooms";

mongoose.connect(mongoURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})

var connection = mongoose.connection;

connection.on('error', () => {
  console.log('mongodb connection failed')
})

connection.on('connected', () => {
  console.log('mongodb connection successful')
})
//const mongoose = require('mongoose');
//console.log(mongoose);


module.exports = mongoose

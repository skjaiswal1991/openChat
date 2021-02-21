const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/helloChat', {useNewUrlParser: true, useUnifiedTopology: true});

//console.log(mongoose)
const db = mongoose.connection;

db.on('error',console.error.bind(console,'Mongoos DB connection Error'));
db.once('open',()=>{
    console.log("We are connected with Mongoose Database");
})

module.exports = mongoose;
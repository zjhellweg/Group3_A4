const express = require('express');
const app = express();
const nodemon = require('nodemon');
app.use(express.json());

//mongoDB Package
const mongoose = require('mongoose');

const port = 1100;

const dbUrl = 'mongodb+srv://Drickikcha:1234@cluster0.iwesf.mongodb.net/Project1?retryWrites=true&w=majority';

mongoose.connect(dbUrl,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

//Mongo DB Connection

const db = mongoose.connection;

//handle DB Error, display connection

db.on('error', ()=>{
    console.error.bind(console,'connection error: ');
});

db.once('open', () => {
    console.log('MongoDB Connected');
});

//Schema/Model Declaration
/*
require('./Models/Object');
require('./Models/Object1');

const Object = mongoose.model('Object');
const Object1 = mongoose.model('Object1');
*/

app.get('/',(req,res)=>{
    return res.status(200).json("(message: OK)")
});

app.listen(port, ()=>{
    console.log(`Server started on port ` + port);
})
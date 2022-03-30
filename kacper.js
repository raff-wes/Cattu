var express = require('express');
var http = require('http');
var path = require("path");
//var bodyParser = require('body-parser');
var helmet = require('helmet');
var rateLimit = require("express-rate-limit");
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://rafal:rafal@cluster0.gsf4h.mongodb.net/test');
// const express = require('express');
const port = process.env.PORT || 3000;
const { MongoClient, ServerApiVersion } = require('mongodb');
const { body,validationResult } = require('express-validator');


const app = express(),
{ engine }  = require( 'express-handlebars' ), 
bodyParser  = require( 'body-parser' );


app.set('view engine', 'hbs');


app.use(express.static("public"));

app.use(express.json({extended: false})); //This is the line that you want to add

app.use( bodyParser({ extended: false }) )
app.engine( 'handlebars', engine({
defaultLayout: 'main'
}))
app.set( 'view engine', 'handlebars' )

app.post('/testowypost', function(sReq, sRes){    
    console.log('tytul! :', sReq.body.title);
    console.log('autor! :', sReq.body.author);
    console.log('nastroj! :', sReq.body.mood);
    console.log('time! :', sReq.body.time);


    sRes.sendStatus(200);   
});

app.get('/', function(req, res) {

    res.render('cattu');
    console.log("jestem");

});
app.get('/tuneadd', function(req, res) {

    res.render('index', {
         pageTitle: 'Cattu - Add',
         pageBody: 'Landingpage'
     });
});

var tuneSchema = new mongoose.Schema({
    title: String,
    author: String,
    mood: String,
    time: String,
    date: Date
   });

var Record = mongoose.model("Record", tuneSchema);

app.post('/tuneadd', (req, res) => {
    var myData = new Record(req.body);
    myData.save()
    .then(item => {

    res.send("item saved to database");
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(port);
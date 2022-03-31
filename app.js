var express = require('express');
var http = require('http');
var path = require("path");
//var bodyParser = require('body-parser');
var helmet = require('helmet');
var rateLimit = require("express-rate-limit");
// var mongoose = require("mongoose");
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://rafal:rafal@cluster0.gsf4h.mongodb.net/test');
// const express = require('express');
const port = process.env.PORT || 3000;
const { MongoClient, ServerApiVersion } = require('mongodb');
const { body, validationResult } = require('express-validator');
const { title } = require('process');


const app = express(),
    { engine } = require('express-handlebars'),
    bodyParser = require('body-parser');


app.set('view engine', 'hbs');


app.use(express.static("public"));

app.use(express.json({ extended: false })); //This is the line that you want to add

//app.use(bodyParser({ extended: false }))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('handlebars', engine({
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

app.post('/added', function(sReq, sRes) {
    console.log('title:', sReq.body.title);
    //var newTitle = sReq.body.title;
    console.log('author:', sReq.body.author);
    console.log('mood:', sReq.body.mood);
    console.log('time:', sReq.body.time);
    console.log('date:', sReq.body.date);

    sRes.sendStatus(200);
});




async function main() {


    const uri = "mongodb+srv://rafal:rafal@cluster0.gsf4h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


    const client = new MongoClient(uri);

    try {
        await client.connect(); // Connect to the MongoDB cluster

        await createListing(client, {
            title: "cokolwiek kurde",
            author: "Twenty One Pilots",
            mood: "Nostalgic",
            time: "Evening",
            date: "2022-09-09T23:00:00.000+00:00"
        })

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}
main().catch(console.error);
async function createListing(client, newListing) {
    const result = await client.db("cattu").collection("test1").insertOne(newListing);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}

app.listen(port);
var express = require('express');
var http = require('http');
var path = require("path");
var helmet = require('helmet');
var rateLimit = require("express-rate-limit");
const port = process.env.PORT || 3000;
const { MongoClient, ServerApiVersion } = require('mongodb');
const { body, validationResult } = require('express-validator');
const { title } = require('process');

const app = express(),
    { engine } = require('express-handlebars'),
    bodyParser = require('body-parser');

app.set('view engine', 'hbs');

app.use(express.static("public"));

app.use(express.json({ extended: false }));

//app.use(bodyParser({ extended: false }))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('handlebars', engine({
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')


async function main() {

    const uri = "mongodb+srv://rafal:rafal@cluster0.gsf4h.mongodb.net/cattu?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try {
        console.log('START');

        await client.connect(); // Connect to the MongoDB cluster



        app.post('/added', async function(sReq, sRes) {
            var newTitle = sReq.body.title;
            console.log('title:', newTitle);

            var newAuthor = sReq.body.author;
            console.log('author:', newAuthor);

            var newMood = sReq.body.mood;
            console.log('mood:', newMood);

            var newTime = sReq.body.time;
            console.log('time:', newTime);

            var newDate = sReq.body.date;
            console.log('date:', newDate);

            await createListing(client, {
                title: newTitle,
                author: newAuthor,
                mood: newMood,
                time: newTime,
                date: newDate // YYYY-MM-DD
            });

            sRes.sendStatus(200);

            //console.log(sReq); //Caution! It generates a lot of "spam" in the console !!!
            //console.log(sRes); //Caution! It generates a lot of "spam" in the console !!!

        });


    } catch (e) {
        console.error(e);
    } finally {

        //await client.close();
    }
}
main().catch(console.error);
async function createListing(client, newListing) {

    const result = await client.db("cattu").collection("test1").insertOne(newListing);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}

app.listen(port);
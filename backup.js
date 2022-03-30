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
//async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    /*
     const uri = "mongodb+srv://rafal:rafal@cluster0.gsf4h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
 

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        // await  listDatabases(client);
        await createListing(client, {
            title:"Stressed Out",
            author:"Twenty One Pilots",
            mood:"Nostalgic",
            time:"Evening",
            date:"2022-03-03T23:00:00.000+00:00"
        })
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function createListing(client, newListing){
    const result = await client.db("cattu").collection("test1").insertOne
    (newListing);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}
*/
/**
 * Print the names of all available databases
 * @param {MongoClient} client A MongoClient that is connected to a cluster
 */
/*
 async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
*/
// const generateTitle = () => {
//     return 'Cattu';
// }

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
    console.log('time! :', sReq.body.time);

    /*sRes.render('some-file', { name: sReq.body.name })*/
    sRes.sendStatus(200);   
});

app.get('/', function(req, res) {

    res.render('cattu');
    console.log("jestem");
    // app.use(express.static('public'));
    // app.use(express.static('files'));
    // const path = require('path');
    // app.use('/static', express.static(path.join(__dirname, 'public')));
    // const title = generateTitle();

    // res.render('index', {
    //     pageTitle: title,
    //     pageBody: 'index.html'
    // });
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
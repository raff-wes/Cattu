let express = require('express');
let http = require('http');
let path = require("path");
let helmet = require('helmet');
let rateLimit = require("express-rate-limit");
const port = process.env.PORT || 8080;
const { MongoClient, ServerApiVersion } = require('mongodb');
const { body, validationResult } = require('express-validator');
const { title } = require('process');
let cors = require('cors');
const res = require('express/lib/response');

const app = express(),
    { engine } = require('express-handlebars'),
    bodyParser = require('body-parser');

const corsOptions = {
    origin: 'http://localhost:3000/',
    allowedHeaders: ['Content-Type'],
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.set('view engine', 'hbs');

app.use(express.static("public"));

app.use(express.json({ extended: false }));

//app.use(bodyParser({ extended: false }))
app.use(express.json())
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

            //console.log(sReq);
            //console.log("TUTAJ!!!");
            //console.log(sReq.body);
            //const body = (sReq.body);
            let newTitle = sReq.body.title;
            console.log('title:', newTitle);

            let newAuthor = sReq.body.author;
            console.log('author:', newAuthor);

            let newUser = sReq.body.user;
            console.log('user:', newUser);

            let newMood = sReq.body.mood;
            console.log('mood:', newMood);

            let newTime = sReq.body.time;
            console.log('time:', newTime);

            let newDate = sReq.body.date;
            console.log('date:', newDate);

            await createListing(client, {
                title: newTitle,
                author: newAuthor,
                userId: newUser,
                mood: newMood,
                time: newTime,
                date: newDate // YYYY-MM-DD
            });

            sRes.sendStatus(200);

            //console.log(sReq); //Caution! It generates a lot of "spam" in the console !!!
            //console.log(sRes); //Caution! It generates a lot of "spam" in the console !!!

        });

        app.get('/sprawdz/:userId', async function(sReq, sRes) {
            const wynik = await findListingWithUserId(client, {
                userId: sReq.params.userId,
                maximumNumberOfResults: 5
            });
            sRes.json(wynik);
        });

    } catch (e) {
        console.error(e);
    } finally {
        //await client.close();
    }
}
main().catch(console.error);
async function createListing(client, newListing) {

    const result = await client.db("cattu").collection("beta").insertOne(newListing);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}

async function findListingWithUserId(client, {
    userId = "Guest",
    maximumNumberOfResults = Number.MAX_SAFE_INTEGER
}) {
    const cursor = client.db("cattu").collection("beta").find({
            userId: { $eq: userId }
        }).sort({ date: -1 })
        .limit(maximumNumberOfResults);

    const results = await cursor.toArray();

    if (results.length > 0) {
        console.log(`Found listing(s) for: ` + userId);
        results.forEach((results, i) => {

            console.log(' ');
            console.log(`${ i + 1 }`);
            console.log(`_id: ${ results._id }`);
            console.log(`title: ${ results.title }`);
            console.log(`author: ${ results.author }`);
            console.log(`mood: ${ results.mood }`);
            console.log(`time: ${ results.time }`);
            console.log(`date: ${ results.date }`);

        });
        //console.log(results);
    } else {
        console.log(`No listing(s) found for: ` + userId);
    }
    return results;
}

app.listen(port);
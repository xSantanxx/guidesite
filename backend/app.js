const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT;
app.use(bodyParser.json());
app.use(cors());

let db;
let coll;

const {MongoClient, ServerApiVersion} = require('mongodb');
const uri = process.env.URI; 

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try{

        await client.connect();

        await client.db("admin").command({ping: 1});

        console.log("Connected")

        app.listen(port, () => {
            console.log(`backend running on ${port}`)
        });


    } finally {}
}


app.get('/', (req, res) => {
    res.send('done');
})

app.post('/sendUser', async(req, res) => {
    console.log(req.body);

    res.send('information has been received');
})



run().catch(console.dir);
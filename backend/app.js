const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

dotenv.config({path: path.resolve(__dirname, '../.env')});

const port = process.env.VITE_PORT;
app.use(bodyParser.json());
app.use(cors());

let db;
let coll;

const {MongoClient, ServerApiVersion} = require('mongodb');
const { error } = require('console');
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

        db = client.db("travelList");
        coll = db.collection("users");

        console.log("Connected")

        app.listen(port, () => {
            console.log(`backend running on ${port}`)
        });


    } finally {}
}


app.get('/', (req, res) => {

    
})

app.post('/sendUser', async(req, res) => {
    let userEmail = req.body.email;
    let userPass = req.body.password;

    const q = {password: userPass};
    const o = {
        projection: {
            _id: 1,
            password: 1
        }
    };

    const checkForPass = await coll.findOne(q,o);

    const q2 = {email: userEmail};
    const o2 = {
        projection: {
            _id: 1, firstname: 1, email: 1
        }
    };

    const checkForEmail = await coll.findOne(q2,o2);

    if(checkForPass == null && checkForEmail == null){
        let obj = JSON.stringify({error: `Error is detected, ${userPass} and ${userEmail} are incorrect`});
        res.send(obj);
    } else if (checkForPass == null){
        let obj = JSON.stringify({error: `Error is detected, ${userPass} is incorrect`});
        res.send(obj);
    } else if (checkForEmail == null){
        let obj = JSON.stringify({error: `Error is detected, ${userEmail} is incorrect`});
        res.send(obj);
    } else {
        res.send(checkForEmail);
    }

    let obj = JSON.stringify({message: "Your account information is correct. \nSigning you in"});
    res.send(obj);
})



run().catch(console.dir);
const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname,'./build/')));
require("dotenv").config();
const {MongoClient}= require("mongodb");

app.use(express.json());
const OCRApiRoute = require('./Server/APIS/OCRApis');


const dbUrl = process.env.DATABASE_URL;
let client =  new MongoClient(dbUrl);
client.connect((err, client) => {
    if(err){
        console.info("error occured while connecting to mongo db");
    }
    else {
        console.log("database connected....");
        let databaseObj = client.db("OCR");

        let detailsCollection = databaseObj.collection('Details');
        app.set('detailsCollection', detailsCollection);
    }
})

let fileApis = require("./Server/APIS/FileApis");

app.use("/files", fileApis);
app.use("/OCR", OCRApiRoute);
const port = process.env.PORT;

app.listen(port, () => {
    console.log("server is running on port:8080");
})
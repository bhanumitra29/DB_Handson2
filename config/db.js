const { MongoClient } = require("mongodb")
const url = "mongodb://127.0.0.1:27017";
const mongoserver = new MongoClient(url);

const connection = async () => {
    try {
        await mongoserver.connect()
        console.log("Connection made successfully");
    }
    catch (err) {
        console.log("error connecting DB", err);
    }
}
connection();


const database = mongoserver.db("Human_Resource");


module.exports = { connection,database};


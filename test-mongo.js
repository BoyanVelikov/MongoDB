const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const connectionStr = 'mongodb://localhost:27017';
const client = new MongoClient(connectionStr);
client.connect(function(err) {
    if(err) {
        throw new Error(err)
    }

    const db = client.db('testdb');
    const people = db.collection('people');
    people.insert({"name": "John"}, (err, result) => {
        people.find({"name": "John"}).toArray((err, data) => {
            console.log(data);
        });
    });
});
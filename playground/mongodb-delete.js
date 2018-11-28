//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var url = 'mongodb://localhost:27017';

MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {
  
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  } // End of if (err)

  console.log('Connected to MongoDB server'); 

  const db = client.db('TodoApp'); 
  
  // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // }); // End of db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {

  // db.collection('Todos').deleteOne({text: 'eat shit'}).then((result) => {
  //   console.log(result);
  // }); // End of db.collection('Todos').deleteOne({text: 'eat shit'}).then((result) => {

  db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
    console.log(result);
  }); // End of db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {

  //client.close();

}); // End of MongoClient.connect(url, () => {
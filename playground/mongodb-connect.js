//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log('test object id:', obj);

var url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {
  
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  } // End of if (err)

  console.log('Connected to MongoDB server');

  /*
  const db = client.db('TodoApp');

  db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false
  }, (err, result) => {
    
    if (err) {
      return console.log('Unable to insert todo');
    } // End of if (err)

    console.log(JSON.stringify(result.ops, undefined, 2));

  }); // End of db.collection('Todos').insertOne({

  */

  const db = client.db('Users');

  db.collection('Users').insertOne({    
    name: 'Andrew',
    age: 25,
    location: 'Philadelphia'
  }, (err, result) => {
    
    if (err) {
      return console.log('Unable to insert user');
    } // End of if (err)

    console.log(result.ops[0]._id.getTimestamp());

  }); // End of db.collection('Users').insertOne({

  client.close();

}); // End of MongoClient.connect(url, () => {
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var url = 'mongodb://localhost:27017';

MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {
  
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  } // End of if (err)

  console.log('Connected to MongoDB server'); 

  const db = client.db('TodoApp'); 
  
  db.collection('Todos').findOneAndUpdate({
    _id: ObjectID('5bfd736ee9214e6af67cf8ec')
  }, {
    $set: {
      text: 'fap all night'
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  //client.close();

}); // End of MongoClient.connect(url, () => {
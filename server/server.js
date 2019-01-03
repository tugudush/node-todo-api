var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

// Setting up basic middleware for all Express requests
//app.use(bodyParser.urlencoded({ extended: true })); // Parses urlencoded bodies
app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   res.send('hello shit!');
// });

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
}); // End of app.post('/todos', (req, res) => {

app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};
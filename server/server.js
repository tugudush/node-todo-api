var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

// var newTodo = new Todo({
//   text: 'quickie',
//   completed: true  
// }); // End of var newTodo = new Todo({

// if (newTodo.completed) {
//   if (!newTodo.completedAt) {
//     newTodo.completedAt = Date.now();
//   } // End of if (!newTodo.completedAt)
// } // End of if (newTodo.completed)

//console.log(JSON.stringify(newTodo, null, 2));

// newTodo.save().then((doc) => {
//   console.log('Saved todo', JSON.stringify(doc, null, 2));
// }, (error) => {
//   console.log('Unable to save todo');
//   console.log(error);
// }); // End of newTodo.save().then((doc) => {

// var user = new User({
//   name: 'Jerome',
//   email: 'jerome2kph@gmail.com'
// }); // End of var user = new User({

// user.save().then((doc) => {
//   console.log('Saved user', JSON.stringify(doc, null, 2));
// }, (error) => {
//   console.log('Unable to save user');
//   console.log(error);
// }); // End of user.save().then((doc) => {
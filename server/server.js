var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true});

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
}); // End of var Todo = mongoose.model('Todo', {

var newTodo = new Todo({
  text: 'quickie',
  completed: true  
}); // End of var newTodo = new Todo({

if (newTodo.completed) {
  if (!newTodo.completedAt) {
    newTodo.completedAt = Date.now();
  } // End of if (!newTodo.completedAt)
} // End of if (newTodo.completed)

//console.log(JSON.stringify(newTodo, null, 2));

// newTodo.save().then((doc) => {
//   console.log('Saved todo', JSON.stringify(doc, null, 2));
// }, (error) => {
//   console.log('Unable to save todo');
//   console.log(error);
// }); // End of newTodo.save().then((doc) => {

var User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
}); // End of new User = mongoose.model('User', {

var user = new User({
  name: 'Jerome',
  email: 'jerome2kph@gmail.com'
}); // End of var user = new User({

user.save().then((doc) => {
  console.log('Saved user', JSON.stringify(doc, null, 2));
}, (error) => {
  console.log('Unable to save user');
  console.log(error);
}); // End of user.save().then((doc) => {
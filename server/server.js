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
  completed: false,
  completedAt: 123
}); // End of var newTodo = new Todo({

if (newTodo.completed) {
  if (!newTodo.completedAt) {
    newTodo.completedAt = Date.now();
  } // End of if (!newTodo.completedAt)
} // End of if (newTodo.completed)

console.log(JSON.stringify(newTodo, null, 2));

newTodo.save().then((doc) => {
  console.log('Saved todo', JSON.stringify(doc, null, 2));
}, (error) => {
  console.log('Unable to save todo');
  console.log(error);
}); // End of newTodo.save().then((doc) => {
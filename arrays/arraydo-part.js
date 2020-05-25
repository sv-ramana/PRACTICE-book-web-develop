const note = ['order cat food', 'clean kitcen', 'buy food', 'do work', 'exercise']

//challenge 

// 1. create array in objects of array
// 2. create function to remove a todo by text value

const todos = [{
    text: 'order cat food',
    completed: 'yes'
}, {
    text: 'clean kitcen',
    completed: 'no'
}, {                                       
    text: 'buy food',
    completed: 'yes'
}, {
    text: 'do work',
    completed: 'no'
}, {
    text: 'exercise',
    completed: 'yes'
}]

let delettodo = function(todos, word){
       let index = todos.findIndex(function(todo)
       {
           
          return todo.text === word
        })
           if (index > -1) {
               todos.splice(index, 1)
           }

           }
       
delettodo(todos, 'buy food')
console.log(todos)
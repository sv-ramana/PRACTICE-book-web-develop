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


const filter = function(todo, content) {
        return todos.filter(function(todo){
           const value = todo.completed.toLowerCase().includes(content.toLowerCase())
           const value2 = todo.text.toLowerCase().includes(content.toLowerCase())
           return value || value2

        })

}

console.log(filter(todos, 'yes'))

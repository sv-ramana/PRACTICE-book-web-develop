const apps = [{
    title: 'vnKat',
    body: 'false'
}, {
    title: 'venky',
    body: 'true'
}, {
    title: 'Hari',
    body: 'false'
}, {
    title: 'madhav',
    body: 'true'
}]

const sortage = function(todo){
    apps.sort(function(a, b){
        if (!a.body && b.body) {
            return -1
        }
        else if (!b.body && a.body) {
            return 1
        }
        else {
            return 0
        }
    })
}
sortage(apps)
console.log(apps)

// challenge


const todos = [{
    text: 'order cat food',
    completed: 'yes'
}, {
    text: 'clean Kitcen',
    completed: 'no'
}, {                                       
    text: 'buy food',
    completed: 'yes'
}, {
    text: 'do Work',
    completed: 'no'
}, {
    text: 'exercise',
    completed: 'Yes'
}]


const sorttodos = function(todo){   //we have to use a const to be like this down in another // this
    todos.sort(function(a, b){
        if (a.text.toLowerCase() < b.text.toLowerCase()) {
            return -1
        } else if (b.text.toLowerCase() < a.text.toLowerCase()) {
            return 1
        }else {
            return 0
        }

    })
}
sorttodos(todos) // we can call if the ariable is given in a const like this
console.log(todos)

// multiple arguments

let section = function(a, b, c) {
      console.log(a+b+c)
}
section(3, 3, 3)

// default arguments

let section2 = function(name = 'anonyimous', score = 0) {  
    return 'name: ' + name + '   -- score: '  +  score
}
let last= section2('venky', 98)
console.log(last)


//challenge area

let total = function(amount, tippercent = .2) {
        console.log(amount * tippercent)
}
total(100, .30)

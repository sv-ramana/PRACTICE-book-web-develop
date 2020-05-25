// string have types in   1) ``    2) ${}




let section2 = function(name = 'anonyimous', score = 0) {  
    return `name: ${name}  --  score:  ${score}`
}
let last= section2('venky', 98)
console.log(last)



//challenge area

let gettip = function(amount, usertip) {
     percent= amount * usertip
     return `total amount: ${amount}  and the tip would be ${usertip} final: = ${percent}rs`
}
let final= gettip(100, .25)
console.log(final)
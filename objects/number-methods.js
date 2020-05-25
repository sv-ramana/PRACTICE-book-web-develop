let num = 105.9876
// it will fixed hy 2 decimal numbers
console.log(num.toFixed(2))
// it will change the round figure related to number
console.log(Math.round(num))
// it cut the decimal and show the number
console.log(Math.floor(num))
// always a round up and set
console.log(Math.ceil(num))
// random number

let min = 10
let max = 20
let randomnum = Math.floor(Math.random() * (max -min)+1)+min
console.log(randomnum)

// challenge area

let min1 = 1
let max1= 5
let makeguess = function (number) {
    guess= (Math.random()* max1-min1 + 1)+min1
    if(guess <= 5 && guess >= 1) {                //return guess <= 5 && guess >= 1 //
        return true
    } else  {
        return false
    }
    
}
let guessing = makeguess(5)
console.log(guessing) 
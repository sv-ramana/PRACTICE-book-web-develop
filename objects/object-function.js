let mybook = {
    title: 2020,
    author: 'venkat ramana',
    pages: 328
} 
let otherbook = {
    title: 2019,
    author: 'andrew',
    pages: 780
} 
let getsummery = function(book) {
    return {

   summery:  `my book title is ${book.title} by ${book.author}`,
   summery2: `page count of the book is ${book.pages}`

        }
}

let booksummery = getsummery(otherbook)
console.log(booksummery)
let otherbooksummery = getsummery(mybook)
console.log(otherbooksummery)


let convertfarenhiet = function(farenhiet) {
    return {
            method: farenhiet,
            kelvin: (farenhiet + 459.67) * (5/9),
            celsius: (farenhiet-32) * (5/9)
    }
}
let sum = convertfarenhiet(75)
console.log(sum)
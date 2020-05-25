// this is the function in function which is call back function in array
const note = ['order cat food', 'clean kitcen', 'buy food', 'do work', 'exercise']
note.forEach(function() {
    console.log('testing how many')
})
note.forEach(function(iteam, index) {
    console.log(index)
    console.log(iteam)
})
 // challenge area

//1. first iteam
//2. second iteam

note.forEach(function(iteam, index) {
    console.log(`${index}. ${iteam}`)
    
})

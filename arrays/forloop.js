const loop = ['note1', 'note2', 'note3', 'note4', 'note5']
for(let count=0; count <= 2; count++) {
        console.log(loop[count])
}
console.log('what is loop,lenth')
console.log(loop.length-1)
console.log('here to go --')
for (let count=loop.length-1;  count>=0;  count--) {
    console.log(loop[count])
}



//challenge area
//1. order eat food
//2. clean kitchen

const note = ['order cat food', 'clean kitcen', 'buy food', 'do work', 'exercise']
for(let count=0; count<=5; count++) {
    console.log(`1. ${note[count]}`)
}

// or else another type


for(let count=0; count< note.length; count++) {
    const counts = count+1
    const notes = note[count]
    console.log(`${counts}. ${notes}`)
}
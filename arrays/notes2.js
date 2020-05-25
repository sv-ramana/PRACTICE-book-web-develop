let sum = ['test0', 'test1', 'test2', 'test3', 'test4']
console.log(sum.length)
console.log(sum)
console.log(sum.pop())
sum.push('newpush')
console.log(sum)
sum.splice(2, 3, 'splicepush1')
console.log(sum)
sum.shift()
console.log(sum)
sum.unshift('shiftpush')
sum.splice(2, 0, 'splicepush2')
console.log(sum)
sum[2] = 'nrmlpush'
console.log(sum)

//challlemge area

const note = ['order cat food', 'clean kitcen', 'buy food', 'do work', 'exercise']
console.log(note[note.length-2])
console.log(note.pop(note[note.length-2]))
console.log(note)
note.splice(5, 0, 'lastsleep')
console.log(note)
note.shift(0)
console.log(note)
    
// globel variable -----------parent variable
//  local variable ===========child variable
           //local variable=====child varible of local variable
//   local variable -----------child  variable


let name = 'varone'
if(true) {
        console.log(name)
        //let name = 'vartwo'//
}
name = 'vartwo'
if(true) {
    name = 'vartwo'
    console.log(name)
}



let temp = 'bunone'
if(true) {
    temp ='buntwo'
    if(true) {
        temp = 'bunthree'
        console.log(temp)
    }
}
if(true) {
    console.log(temp)
    
}
// leaked global - when we assigned the variable in the local variable its explecitly defined
// if we use let and assigned a varible then it work

if(true) {
    if(true) {
    same = 'haha'//taken this as a globel variable..
    console.log(same)
    }
}
console.log(same)
//functions are also used with global and local variable
// globel = farenhiet , num ,sum, sum1
//    local = final\
//            local = itsfrezing

let farenhiet = function (num)
 {
        let final= (num - 32) *  (5/9)
        if(final !==0) {
                let itisfrezing = true
                console.log(itisfrezing)
        }
        return final
}

let sum = farenhiet(32)
console.log(sum)

let sum1 = farenhiet(68)
console.log(sum1)
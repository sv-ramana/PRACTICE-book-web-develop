let name = '    venkata ramana     '
console.log(name)

// lenth property
console.log(name.length)


// change to uppercase
console.log(name.toUpperCase())

// change to lowercase
console.log(name.toLowerCase())

// include method

let password = 'venkat@378928'
console.log(password.includes('venkat'))

// trim method
console.log(name.trim())

//challenge area 

//isvalidpassword
//length is more than 8 and it contains the word password

let isvalidpassword = function(password) {
    if(password.length>8 && !password.includes('password'))
    {
        return true          //return password.length>8 && !password.includes('password' //
    }
    else {
        return false
    }
}

console.log(isvalidpassword('uecnecn@122E1SSue'))

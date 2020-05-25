const account = {
    name: 'venkata ramana',
    expence: []
}

// expence --> dicription, ammount
// add expence --> discription, ammount
//getaccountsummary --> totalup all expenses -->  venkata ramana has 2500 in expence

const getsummery = function(discription, ammount) {
     account.expence(function(discription, ammount){
           expence.push(discription = 'discription:' + discription)
           expence.push(ammount =  'ammount:' + ammount )

    })
}
account.expence('rent', 5000)
account.expence('bikewash', 500)
console.log(account.getsummery)
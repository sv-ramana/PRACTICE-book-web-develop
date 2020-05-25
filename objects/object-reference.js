let myaccount = {
   
    name: "venkata ramana",
    expense: 500,
    income: 1000

}

let otheraccount = {
    name: 'harimadhav',
    expense: 20,
    income: 100
}

let getstatement = function(sbi, ammount) {
        sbi.expense = sbi.expense + ammount   
      /*  return `expense name is ${sbi.expense}` */
}

/*let finishstatement = getstatement(otheraccount, 8000)
console.log(finishstatement)*/

/*getstatement(otheraccount, 8000)
console.log(otheraccount)*/


//challenge area

//adding income

let addingincome = function(incomeamount, income) {
        incomeamount.income=incomeamount + income
}
let resetaccount = function(account) {
        account.expense = 0
        account.income = 0
}
let getaccountsummary = function(account){
    let balance = account.expense - account.income
    return `account for  ${balance} , ${account.income} in income , ${account.expense} in expense.`
}
addingincome(otheraccount, 200)
sbi(otheraccount, 50)
sbi(otheraccount, 50)
console.log(getaccountsummary(otheraccount))
resetaccount(otheraccount)
console.log(getaccountsummary(otheraccount))
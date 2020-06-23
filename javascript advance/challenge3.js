
function  sum (ammount) {
    var percentage;
    if(ammount < 50) {
        percentage = .2;
    } else if (ammount >50 && ammount <200) {
        
          percentage = .15;
        
    } else {
         percentage = .1;
    } 
    return percentage * ammount;
}

var resturentbill = [124, 48, 268];
var tips = [sum(resturentbill[0]), sum(resturentbill[1]), sum(resturentbill[2])];
var finalvalues = [resturentbill[0] + tips[0], resturentbill[1] + tips[1], resturentbill[2] + tips[2]];
console.log(finalvalues, tips);
let marks = function(studentscore, totalpossiblescore) {
        percent = (studentscore/totalpossiblescore) * 100
         //let lettergrade = ''
        if(percent >= 90) {
            console.log('A grade (90-100')  //lettergrade= 'A'
        } else if(percent >= 80) {
            console.log('B grade (80-89)')   //lettergrade = 'B'
        } else if(percent >= 70) {
            console.log('C grade (70-79)')   //lettergrade = 'C'
        } else if(percent >= 60) {
            console.log('D grade (60-69)')     // lettergarde = 'D'
        } else {
            console.log('F grade (below 59)')  // lettergrade = 'fail'
        }
        return `yes you got marks ${studentscore} by total conducted ${totalpossiblescore} and grade is ${percent}`

    }
let result = marks(15, 20)
console.log(result)
var markmass = 1700;
var markheight = 60;
var jhonmass = 1800;
var jhonheight = 70;
var calOfMark = markmass / (markheight * markheight);
var calOfJhon = jhonmass / (jhonheight * jhonheight);
var boolean = calOfMark < calOfJhon;
console.log(' is mark is higher bmi then jhons ? '  +boolean);


var age = 14;
var limit = age >= 22 ? 'beer?' : 'water';
console.log(limit);



var job = 'doctor';
switch(job) {
        
    case 'teacher':
        console.log('iam a teacher');
        break;
        
    case 'engineer':
        console.log('i am a engineer');
        break;
        
    case 'doctor':
        console.log('iam a doctor');
        break;
        
        
}
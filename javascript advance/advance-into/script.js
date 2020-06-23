// innnneritance//
/*
var jhon = {
    name: 'jhon',
    yearOfBirth: 1990,
    job: 'teacher'
    
}
//   always give function constructor should be capital
var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job; 
    this.age = function(){
        console.log(2019 - this.yearOfBirth);
        
    }
   Person.prototype.age = function(){
        console.log(2019 - this.yearOfBirth);
   }
   Person.prototype.description = function(){
       this.description = 'hello! i am a developer'
       console.log(this.description);
   } 
   Person.prototype.lastName = 'have a smile';
}

var jhon = new Person('venkat', 1997, 'webdeveloper');
jhon.age();
jhon.description();



var mark = new Person('venky', 1998, 'software engg');

mark.age();
mark.description();
console.log(mark.lastName);

*/


// object create in object
/*
var personproto = {
    calage: function() {
    console.log(2019 - this.yearOfBirth);
    
}
};

var jhon = Object.create(personproto);
jhon.name = 'venkata ramana';
jhon.yearOfBirth = 1997;
jhon.job =  'web developer';
console.log(jhon.calage());


var mark =Object.create(personproto, {
    name: { value: 'venke'},
    yearOfBirth: { value: 1996 },
    job: { value: 'designer'}
    
});
*/

//primitive & objects//
/*
var a = 66;
var b = a;
a = 77;    //it will equal to only that variable is called primitive//
console.log(a);
console.log(b);




var obj1 = {
    name: 'venkat',
    age: 22,
    job: 'web development'
}
var obj2 = obj1;
obj1.age = 23;
console.log(obj1);
console.log(obj2);

// function //

var age2 = 24;
var obj3 = {
    name: 'venky',
    city: 'hyderabad'
}
function change(a, b) {
    a = 25,
    b.city = 'vishakapatnam'
    
}

change(age2, obj3);
console.log(age2); // IT IS NOT CHANGE AFTER WE CHANGE IN FUNCTION
console.log(obj3.city); //BUT OBJECT AND FUNCTIONS ARE CHANGES

*/

// FUNCTION  (nyc example must refer//
/*
var year = [1996, 1998, 2002, 2019, 2020, 2021];

function arraycalc(arr, fn) {
  var arrRes = [];
    for(var i=0;i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
};

function calcages(el){
    return 2020 - el;
}

function isfullage(el) {
    return el >= 18
}

function calcheartrate(el){
    if(el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arraycalc(year, calcages);
console.log(ages);

var small = arraycalc(year, isfullage);
console.log(small);

var heartrate = arraycalc(ages, calcheartrate);
console.log(heartrate);
*/

// function of return function //
/*
function interviewquestion(job) {
    if(job === 'designer') {
        return function(name) {
            console.log(name + ' tell me about ux desiign');
        }
        } else if(job === 'teacher') {
            return function(name) {
          console.log(name + ' which subject you are more confindent');
        }
        }
        else {
            return function(name) {
          console.log(name + ' what you do');
        }
    }
}


//var interview = interviewquestion('designer');
//interview('venkat');

interviewquestion('teacher')('venky');
*/

//function expressions also called iife //

/*
(function() {
    var score = Math.random * 10;
    console.log(score >= 5);
})();


//example//

(function(name) {
    console.log(name + ', this id my short name');
})('venkat');

(function(number){
    var score = Math.random * 10;
    console.log(score >= 5 - number);
    
})(5);

*/

/// closures //
/*

function retirement(retirementage){
    var a = ', this much years you are going to retirment';
    return function(yearofbirth){
        var age = 2020 - yearofbirth;
        console.log((retirementage - age)+ a);
    }
}

retirement(66)(1997);
var retirementamerica = retirement(68);
var retirementindia = retirement(70);
var retirementasia = retirement(66);

retirementamerica(1990);
retirementindia(1991);
retirementasia(1992);



// example of a deep on this //



function interviewquestion(job) {
    return function(name) {
        if(job === 'designer') {
            console.log(name + ' tell me about ux desiign');
        
        } else if(job === 'teacher') {
          
          console.log(name + ' which subject you are more confindent');
        
        }
        else {
            
          console.log(name + ' what you do');
        
    }
    }
}

interviewquestion('teacher')('venkata ramana');

*/

////// Bind, call, apply //////
/*
var venkat = {
    name: 'venky',
    age: 22,
    job: 'web developer',
    presentation: function(style, timeofday){
        
        if(style === 'formal') {
            
    console.log('good' + timeofday + 'my name is ' + this.name + '.' + ',I\'m a ' + this.job + ',I\'m a' + this.age + 'years old.');
    
} else if(style === 'friendly') {
        console.log('hey! what\'s up? ' + timeofday + ', I\'m ' + this.name + '.' + ',I\'m a ' + this.job + ',I\'m a ' + this.age + 'years old.');
    } else {
        console.log('please correct the sentence--');   
    }

}
};

var svramana = {
               
    name: 'svramana',
    age: 25,
    job: 'front end designer'
};

venkat.presentation.call(svramana, 'friendly', 'evining');

venkat.presentation('formal', 'morning');

var venkatfriendly = venkat.presentation.bind(venkat, 'friendly');

venkatfriendly('afternoon');

var svramanaformal = venkat.presentation.bind(svramana, 'formal');
svramanaformal('morning');


//example //

var year = [1996, 1998, 2002, 2019, 2020, 2021];

function arraycalc(arr, fn) {
  var arrRes = [];
    for(var i=0;i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
};

function calcages(el){
    return 2020 - el;
}

function isfullage(limit, el) {
    return el >= 18
}

var ages = arraycalc(year, calcages);
var japanages = arraycalc(ages, isfullage.bind(this, 20));

console.log(ages);
console.log(japanages);

*/




// challenge /////////////















































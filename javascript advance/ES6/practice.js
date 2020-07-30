/*

const years = [1990, 1991, 1992, 1993, 1994];

// es5

var ages5 = years.map(function(e){
    return 2016 - e;
    
});

console.log(ages5);

//es6

let ages6 = years.map(e => 2016- e);


ages6 = years.map((e, index) => `hii this is section of ${index + 1}: ${2016 - e}`);


ages6 = years.map((e, index) => {
                 
    const ready = new Date().getFullYear();
    let age = ready - e;
    return `hii this is section of ${index + 1}: ${2016 - e}`
});

console.log(ages6);


*/

//arrow functions 


// es5

/*
var box5 = {
    
    color: 'green',
    position: 1,
    clickme: function() {
        var save = this;
        document.querySelector('.box-1').addEventListener('click', function() {
            
            var str = 'this is  box number ' + save.position + ' this is the color of ' + save.color;
            alert(str);
            
        });
        
    }
    
}

box5.clickme();

*/

// es 6
/*
const box5 = {
    
    color: 'green',
    position: 1,
    clickme: () => {
        
        document.querySelector('.box-1').addEventListener('click', () => {
            
            let str = 'this is  box number ' + this.position + ' this is the color of ' + this.color;
            alert(str);
            
        });
        
    }
    
}

box5.clickme();

*/
// es5 

/*
function Person(name) {
    this.name= name;
} 

Person.prototype.myfriends = function(friends) {
    
    var arr = friends.map(function(el) {
        return this.name + ' is friends with ' + el;
        
    }.bind(this));
    
    console.log(arr);
    
}

var friends = ['venkat', 'venky', 'svramana'];

new Person('venkataramana').myfriends(friends);

*/


// destructuring //

// es5 

/*
var jhon = ['venkat', 23];
var name = venky[0];
var age = venky[1];

*/


// es6 it is like a data structure

/*
const [name, age] = ['venky', 23];
console.log(name);
console.log(age);




const obj = {
    firstName: 'venkata ramana',
    lastName: 'sanapala'
};
 
const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const { firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

*/

// example 

/*
function calAgeRetiremenet(years) {
    
    const age = new Date().getFullYear()-years;
    return [age, age - 65];
    
}

const [ages, retirment] = calAgeRetiremenet(1990);
console.log(ages);
console.log(retirment);

*/
/*
const boxes = document.querySelectorAll('.box');

// es5 


var boxarr5 = Array.prototype.slice.call(boxes);
boxarr5.forEach(function(current){
    current.style.backgroundColor = 'dodgerblue';
});



// es6

var boxarr6 = Array.from(boxes);
boxarr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

*/

// example for changing name 


// es5 // best example to change //

/*
for(i=0; i < boxarr5.length; i++) {
    if(boxarr5[i].className === 'box box-3') {
        
        continue;
        // break;
    
    }
    
    boxarr5[i].textContent = 'I changes name!';
}

*/

// es6

/*
for (const haha of boxarr6) {
    if(haha.className === 'box box-3') {
        
        continue;
        
    }
    
    haha.textContent = 'i changed name again!';
}

*/

// another example 

// es5

/*
var students = [8, 12, 13, 18, 21, 5];
var ages = students.map(function(name) {
   
    return name >= 18;
    
});
console.log(ages);
console.log(ages.indexOf(true));
console.log(students[ages.indexOf(true)]);


// es6


console.log(students.findIndex(name => name >= 18));
console.log(students.find(name => name >= 18));

*/

// spread control //
/*

function agesOfAll(a, b, c, d) {
    return a + b + c + d;
}
var sum = agesOfAll(18, 22, 28, 32);
console.log(sum);

// es5
var ages = [18, 22, 28, 32];
var sum1 = agesOfAll.apply(null, ages);
console.log(sum1);

// es6 //

var sum2 = agesOfAll(...ages);
console.log(sum2);

const familyvenkat = ['svramana', 'venke', 'vnktvnke'];
const familyvenky = ['svenkataramana', 'ramana', 'ravana'];
const bigfamily = [...familyvenkat, 'newname', ...familyvenky];
console.log(bigfamily);



const h  = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];
Array.from(all).forEach(e => e.style.color = 'limeyellow');


*/


// rest parameters //
/*
// es5 //

function isfullages(limit) {
   
    var ages = Array.prototype.slice.call(arguments, 1);
    ages.forEach(function(e){
        console.log((2020 - e) >= limit);
    })
}
isfullages(1990, 1993, 1998, 2012);

// es6 //

function isfullages6(limit, ...sum) {
    sum.forEach(e => console.log( (2020 - e) >= limit));
}

isfullages6(2002, 1998, 1999, 2017, 1876);

*/

// default parameters //

 // es5 //
/*
function SmithPerson(firstName, lastname, yearOfBirth, nationality){
    
    yearOfBirth === undefined ? yearOfBirth = '2000' : yearOfBirth === yearOfBirth;
    nationality === undefined ? nationality = 'UK' : nationality === nationality;
    this.firstName = firstName;
    this.lastname = lastname;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var venky = new SmithPerson('venky', 'venkat', 1997, 'india');
var venkat = new SmithPerson('svramana', 'vnke');
console.log(venky);
console.log(venkat);
*/
// es6 //

/*
function SmithPerson(firstName, lastname, yearOfBirth = 1990, nationality = 'AFIRCA'){
    

    this.firstName = firstName;
    this.lastname = lastname;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var venky = new SmithPerson('venky', 'venkat', 1997, 'india');
var venkat = new SmithPerson('svramana', 'vnke');
console.log(venky);
console.log(venkat);

*/
// MAPS //

/*
const question = new Map();
question.set('question', 'what are the latest version of javascript ?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set('true', 'yes your answer is correct !');
question.set('false', 'answer is wrong. have a look!');
console.log(question.get('question'));
//console.log(question.size);
//question.delete(4);
//question.clear();   


question.forEach((value, key) =>
    console.log(`this is ${key} and its ${value}`));

*/

/*
for (let [key, value] of question.entries()) {
    if(typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}


const ans = parseInt(prompt('enter your correct answer'));
console.log(question.get(ans === question.get('correct')));

*/


// classes //

//  es5 //
/* 
var Person5 = function(name, yearOfBirth, job) {
    
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calage = function() {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
    
}

var venkat = new Person5('venkat', 1997, 'web developer');
console.log(venkat);


// es6 //

class Person6 {
    constructor(name, yearOfBirth, job){
        
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
    callages() {
        var ages = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
    }
    
    static greetings(){
        console.log(' s venkata ramana');
    }
    
}

var svramana = new Person6('svramana', 1997, 'full stack developer');
console.log(svramana);
Person6.greetings();

*/


// classes and sub classes //

// es5 //

var Person5 = function(name, yearOfBirth, job) {
    
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calage = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);

}

var Athelet5 = function(name, yearOfBirth, job, games, madels) {
    Person5.call(this, name, yearOfBirth, job); // it use all the privious prototype // 
    this.games = games;
    this.madels = madels;
}

Athelet5.prototype = Object.create(Person5.prototype);


Athelet5.prototype.wonmedal = function(){
    this.madels++;
}



var venkyAthelet = new Athelet5('venkat', 1997, 'web designer', 4, 20);

console.log(venkyAthelet);


// es6 //

class Person6 {
    constructor(name, yearOfBirth, job){
        
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
    callages() {
        var ages = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
    }
    
}

class Athelet6 extends Person6 {
    constructor(name, yearOfBirth, job, games, madels){
        super(name, yearOfBirth, job);
        this.games = games;
        this.madels = madels;
    }
}

const venkat6 = new Athelet6('svramana', 1997, 'fullstack developer', 3, 22);
venkat6.callages();
venkat6.wonmedal();
console.log(venkat6);









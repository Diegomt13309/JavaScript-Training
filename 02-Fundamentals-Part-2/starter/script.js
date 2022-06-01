'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

//Strict mode adds new reserved words
// const interface = 'Audio';
// const private = true;
// const if = 23;*/

//Functions 
/*
function logger() {
    console.log('My name is Diego');
}
//calling, running or invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples 🍎 and ${oranges} oranges 🍊`;
    return juice;
}

const applesJuice = fruitProcessor(5, 0);
console.log(applesJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');*/

//Functions declarations vs Expressions
/*
const age1 = calcAge1(1991);// can call funtion declaration before define it

function calcAge1(birthyear) {
    return 2037 - birthyear;
}

//function expression
const calcAge2 = function (birthyear) {
    return 2037 - birthyear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);*/

//Array Functions
/*
const calcAge3 = birthyear => 2037 - birthyear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthyear, firstName) => {
    const age = 2037 - birthyear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1991, 'Diego'));
console.log(yearsUntilRetirement(1980, 'Jonas'));*/
//Functions calling other functions
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} piesce of apples 🍎 and ${orangePieces} pieces of oranges 🍊`;
    return juice;
}
console.log(fruitProcessor(2, 3));*/

//Review Functions
/*
const calcAge = function (birthyear) {
    return 2037 - birthyear;
}



const yearsUntilRetirement = function (birthyear, firstName) {
    const age = calcAge(birthyear);
    const retirement = 65 - age;
    return retirement > 0 ? `${firstName} retires in ${retirement} years.` : `${firstName} has already retired`;
}

console.log(yearsUntilRetirement(1991, 'Diego'));
console.log(yearsUntilRetirement(1970, 'Mike'));*/

//Arrays
/*
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const year = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);//last element

friends[friends.length - 1] = 'Jonas';
console.log(friends);

const firstName = 'Diego';
const diego = ['firstName', 'Monterrey', 2037 - 1997, 'QA', friends];

console.log(diego);
console.log(diego.length);

//Exercises
const calcAge = function (birthyear) {
    return 2037 - birthyear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
console.log(ages);*/

//Array Methods
/*
const friends = ['Michael', 'Steven', 'Peter'];

//Add elements
const newLenght = friends.push('Jay');
console.log(friends);
console.log(newLenght);

friends.unshift('John');
console.log(friends);

//Remove Elements
friends.pop();
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));//strcit equality ===

if (friends.includes('Steven')) {
    console.log('You have a friend called peter');
}*/

//Objects
/*
const diego = {
    firstName: 'Diego',
    lastName: 'Monterrey',
    age: 2037 - 1997,
    job: 'QA',
    friends: ['Michael', 'Steven', 'Peter']
};
console.log(diego);

console.log(diego.lastName);
console.log(diego['lastName']);

const nameKey = 'Name';
console.log(diego['first' + nameKey]);
console.log(diego['last' + nameKey]);
//Using the bracket notation
const interestedIn = prompt('What do you want to know about Diego?');

if (diego[interestedIn]) {
    console.log(diego[interestedIn]);
} else {
    console.log('Wrong request!');
}

diego.location = 'Costa Rica';
diego['twitter'] = '@diegomonterrey';
console.log(diego);

//Challenge
//Diego has 3 friends and his best friend is called Michael

console.log(`${diego.firstName} has ${diego.friends.length} and his best friend is called ${diego.friends[0]}`);*/

//Objects Methods
/*
const diego = {
    firstName: 'Diego',
    lastName: 'Monterrey',
    birthYear: 1997,
    job: 'QA',
    friends: ['Michael', 'Steven', 'Peter'],
    hasDriversLicense: true,
    // calcAge: function (birthYear) { return 2037 - birthYear }
    // calcAge: function () {
    //     // console.log(this);
    //     return 2037 - this.birthYear
    // }
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} -years old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'not'} drive's license.`;
    }


};

console.log(diego.calcAge());
console.log(diego.age);
console.log(diego.age);


console.log(diego.getSummary());

//Challenge
//'Diego is 40-years old QA, and he has a/no drivers license' */




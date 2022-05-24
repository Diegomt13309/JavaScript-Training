/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

//values, piece of data - fundamental unit
console.log('Jonas');
console.log(23);
//declaring a variable
let firstName = 'Diego';
let first = 'Jonas';
let firstNamePerson = 'Jhon';
let first_name = 'Kari';
console.log(firstName);
console.log(firstName);
console.log(firstName);
//illegal
//let 4year = 9; number before any name
//let jonas&matilda = 'jm'; &
//let new = 2; reserve key words
//name is legal but sometimes is not
//let Per = 'Diego'; no illegal, but is not recommended
let PI = 3.1415;

//[
//this is better, very descriptive than
let myFirstJob = 'Programmer';
let myCurrentJob = 'QA';
//this, this is not descriptive
let job1 = 'Programmer';
let job2 = 'QA';
//]
console.log(myFirstJob);
*/
//************************************************** */
/*Data Types
true;
console.log(true);
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof 'Diego');
//Dynamic typing
javaScriptIsFun = 'YES!';
console.log(typeof javaScriptIsFun);
//Undefined
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

//Error
console.log(typeof null);*/
/* *************************************************
//let, const and var
//let declare variables that can change later, mutable
let age = 30;
age = 31;
//const does not change, inmutable
const birthYear = 1997;
// birthYear = 1998;

//illegal, needs an initialization
//const job;

//Its a good practice to use const

//var should be avoided - Legacy
var job = 'programmer';
job = 'techer';

//do not use this, bad practice
// lastName = 'Monterrey';
// console.log(lastName);
*/
/***************************************************
//Operators
//Math operators
const now = 2037;
const ageDiego = now - 1997;
const ageSara = now - 2020;
console.log(ageDiego, ageSara);

console.log(ageDiego * 2, ageDiego / 10, 2 ** 3);
// 2 ** 3, means 2 to the power of 3 == 2*2*2

const firstName = 'Diego';
const lastName = 'Monterrey';
console.log(firstName + ' ' + lastName);
//Assigment Operators
let x = 10 + 5; //x = 10
x += 10; // x=x+10; x = 25;
x *= 4;
x++;
x--;
x--;
console.log(x);
//Comparison operators
console.log(ageDiego > ageSara); //> < <= >=
console.log(ageSara >= 18);

const isFullAge = ageSara >= 18;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

const averageAge = (ageDiego + ageSara) / 2;
console.log(ageDiego, ageSara, averageAge);
*/
/***************************************************/
/*Strings and Template Strings
const firstName = 'Diego';
const job = 'QA';
const birthYear = 1997;
const currentYear = 2022;

const diego = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' years old ' + job + '!';
console.log(diego);

const diegoNew = `I'm ${firstName}, a ${currentYear - birthYear} years old ${job}!`;
console.log(diegoNew);

console.log(`Just a regular string`);

//multiline string
console.log('String with \n\
multiple \n\
lines');

console.log(`String
with a new
line`);*/

/*If-else statement
const age = 15;

if (age >= 18) {
    console.log(`Sara can't start driving licence 🚗`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sara is too young. Wait another ${yearsLeft} years.`);
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/
//********************************************* */
/*
//Type convertion and
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Diego'));
console.log(typeof NaN);

console.log(String(23), 23);

//coercion: + triggers the coercion strings
//same thing
console.log('I am ' + 23 + ' years old');
console.log('I am ' + '23' + ' years old');
// -, triggers the opposite - Strings to number
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' / '2');

//guess the output
let n = '1' + 1;
n = n - 1;
console.log(n); //10
*/
//************************************************ */
/*
//Falsy and truthy
//5 falsy values: 0, '', undefined, null, NaN;
//everything else, is truthy
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Diego'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log('Dont spend it all');
} else {
    console.log('You should get a job');
}

let height = 0;
if (height) {
    console.log('Yay');
} else {
    console.log('Undefined');
}*/
//************************************************ */
//Equality operators == vs ===
//===, does not apply type coercion, is a strict, so both should be the same: '18' === 18 false
//== loose, does type coercion: '18'==18 true
/*
const age = '18';
if (age === 18) console.log('You just became an adult! (strict)');

if (age == 18) console.log('You just became an adult! (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 14) { // '14' == 14 typecoersion
    console.log('Cool, 14 is an amazing number!');
} else if (favourite === 7) {
    console.log('7 is also a cool number!');
} else if (favourite === 9) {
    console.log('9 is also a cool number!');
} else {
    console.log('Number is not 23 or 7');
}

if (favourite !== 14) console.log('Why not 14?');*/
//************************************************ */
//Boolean Logic
/*
const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);
console.log(!hasGoodVision);

// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sara is able to drive!');
// } else {
//     console.log('Someone else should drive!');
// }

const isTired = true; //C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sara is able to drive!');
} else {
    console.log('Someone else should drive!');
}*/
//Switch Statement
/*
const day = 'thursday';

switch (day) {
    case 'monday':
        console.log('Plan course structure.');
        console.log('Go to coding meetup.');
        break;
    case 'tuesday':
        console.log('Prepare videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day');
}

if (day === 'monday') {
    console.log('Plan course structure.');
    console.log('Go to coding meetup.');
} else if (day === 'tuesday') {
    console.log('Prepare videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend');
} else {
    console.log('Not a valid day');
}*/

//Statement and expressions
/*expression produces a value
3 + 4
1997
true && false && !false
//Statement does not produce a value*
if (23 > 10) {
    const str = '23 is bigger';//expression
}*/

//Ternary operator
const age = 25;
// age >= 18 ? console.log('I like to drink beer🍺') : console.log('I like to drink water🧊');

const drink = age >= 18 ? 'Beer🍺' : 'Water🧊';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'Beer🍺';
} else {
    drink2 = 'Water🧊';
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'Beer🍺' : 'Water🧊'}`);



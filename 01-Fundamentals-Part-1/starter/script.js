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
/*************************************************** */
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
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





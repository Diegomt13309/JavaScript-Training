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

const num = Number('23');




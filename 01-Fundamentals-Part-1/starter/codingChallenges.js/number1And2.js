console.log('This is the coding challenge #1');

console.log('Test Data #1');
let markMass = 78;
let markHeight = 1.69;
let jhonMass = 92;
let jhonHeight = 1.95;

//BMI: mass / (h*h);
let markBMI = markMass / (markHeight * markHeight);
let jhonBMI = jhonMass / jhonHeight ** 2;

console.log(`Mark BMI is: ${markBMI} and Jhon BMI is: ${jhonBMI}`);

let markHigherBMI = markBMI > jhonBMI;
console.log(`Is the Mark's BMI higher than Jhon's: ${markHigherBMI}`);

//#2 if-else statement
if (markHigherBMI) {
    console.log(`Mark's BMI is higher(${markBMI}) than Jhon's(${jhonBMI})!`);
} else {
    console.log(`Jhon's BMI is higher(${jhonBMI}) than Mark's(${markBMI})!`);
}

console.log('Test Data #2');
markMass = 95;
markHeight = 1.88;
jhonMass = 85;
jhonHeight = 1.76;

//BMI: mass / (h*h);
markBMI = markMass / (markHeight * markHeight);
jhonBMI = jhonMass / jhonHeight ** 2;

console.log(`Mark BMI is: ${markBMI} and Jhon BMI is: ${jhonBMI}`);

markHigherBMI = markBMI > jhonBMI;
console.log(`Is the Mark's BMI higher than Jhon's: ${markHigherBMI}`);
//#2 if-else statement
if (markHigherBMI) {
    console.log(`Mark's BMI is higher(${markBMI}) than Jhon's(${jhonBMI})!`);
} else {
    console.log(`Jhon's BMI is higher(${jhonBMI}) than Mark's(${markBMI})!`);
}


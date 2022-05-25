//#1 Values and Variables
let country = 'Costa Rica';
let continent = 'America';
let population = 7000000;
console.log(`My country ${country}, is located in the continent of ${continent} and has about ${population} people living there.!`);
//#2 Data Types
let isIsland = false;
let language;
console.log(isIsland);
console.log(language);
console.log(`Type Of some variables: {isIsland : ${typeof isIsland}}, {population: ${typeof population}}, {country: ${typeof country}} and {language : ${typeof language}}.`);
//#3 Basic Operators
const halfPopulation = population / 2;
population++;
console.log(`Population divided by half: ${halfPopulation}, increasing the country population by 1: ${population}, Filand has 6 million people, it has more than my country? ${6000000 > population}. The average population of a country is 33M, my country have less than 33M? ${population < 33000000}.`);
const description = `Portugal is in Europe, and its 11 Million people speak portuguese`;
console.log(description);
//#4 String templates
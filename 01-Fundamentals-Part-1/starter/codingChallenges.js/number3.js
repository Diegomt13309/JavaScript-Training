console.log('Coding Challenge #3');
console.log('Test Data #1');
let dolphinsScoreAverage = (96 + 108 + 89) / 3;
let koalasScoreAverage = (88 + 91 + 110) / 3;
console.log(dolphinsScoreAverage, koalasScoreAverage);

if (dolphinsScoreAverage > koalasScoreAverage) {
    console.log('Dolphins are the winners!🐬');
} else if (koalasScoreAverage > dolphinsScoreAverage) {
    console.log('Koalas are the winners!🐨');
} else {
    console.log('There is a draw between those two teams!🕸');
}

console.log('Bonus #1');
dolphinsScoreAverage = (97 + 112 + 101) / 3;
koalasScoreAverage = (109 + 95 + 123) / 3;
console.log(dolphinsScoreAverage, koalasScoreAverage);

if (dolphinsScoreAverage > koalasScoreAverage && dolphinsScoreAverage >= 100) {
    console.log('Dolphins are the winners!🐬');
} else if (koalasScoreAverage > dolphinsScoreAverage && koalasScoreAverage >= 100) {
    console.log('Koalas are the winners!🐨');
} else {
    console.log('There is a draw between those two teams!🕸');
}

console.log('Bonus #2');
dolphinsScoreAverage = (97 + 112 + 101) / 3;
koalasScoreAverage = (109 + 95 + 106) / 3;
console.log(dolphinsScoreAverage, koalasScoreAverage);

if (dolphinsScoreAverage === koalasScoreAverage && dolphinsScoreAverage >= 100 && koalasScoreAverage >= 100) {
    console.log('There is a draw between those two teams!🕸');
} else {
    console.log('No team wins the trophy!👑');
}





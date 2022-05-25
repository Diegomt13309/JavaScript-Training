const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        return `Dolphins win (${avgDolphins} vs ${avgKoalas})`;
    } else if (avgKoalas >= 2 * avgDolphins) {
        return `Koalas win (${avgKoalas} vs ${avgDolphins})`;
    } else {
        return `No team wins.!`;
    }
}

//Test Data #1
console.log('TEST DATA #1');
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);

console.log(checkWinner(avgDolphins, avgKoalas));

console.log('TEST DATA #2');
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);

console.log(checkWinner(avgDolphins, avgKoalas));

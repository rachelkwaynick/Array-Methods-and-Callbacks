import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

let finals = fifaData.filter(data => data.Year === 2014 && data.Stage === 'Final')[0]
let winner = function (item) {
    if (item['Home Team Goals'] > item['Away Team Goals']) {
        return item['Home Team Name']
    } else {
        return item['Away Team Name']
    }
}

console.log(
    finals['Home Team Name']
)
console.log(
    finals['Away Team Name']
)
console.log(
    finals['Home Team Goals']
)
console.log(
    finals['Away Team Goals']
)
console.log(
    winner(finals)
)

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {

    return data.filter(data => data.Stage === 'Final')

};

getFinals(fifaData);

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(getFinals, data) {

    let years = getFinals(data).map(x => x.Year)

    return years;

};

// function getYears2(getFinalsCB, data) {
//     return getFinalsCB(data).map(function(item){
//         return item.Year;
//     })
// }

console.log(getYears(getFinals, fifaData));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinners(getFinals) {

    let winners = [];

    getFinals(fifaData).forEach(element => {
        if (element['Home Team Goals'] > element['Away Team Goals']) {
            winners.push(element['Home Team Name'])
        } else {
            winners.push(element['Away Team Name'])
        }
    })



    return winners;
};


function getWinners2(data, getFinalsCB) {
    let winners = [];

    getFinals(data).forEach(function (item) {
        if (item['Home Team Goals'] > item['Away Team Goals']) {
            winners.push(item['Home Team Name'])
        } else if (item['Away Team Goals'] > item['Home Team Goals']) {
            winners.push(item['Away Team Name'])
        } else if (item['Home Team Goals'] === item['Away Team Goals']) {
            winners.push(item['Win conditions'])
        }
    });
    return winners;
}
function getWinners3(data, getFinalsCB) {
    let winners = getFinals(data).map(function (item) {
        if (item['Home Team Goals'] > item['Away Team Goals']) {
            return item['Home Team Name']
        } else if (item['Away Team Goals'] > item['Home Team Goals']) {
            return item['Away Team Name']
        } else if (item['Home Team Goals'] === item['Away Team Goals']) {
            return item['Win conditions']
        }
    });
    return winners;
}
console.log(getWinners(getFinals));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */


// COME BACK TO
function getWinnersByYear(getWinners, getYears, getFinals, data) {


    let winnerByYear = [];

    let winners = getWinners(getFinals, data);
    let years = getYears(getFinals, data);


    for (let i = 0; i < winners.length; i++) {
        winnerByYear.push(`In ${years[i]}, ${winners[i]} won the world cup!`)
    }

    return winnerByYear;
};

function getWinnersByYear2(getWinnersCB, getYearsCB) {
    let winners = getWinnersCB(getFinals, fifaData);
    let years = getYearsCB(getFinals, fifaData);

    let yearlyWinners = [];

    winners.forEach(function (item, index) {
        yearlyWinners.push(`In ${years[index]}, ${item} won the world cup!`)
    });

    return yearlyWinners;
}

console.log(getWinnersByYear(getWinners, getYears));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */


function getAverageGoals(data) {

    // let arr = data.map(goal => goal['Home Team Goals'] + goal['Away Team Goals']);

    // console.log(arr)

    // let average = arr.reduce((total, amount, index, arr) => {
    //     total += amount;
    //     return total / arr.length;
    // });

    // console.log(average)

    const averageHomeGoals = data.reduce(function (acc, item) {
        return acc + item['Home Team Goals'] + item['Away Team Goals'];
    }, 0)

    return averageHomeGoals / data.length;
};

getAverageGoals(fifaData);

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */

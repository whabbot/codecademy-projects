let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random() * 10);
}

function compareGuesses(userGuess, compGuess, targetNo) {
    // User win returns true, computer win returns false
    const userDelta = getAbsoluteDistance(targetNo, userGuess);
    const compDelta = getAbsoluteDistance(targetNo, compGuess);
    return userDelta <= compDelta;
}

function updateScore(winner) {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}

function advanceRound() {
    currentRoundNumber++;
}

function getAbsoluteDistance(number1, number2) {
    return Math.abs(number1 - number2);
}

function outOfRange(number) {
    return number < 0 || number > 9
}
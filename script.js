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
    // COULD BE REPLACED WITH SIMPLY "return userDelta <= compDelta"
    if (compDelta < userDelta) {
        return false;
    } else {
        return true;
    }
}

function updateScore(winner) {
    if (winner === 'human') {
        humanScore++;
    } else {
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
    if (number < 0 || number > 9) {
        return true;
    }
}
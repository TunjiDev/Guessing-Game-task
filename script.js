let minRange = 1;
let maxRange = 2;
let stage = 1;
let randomNumber;
let playersGuess;
let playerScore = 0;

const randomNumberFunc = () => {
        randomNumber = Math.round(Math.random() * (maxRange - minRange) + minRange)
    };
// randomNumberFunc();

const playersGuessFunc = () => {
        playersGuess = Number(prompt(`Predict the number between ${minRange} and ${maxRange}`))
    };
// playersGuessFunc();

const guess = () => {
    const user = prompt("What is your username?");
    randomNumberFunc();
    playersGuessFunc();

    if (randomNumber === playersGuess) {
        playerScore += 1;
        maxRange +=1;
        stage += 1;
        alert(`Correct guess ${user}, you have scored ${playerScore} point(s) and have moved on to stage ${stage}`);
        randomNumberFunc();
        playersGuessFunc();
    } else {
        alert(`Game over!`)
    }
    
};
guess();
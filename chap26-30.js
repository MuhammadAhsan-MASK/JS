
// Assignment # 26-30: Math Methods

// 1. Positive Integer Info
var num1 = +prompt("Enter a positive integer:");
document.write("<h3>Number: " + num1 + "</h3>");
document.write("Round off: " + Math.round(num1) + "<br>");
document.write("Floor: " + Math.floor(num1) + "<br>");
document.write("Ceil: " + Math.ceil(num1) + "<br><br>");

// 2. Negative Floating Point Info
var num2 = +prompt("Enter a negative floating point number:");
document.write("<h3>Number: " + num2 + "</h3>");
document.write("Round off: " + Math.round(num2) + "<br>");
document.write("Floor: " + Math.floor(num2) + "<br>");
document.write("Ceil: " + Math.ceil(num2) + "<br><br>");

// 3. Absolute Value
var num3 = +prompt("Enter a number to find absolute value:");
document.write("<h3>Absolute value of " + num3 + " is " + Math.abs(num3) + "</h3><br>");

// 4. Dice Simulation
var dice = Math.floor(Math.random() * 6) + 1;
document.write("<h3>Dice Value: " + dice + "</h3><br>");

// 5. Coin Toss Simulation
var coin = Math.floor(Math.random() * 2) + 1;
var coinResult = coin === 1 ? "Heads" : "Tails";
document.write("<h3>Coin Toss Result: " + coinResult + "</h3><br>");

// 6. Random Number Between 1 and 100
var randomNum = Math.floor(Math.random() * 100) + 1;
document.write("<h3>Random Number (1-100): " + randomNum + "</h3><br>");

// 7. Parse User Weight
var weightInput = prompt("Enter your weight (e.g., 50kgs, 50.2kilograms):");
var weight = parseFloat(weightInput);
document.write("<h3>Your weight is: " + weight + " kilograms</h3><br>");

// 8. Secret Number Guessing
var secretNum = Math.floor(Math.random() * 10) + 1;
var userGuess = +prompt("Guess the secret number (1-10):");
if (userGuess === secretNum) {
    alert("Congratulations! You guessed the secret number.");
} else {
    alert("Try again! The secret number was " + secretNum);
}

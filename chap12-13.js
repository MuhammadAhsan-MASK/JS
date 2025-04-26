
var input = prompt("Enter a character");
if (!isNaN(input)) {
  alert("It is a number");
} else if (input >= "A" && input <= "Z") {
  alert("It is an uppercase letter");
} else if (input >= "a" && input <= "z") {
  alert("It is a lowercase letter");
}

var num1 = parseInt(prompt("Enter first number"));
var num2 = parseInt(prompt("Enter second number"));
if (num1 > num2) {
  alert("First number is larger");
} else if (num2 > num1) {
  alert("Second number is larger");
} else {
  alert("Both numbers are equal");
}

var num = parseInt(prompt("Enter a number"));
if (num > 0) {
  alert("Positive number");
} else if (num < 0) {
  alert("Negative number");
} else {
  alert("Zero");
}

var ch = prompt("Enter a single character");
if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
  alert(true);
} else {
  alert(false);
}

var correctPassword = "abc123";
var userPassword = prompt("Enter your password");
if (userPassword === "") {
  alert("Please enter your password");
} else if (userPassword === correctPassword) {
  alert("Correct! The password you entered matches the original password");
} else {
  alert("Incorrect password");
}

var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
alert(greeting);

var time = parseInt(prompt("Enter time in 24-hour format (e.g., 1900)"));
if (time >= 0 && time < 1200) {
  alert("Good morning");
} else if (time >= 1200 && time < 1700) {
  alert("Good afternoon");
} else if (time >= 1700 && time < 2100) {
  alert("Good evening");
} else if (time >= 2100 && time <= 2359) {
  alert("Good night");
}

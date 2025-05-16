// 1. Display current date & time
function displayDateTime() {
    console.log("1. Current Date & Time: " + new Date());
}
displayDateTime();

// 2. Greet user with full name
function greetUser(firstName, lastName) {
    console.log("2. Hello, " + firstName + " " + lastName + "!");
}
greetUser("Ahsan", "Saeed");

// 3. Add two numbers
function addNumbers(a, b) {
    return a + b;
}
console.log("3. Sum is: " + addNumbers(5, 7));

// 4. Simple calculator
function calculator(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
        default: result = "Invalid operator";
    }
    console.log("4. Result is: " + result);
}
calculator(10, 5, '+');

// 5. Square of number
function square(num) {
    return num * num;
}
console.log("5. Square is: " + square(6));

// 6. Factorial
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log("6. Factorial is: " + factorial(5));

// 7. Counting from start to end
function count(start, end) {
    console.log("7. Counting:");
    for (let i = start; i <= end; i++) {
        console.log(i);
    }
}
count(1, 5);

// 8. Hypotenuse calculation using nested function
function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(x) {
        return x * x;
    }
    const hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
    console.log("8. Hypotenuse is: " + hypotenuse);
}
calculateHypotenuse(3, 4);

// 9. Area of rectangle
function areaOfRectangle(width, height) {
    return width * height;
}
console.log("9(i). Area (values): " + areaOfRectangle(10, 5));
let w = 7, h = 4;
console.log("9(ii). Area (variables): " + areaOfRectangle(w, h));

// 10. Check palindrome
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log("10. Is 'madam' a palindrome? " + isPalindrome("madam"));

// 11. Capitalize first letter of each word
function capitalizeWords(str) {
    return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
console.log("11. Capitalized: " + capitalizeWords("the quick brown fox"));

// 12. Find longest word
function findLongestWord(str) {
    const words = str.split(" ");
    let longest = "";
    for (let word of words) {
        if (word.length > longest.length) longest = word;
    }
    return longest;
}
console.log("12. Longest word: " + findLongestWord("Web Development Tutorial"));

// 13. Count letter occurrences
function countLetter(str, letter) {
    let count = 0;
    for (let char of str) {
        if (char === letter) count++;
    }
    return count;
}
console.log("13. Occurrences of 'o': " + countLetter("JSResourceS.com", 'o'));

// 14. Circle calculations
function calcCircumference(radius) {
    const circumference = 2 * Math.PI * radius;
    console.log("14(i). The circumference is " + circumference.toFixed(2));
}
function calcArea(radius) {
    const area = Math.PI * radius * radius;
    console.log("14(ii). The area is " + area.toFixed(2));
}
calcCircumference(5);
calcArea(5);

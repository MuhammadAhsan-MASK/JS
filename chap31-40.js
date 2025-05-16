
// Chapter 31-34 (Date & Time)
console.log("Chapter 31-34: Date & Time");

// 1
let dObj = new Date();
console.log("1. Date Object:", dObj);

// 2
let dStr = new Date().toString();
console.log("2. Date String:", dStr);

// 3
let day = new Date().getDay();
console.log("3. Day of Week:", day);

// 4
let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("4. Current Day:", dayNames[day]);

// 5
let fullDate = new Date();
let year = fullDate.getFullYear();
let month = fullDate.getMonth();
let date = fullDate.getDate();
let hours = fullDate.getHours();
let minutes = fullDate.getMinutes();
let seconds = fullDate.getSeconds();
console.log("5. Full Date Parts:", year, month, date, hours, minutes, seconds);

// 6
let later = new Date(2020, 11, 31);
console.log("6. Last Day of 2020:", later);

// 7
let secondDay = new Date(1992, 1, 2);
console.log("7. Feb 2, 1992:", secondDay);

// 8
console.log("8. Milliseconds since Jan 1, 1980:", new Date() - new Date(1980, 0, 1));

// 9
let changeYear = new Date();
changeYear.setFullYear(2025);
console.log("9. Year Changed:", changeYear);

// 10
function setMonthToJanuary(date) {
    date.setMonth(0);
    return date;
}
console.log("10. Month Changed to January:", setMonthToJanuary(new Date()));

// 11
let setDay = new Date();
setDay.setDate(15);
console.log("11. Day Changed:", setDay);

// 12
function setMinutesToValue(date, minutes) {
    date.setMinutes(minutes);
    return date;
}
console.log("12. Minutes Changed:", setMinutesToValue(new Date(), 45));

// 13
function addHours(date, hours) {
    date.setHours(date.getHours() + hours);
    return date;
}
console.log("13. Add Hours:", addHours(new Date(), 5));

// 14
function calculateAge(birthDate) {
    let diff = Date.now() - birthDate.getTime();
    let ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
console.log("14. Age:", calculateAge(new Date("2000-01-01")));

// Chapter 35-38 (Functions)
console.log("\nChapter 35-38: Functions");

// 1
function displayAlert() {
    console.log("Current Date & Time:", new Date());
}
displayAlert();

// 2
function askName() {
    let userName = "Ali";
    console.log("Hello", userName);
}
askName();

// 3
function callTwo() {
    function one() { console.log("First Function"); }
    function two() { console.log("Second Function"); }
    one(); two();
}
callTwo();

// 4
function greetUser() {
    let name = "Ahsan";
    console.log("Entered Name:", name);
}
greetUser();

// 5
function concat(a, b, c) {
    console.log("Concatenated:", a + b + c);
}
concat("a", "b", 3);

// 6
function joinTwo(x, y) {
    let result = x + y;
    console.log("Joined:", result);
}
joinTwo("Hello ", "World");

// 7
function multiplyThree(a, b, c) {
    let result = a * b * c;
    console.log("Product:", result);
}
multiplyThree(2, 3, 4);

// 8 & 10 (average of array)
function averageArray(arr) {
    let total = arr.reduce((sum, val) => sum + val, 0);
    return total / arr.length;
}
console.log("8. Average:", averageArray([1, 2, 3, 4, 5]));

// 9
function sumTwo(a, b) {
    return a + b;
}
console.log("9. Sum:", sumTwo(5, 10));

// 11
let avg = averageArray([4, 6, 8]);
console.log("11. Captured Return:", avg);

// 12
function letterCount(word) {
    console.log("12. Letter Count:", word.length);
}
letterCount("JavaScript");

// 13
function setYear(date, year) {
    date.setFullYear(year);
    return date;
}
console.log("13. Set Year:", setYear(new Date(), 2022));

// 14
console.log("14. Age is:", calculateAge(new Date("1995-06-15")));

// 15
function isPresent(word) {
    let arr = ['zaid','haris','raza','abubakar','hassan','hussain','fatima'];
    return arr.includes(word);
}
console.log("15. Presence of 'raza':", isPresent("raza"));

// 16
function repeatLetter(letter) {
    return letter.repeat(10);
}
console.log("16. Repeated Letter:", repeatLetter("a"));

// 17
console.log("17. Reversed Array:", ['a','b','c','d','e'].reverse());

// 18
function reverseNumber(num) {
    return parseInt(num.toString().split("").reverse().join(""));
}
console.log("18. Reversed Number:", reverseNumber(32243));

// 19
function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}
console.log("19. Is Palindrome:", isPalindrome("madam"));

// 20
function titleCase(str) {
    return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
console.log("20. Title Case:", titleCase("the quick brown fox"));

// 21
function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}
console.log("21. Min and Max:", minMax([1, 2, 3, 4, 5]));

// Chapter 38 (Local vs Global)
console.log("\nChapter 38: Local vs Global Variables");

// 1
function localExample() {
    let localVar = "I am local";
    console.log(localVar);
}
localExample();

// 2
let globalVar = "I am global";
function accessGlobal() {
    console.log(globalVar);
}
accessGlobal();

// Chapter 39-40 (Switch)
console.log("\nChapter 39-40: Switch Statements");

// 1
let x = 2;
switch (x) {
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    default:
        console.log("Other");
}

// 2
let cityName = "Karachi";
switch (cityName) {
    case "Lahore":
    case "Islamabad":
    case "Karachi":
        console.log("City matched:", cityName);
        break;
    default:
        console.log("City not found");
}

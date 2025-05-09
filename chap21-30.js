
// Chapter 21 (Changing Case)
// Q1
var userInput = "Hello World";
var allLower = userInput.toLowerCase(); // corrected

// Q2
var x = "HELLO";
x = x.toLowerCase();

// Q3
var y = "hello";
y = y.toUpperCase();

// Q4
var a = "JavaScript";
var newVar = a.toLowerCase();

// Q5
var arr = ["HELLO"];
var lowerElement = arr[0].toLowerCase();

// Q6
var city = "karachi";
alert(city.toUpperCase());

// Q7
var cityName = "kaRacHi";
cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

// Chapter 22-25 (Strings)
// Q1
var sameWords = "captain";
var sliced = sameWords.slice(1, 3);

// Q2
var strLength = sameWords.length;

// Q3
var animal = "elephant";
var seg = animal.slice(2, 6);

// Q4
var newStrLength = animal.length;
var secondVar = newStrLength;

// Q5
var str = "programming";
var len = str.length;
var trimmedStr = str.slice(1, len - 3);

// Q6
var text = "To be or not to be.";
var indx = text.indexOf("be"); // 3

// Q7
var lastIndx = text.lastIndexOf("be"); // 16

// Q8
var text = "go go go away";
var indx = text.lastIndexOf("go");

// Q9
if (text[indexNum] !== undefined) {}

// Q10
var char = "abcde".charAt(2); // "c"

// Q11
var cha = text.charAt(9);

// Q12
var str = "Hello!";
var x = str.charAt(str.length - 1);

// Q13
var input = "abcdefg";
var cha = input.charAt(4);

// Q14
if (input.charAt(2) === "c") {}

// Q15
var myStr = "loopthis";
var myArr = [];
for (var i = 0; i < myStr.length; i++) {
    myArr[i] = myStr.charAt(i);
}

// Q16
var reply = "no thanks";
var revisedReply = reply.replace("no", "yes");

// Q17
var str = "1 is a number";
var newStr = str.replace("1", "one");

// Q18
var x = "banana";
var y = x.replace(/a/g, "z");

// Chapter 26 (Rounding Numbers)
// Q1
var num = 7.5;
var rounded = Math.round(num);

// Q2
var origNum = 4.3;
var roundNum = Math.ceil(origNum);

// Q3
origNum = 4.7;
var roundNum = Math.floor(origNum);

// Q4
var roundedAgain = Math.round(origNum);

// Q5
var half = Math.floor(0.5);

// Chapter 27 (Random Numbers)
// Q1
var rand1to50 = Math.floor(Math.random() * 50) + 1;

// Q2
var randNum = Math.random();

// Q3
var dice = Math.floor(Math.random() * 6) + 1;

// Q4
var toss = Math.random() < 0.5 ? "Heads" : "Tails";

// Chapter 28-29 (Converting Strings)
// Q1
var strToInt = parseInt("123");

// Q2
function convertToInt(str) {
    return parseInt(str);
}

// Q3
var floatNum = parseFloat("3.14");

// Q4
function isNumeric(str) {
    return !isNaN(str);
}

// Q5
var numToStr = String(42);

// Q6
function numToString(num) {
    return num.toString();
}

// Q7
var decToInt = parseInt("3.14");

// Chapter 30 (Controlling the Length of Decimals)
// Q1
var num = 3.1415926535;
var newNum = num.toFixed(4).toString();

// Q2
var value = 5.6789;
value = Number(value.toFixed(2).toString());

// Q3
if (num.toFixed(2).toString().length > 4) {}

// Q4
var longDecimal = 3.14159265;
alert(longDecimal.toFixed(2).toString());

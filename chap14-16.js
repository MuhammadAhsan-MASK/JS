
var studentNames1 = [];
var studentNames2 = new Array();
var stringsArray = ["Ali", "Ahmed", "Sara"];
var numbersArray = [1, 2, 3, 4, 5];
var booleanArray = [true, false, true];
var mixedArray = ["Ali", 25, true];

var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
for (var i = 0; i < qualifications.length; i++) {
  document.write((i + 1) + ") " + qualifications[i] + "<br>");
}

var students = ["Ali", "Ahmed", "Sara"];
var scores = [400, 450, 380];
for (var i = 0; i < students.length; i++) {
  var percentage = (scores[i] / 500) * 100;
  document.write("Score of " + students[i] + " is " + scores[i] + ". Percentage: " + percentage + "%<br>");
}

var colors = ["Red", "Green", "Blue"];
document.write(colors + "<br>");
var beginColor = prompt("Enter color to add at beginning:");
colors.unshift(beginColor);
document.write(colors + "<br>");
var endColor = prompt("Enter color to add at end:");
colors.push(endColor);
document.write(colors + "<br>");
colors.unshift("Purple", "Orange");
document.write(colors + "<br>");
colors.shift();
document.write(colors + "<br>");
colors.pop();
document.write(colors + "<br>");
var indexAdd = +prompt("Enter index to add color:");
var colorName = prompt("Enter color name:");
colors.splice(indexAdd, 0, colorName);
document.write(colors + "<br>");
var indexDel = +prompt("Enter index to delete color(s):");
var delCount = +prompt("How many colors to delete:");
colors.splice(indexDel, delCount);
document.write(colors + "<br>");

var scores = [320, 230, 480, 120];
document.write("Scores: " + scores + "<br>");
scores.sort();
document.write("Sorted Scores: " + scores + "<br>");

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(0, 3);
document.write("Selected Cities: " + selectedCities + "<br>");

var arr = ["This", " is", " my", " cat"];
var singleString = arr.join("");
document.write(singleString + "<br>");

var fifo = [];
fifo.push("Keyboard");
fifo.push("Mouse");
fifo.push("Printer");
fifo.push("Monitor");
document.write(fifo.shift() + "<br>");
document.write(fifo.shift() + "<br>");
document.write(fifo.shift() + "<br>");
document.write(fifo.shift() + "<br>");

var lifo = [];
lifo.push("Keyboard");
lifo.push("Mouse");
lifo.push("Printer");
lifo.push("Monitor");
document.write(lifo.pop() + "<br>");
document.write(lifo.pop() + "<br>");
document.write(lifo.pop() + "<br>");
document.write(lifo.pop() + "<br>");

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>");
for (var i = 0; i < manufacturers.length; i++) {
  document.write("<option>" + manufacturers[i] + "</option>");
}
document.write("</select>");


// Q1
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
alert("Hello " + fullName + "!");

// Q2
var phone = prompt("Enter your favorite mobile phone model:");
document.write("My favorite phone is: " + phone + "<br>");
document.write("Length of string: " + phone.length + "<br>");

// Q3
var word = "Pakistani";
document.write("Index of 'n': " + word.indexOf("n") + "<br>");

// Q4
var greeting = "Hello World";
document.write("Last index of 'l': " + greeting.lastIndexOf("l") + "<br>");

// Q5
document.write("Character at index 3: " + word.charAt(3) + "<br>");

// Q6
var fullNameConcat = firstName.concat(" ", lastName);
alert("Hello " + fullNameConcat + "!");

// Q7
var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");
document.write("After replacement: " + newCity + "<br>");

// Q8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");
document.write(newMessage + "<br>");

// Q9
var value = "472";
var number = Number(value);
document.write("Value: " + value + " (type: " + typeof value + ")<br>");
document.write("Value: " + number + " (type: " + typeof number + ")<br>");

// Q10
var inputUpper = prompt("Enter any text:");
document.write("Upper case: " + inputUpper.toUpperCase() + "<br>");

// Q11
var inputTitle = prompt("Enter any text:");
var titleCase = inputTitle.charAt(0).toUpperCase() + inputTitle.slice(1).toLowerCase();
document.write("Title case: " + titleCase + "<br>");

// Q12
var num = 35.36;
var str = num.toString().replace(".", "");
document.write("Result: " + str + "<br>");

// Q13
var username = prompt("Enter username:");
var invalidChars = ['!', ',', '.', '@'];
for (var i = 0; i < username.length; i++) {
  if (invalidChars.includes(username[i])) {
    alert("Please enter a valid username without special symbols.");
    break;
  }
}

// Q14
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Welcome! What do you want to order?").toLowerCase();
var found = false;
for (var i = 0; i < A.length; i++) {
  if (A[i].toLowerCase() === search) {
    found = true;
    break;
  }
}
if (found) {
  alert(search + " is available at index " + i + " in our bakery.");
} else {
  alert("We are sorry. " + search + " is not available in our bakery.");
}

// Q15
var password = prompt("Enter your password:");
if (
  password.length < 6 ||
  !isNaN(password.charAt(0)) ||
  !/[a-zA-Z]/.test(password) ||
  !/[0-9]/.test(password)
) {
  alert("Password is invalid! Must be at least 6 characters, include letters and numbers, and not start with a number.");
} else {
  alert("Password accepted.");
}

// Q16
var university = "University of Karachi";
var universityArray = university.split("");
for (var i = 0; i < universityArray.length; i++) {
  document.write(universityArray[i] + "<br>");
}

// Q17
var userInput = prompt("Enter any text:");
var lastChar = userInput.charAt(userInput.length - 1);
document.write("Last character: " + lastChar + "<br>");

// Q18
var text = "The quick brown fox jumps over the lazy dog";
var count = text.toLowerCase().split("the").length - 1;
document.write("There are " + count + " occurrence(s) of word 'the'<br>");

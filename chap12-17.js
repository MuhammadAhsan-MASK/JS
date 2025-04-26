
// Chapter 12
if (a >= b) {
    alert("a is greater or equal to b");
  } else {
    alert("a is less than b");
  }
  
  var marks = prompt("Enter your marks");
  var percentage = (marks / 100) * 100;
  if (percentage >= 80) {
    alert("Grade A");
  } else if (percentage >= 60) {
    alert("Grade B");
  } else {
    alert("Grade C");
  }
  
  if (a === 10) {
    alert("a is 10");
  } else {
    alert("The correct value of a is " + a);
  }
  
  var city = prompt("Enter your city");
  if (city === "Karachi") {
    alert("City is Karachi");
  } else if (city === "Lahore") {
    alert("City is Lahore");
  } else {
    alert("Different city");
  }
  
  // Chapter 13
  if (a === b && c === d) {}
  
  if (a === b || c !== d) {}
  
  if ((name === "Hamza" || name === "Arsalan") && age < 60) {}
  
  var x = 5;
  var y = 10;
  if (x < y || x > y) {
    alert("Condition true");
  }
  
  var firstName = "Ahsan";
  var lastName = "Saeed";
  var fName = prompt("Enter first name");
  var lName = prompt("Enter last name");
  if (fName === firstName && lName === lastName) {
    alert("Names matched");
  }
  
  // Chapter 14
  var password = prompt("Enter password");
  if (password !== "") {
    if (password.length <= 5) {
      alert("Password must be greater than 5");
    } else {
      alert("OK");
    }
  }
  
  if (a === 1) {
    if (c === "Max") {
      alert("OK");
    }
  }
  
  if (a === 1 && c === "Max") {
    alert("OK");
  }
  
  var num1 = 5;
  var num2 = 5;
  if (num1 === num2) {
    if (num1 <= num2) {
      alert("Both numbers are equal and condition passed");
    }
  }
  
  // Chapter 15
  var arr = [];
  
  var arr2 = ["hello"];
  
  var alphabet = ["h", "i", "j", "k"];
  alert(alphabet[2]);
  
  var alphabet2 = ["h", "i", "j", "k", "l", "m", "n", "o"];
  alert(alphabet2.length);
  
  var arr3 = ["first"];
  arr3[1] = "second";
  alert(arr3[1]);
  
  // Chapter 16
  var arr4 = ["start"];
  arr4.push("end");
  alert(arr4[arr4.length - 1]);
  
  var Alphabet = ["h", "i", "j", "k"];
  Alphabet.pop();
  
  var Alphabet2 = ["h", "i", "j", "k"];
  Alphabet2.push(5);
  
  // Chapter 17
  var sizes = ["S", "M", "XL", "XXL", "XXXL"];
  sizes.shift();
  
  var sizes2 = ["S", "M", "XL", "XXL", "XXXL"];
  sizes2.unshift(1, 2, 3);
  
  var arr5 = ["one"];
  arr5.unshift("zero");
  alert(arr5[0]);
  
  var sizes3 = ["S", "M", "XL", "XXL", "XXXL"];
  sizes3.splice(2, 0, "L");
  
  var sizes4 = ["S", "M", "XL", "XXL", "XXXL"];
  var regSizes = sizes4.slice(0, 3);
  
  var pets = ["dog", "cat", "ox", "duck", "frog"];
  pets.splice(1, 3, "parrot", "rabbit");
  
  var pets2 = ["dog", "cat", "ox", "duck", "frog"];
  pets2.splice(1, 2);
  
  var pets3 = ["dog", "cat", "ox", "duck", "frog", "flea"];
  var newPets = pets3.slice(3, 5);
  
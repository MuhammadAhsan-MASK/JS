// 1. Write a statement in which the loop runs 10 times.
for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  
  // 2. Code the first line of a for loop with the usual counter name, usual starting value, and usual increment. Run it 12 times using <= to specify how many loops.
  for (let i = 0; i <= 11; i++) {
    console.log(i);
  }
  
  // 3. What are the 5 characters missing from this code, excluding any spaces that are missing?  
  // for var i = 0 i <= 4 i++
  // Missing characters: ;, let, ;, ) 
  for (let i = 0; i <= 4; i++) {
    console.log(i);
  }
  
  // 4. Code the first line of a for loop with a counter name that's not i. Code the usual starting value and usual increment. Run it 100 times using < to specify how many loops.
  for (let counter = 0; counter < 100; counter++) {
    console.log(counter);
  }
  
  // 5. Code the first line of a for loop with the usual counter and the usual starting value. Run it 3 times using > to specify how many loops. Decrement it with each iteration.
  for (let i = 3; i > 0; i--) {
    console.log(i);
  }
  
  // 6. The statement assigns the number of elements in the array to the variable.
  let array = [1, 2, 3, 4, 5];
  let arrayLength = array.length;
  console.log(arrayLength);
  
  // 7. Set a variable named flag with an initial Boolean value of your choice.
  let flag = true;
  console.log(flag);
  
  // 8. Code the first line of a for loop with the usual counter, the usual starting value, and the usual incrementing. Limit the number of loops by the number of elements in the array pets.
  let pets = ["cat", "dog", "bird"];
  for (let i = 0; i < pets.length; i++) {
    console.log(pets[i]);
  }
  
  // 9. Coding Exercise:
  // Set a for loop to run 10 iterations. On the second iteration, display the counter in an alert. Break out of the loop.
  for (let i = 0; i < 10; i++) {
    if (i === 1) {
      alert(i); // Displays 1 on the second iteration
      break; // Break out of the loop
    }
  }
  
  // 10. Create an array which contains user names
  // Code a prompt with the message "Enter first name". The user's response is assigned to firstName.
  // Code the first line of a for loop with the usual counter, the usual starting value, and the usual incrementing. Limit the number of loops by the number of elements in the array userNames.
  // Code an if statement that tests the presence of the userName in the array.
  // If the user name matches, alert "Enter". If not, alert "Please write correct user name".
  let userNames = ["John", "Jane", "Bob", "Alice"];
  let firstName = prompt("Enter first name");
  
  let userFound = false;
  for (let i = 0; i < userNames.length; i++) {
    if (userNames[i] === firstName) {
      alert("Enter");
      userFound = true;
      break;
    }
  }
  
  if (!userFound) {
    alert("Please write correct user name");
  }
  
  // 11. Complete this code to display an alert if a match isn't found.
  var matchFound = false;
  for (var i = 0; i < list.length; i++) {
    if (userInput === list[i]) {
      alert("Match found");
      matchFound = true;
      break;
    }
  }
  
  if (!matchFound) {
    alert("Match not found");
  }
  
  // 12. Concatenate two arrays with nested loops:
  var firstArr = ["a", "b", "c", "d", "e", "f"];
  var secondArr = [1, 2, 3, 4, 5, 6];
  
  for (let i = 0; i < firstArr.length; i++) {
    for (let j = 0; j < secondArr.length; j++) {
      console.log(firstArr[i] + secondArr[j]);
    }
  }
  
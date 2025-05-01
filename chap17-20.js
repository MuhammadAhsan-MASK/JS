// 1. Declare and initialize an empty multidimensional array.
let multiArray = [];

// 2. Declare and initialize a multidimensional array representing the following matrix:
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// 3. Program to print numeric counting from 1 to 10:
console.log("Counting from 1 to 10:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 4. Program to print multiplication table of any number using for loop:
let number = prompt("Enter the number to print multiplication table:");
let length = prompt("Enter the length of the table:");
console.log(`Multiplication table of ${number}:`);
for (let i = 1; i <= length; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

// 5. Program to print items of the following array using for loop:
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
console.log("Fruits in the array:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 6. Generate the following series:
console.log("\nSeries:");
console.log("Counting:");
for (let i = 1; i <= 15; i++) {
  console.log(i);
}

console.log("Reverse counting:");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

console.log("Even numbers:");
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}

console.log("Odd numbers:");
for (let i = 1; i <= 19; i += 2) {
  console.log(i);
}

console.log("Series (2k, 4k, ...):");
for (let i = 2; i <= 20; i += 2) {
  console.log(i + "k");
}

// 7. Search an item in the array:
let items = ["cake", "apple pie", "cookie", "chips", "patties"];
let searchItem = prompt("Enter an item to search:");
if (items.includes(searchItem)) {
  alert(`${searchItem} is found in the list.`);
} else {
  alert(`${searchItem} is not found in the list.`);
}

// 8. Program to identify the largest number in the given array:
let A = [24, 53, 78, 91, 12];
let largest = Math.max(...A);
console.log("Largest number is:", largest);

// 9. Program to identify the smallest number in the given array:
let smallest = Math.min(...A);
console.log("Smallest number is:", smallest);

// 10. Program to print multiples of 5 ranging from 1 to 100:
console.log("\nMultiples of 5 from 1 to 100:");
for (let i = 5; i <= 100; i += 5) {
  console.log(i);
}

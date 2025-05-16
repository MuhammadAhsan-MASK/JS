// 1. Display current date and time
console.log("1. Current Date and Time: " + new Date());

// 2. Alert current month in words
let now = new Date();
let months = ["January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"];
console.log("2. Current Month: " + months[now.getMonth()]);

// 3. Alert first 3 letters of current day
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log("3. Today is: " + days[now.getDay()]);

// 4. Display “It’s Fun day” if it's Saturday or Sunday
if (now.getDay() === 0 || now.getDay() === 6) {
    console.log("4. It’s Fun day");
} else {
    console.log("4. It's a weekday");
}

// 5. First fifteen or last days of the month
let date = now.getDate();
if (date < 16) {
    console.log("5. First fifteen days of the month");
} else {
    console.log("5. Last days of the month");
}

// 6. Minutes since Jan 1, 1970
let minutesSince1970 = Math.floor(new Date().getTime() / 60000);
console.log("6. Minutes since Jan 1, 1970: " + minutesSince1970);

// 7. AM or PM
let hour = now.getHours();
console.log("7. " + (hour < 12 ? "Its AM" : "Its PM"));

// 8. Last day of last month of 2020
let laterDate = new Date(2020, 11, 31); 
console.log("8. Later Date: " + laterDate);

// 9. Days passed since 1st Ramadan (June 18, 2015)
let ramadanStart = new Date("June 18, 2015");
let today = new Date();
let diffTime = today - ramadanStart;
let diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
console.log("9. Days since 1st Ramadan: " + diffDays);

// 10. Seconds since beginning of 2015
let start2015 = new Date("Jan 1, 2015");
let secondsSince2015 = Math.floor((today - start2015) / 1000);
console.log("10. Seconds since Jan 1, 2015: " + secondsSince2015);

// 11. Set date object one hour ahead
let futureDate = new Date();
futureDate.setHours(futureDate.getHours() + 1);
console.log("11. Date one hour ahead: " + futureDate);

// 12. Date 100 years back
let hundredYearsBack = new Date();
hundredYearsBack.setFullYear(hundredYearsBack.getFullYear() - 100);
console.log("12. 100 years back: " + hundredYearsBack);

// 13. Birth year from age
let age = 25;
let birthYear = new Date().getFullYear() - age;
console.log("13. Your birth year is: " + birthYear);

// 14. K-Electric Bill
let customerName = "Ahsan Saeed";
let units = 350;
let chargesPerUnit = 20;
let monthName = months[now.getMonth()];
let netAmount = units * chargesPerUnit;
let lateSurcharge = 350;
let grossAmount = netAmount + lateSurcharge;

console.log("14. K-Electric Bill");
console.log("Customer Name: " + customerName);
console.log("Month: " + monthName);
console.log("Number of units: " + units);
console.log("Charges per unit: " + chargesPerUnit);
console.log("Net Amount Payable (within Due Date): " + netAmount.toFixed(2));
console.log("Late Payment Surcharge: " + lateSurcharge.toFixed(2));
console.log("Gross Amount Payable (after Due Date): " + grossAmount.toFixed(2));

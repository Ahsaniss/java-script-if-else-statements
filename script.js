// Write a js program to find the maximum between two numbers.
var a=3;
var b=6;
if (b>a) {
    console.log("b is greater than a");
}
else{
    console.log("a is greater than b");
}
//. Write a js program to find the maximum between three numbers
var a=4;
var b=1;
var c=9;
console.log(Math.max(a,b,c));
// Write a js program to check whether a number is negative, positive or zero
var a=-1;
if(a>0){
    console.log("number is positive");
}
else if(a=0){
    console.log("number is equal to 0");
}
else{
    console.log("number is negative");
}
//Write a js program to check whether a number is divisible by 5 and 11 or not
function checkDivisibility(num) {
    if (num % 5 === 0 && num % 11 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(checkDivisibility(55)); // Output: true
//Check whether a number is even or odd:
function checkEvenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkEvenOrOdd(7)); // Output: Odd
//Check whether a year is a leap year or not:
function checkLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(checkLeapYear(2024)); // Output: true
//Check whether an input alphabet is a vowel or consonant:
function checkVowelOrConsonant(alphabet) {
    if (alphabet.length !== 1) {
        return "Invalid input";
    }
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    if (vowels.includes(alphabet.toLowerCase())) {
        return "Vowel";
    } else {
        return "Consonant";
    }
}

console.log(checkVowelOrConsonant('A')); // Output: Vowel
//Check whether a character is uppercase or lowercase alphabet:
function checkCase(character) {
    if (character >= 'A' && character <= 'Z') {
        return "Uppercase";
    } else if (character >= 'a' && character <= 'z') {
        return "Lowercase";
    } else {
        return "Not an alphabet character";
    }
}

console.log(checkCase('g')); // Output: Lowercase
//Input the week number and print the weekday:
function printWeekday(weekNumber) {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    if (weekNumber >= 1 && weekNumber <= 7) {
        return weekdays[weekNumber - 1];
    } else {
        return "Invalid week number";
    }
}

console.log(printWeekday(3)); // Output: Tuesday
//Input the month number and print the number of days in that month:
function getNumberOfDays(monthNumber) {
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (monthNumber >= 1 && monthNumber <= 12) {
        return daysInMonth[monthNumber - 1];
    } else {
        return "Invalid month number";
    }
}

console.log(getNumberOfDays(2)); // Output: 28 (assuming it's not a leap year)
//Count the minimum number of notes in a given amount:
function countNotes(amount) {
    const denominations = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    let notesCount = {};
    for (let denomination of denominations) {
        notesCount[denomination] = Math.floor(amount / denomination);
        amount %= denomination;
    }
    return notesCount;
}

console.log(countNotes(2510)); // Output: { 2000: 1, 500: 1, 10: 1 }
//Input marks of five subjects and calculate percentage and grade:
function calculateGrade(physics, chemistry, biology, mathematics, computer) {
    const totalMarks = 500;
    const obtainedMarks = physics + chemistry + biology + mathematics + computer;
    const percentage = (obtainedMarks / totalMarks) * 100;
    let grade;
    if (percentage >= 90) {
        grade = 'A';
    } else if (percentage >= 80) {
        grade = 'B';
    } else if (percentage >= 70) {
        grade = 'C';
    } else if (percentage >= 60) {
        grade = 'D';
    } else if (percentage >= 40) {
        grade = 'E';
    } else {
        grade = 'F';
    }
    return { percentage, grade };
}

console.log(calculateGrade(85, 90, 78, 92, 88)); // Output: { percentage: 86.6, grade: 'B' }
//Calculate gross salary based on basic salary:
function calculateGrossSalary(basicSalary) {
    let hra, da;
    if (basicSalary <= 10000) {
        hra = 0.2 * basicSalary;
        da = 0.8 * basicSalary;
    } else if (basicSalary <= 20000) {
        hra = 0.25 * basicSalary;
        da = 0.9 * basicSalary;
    } else {
        hra = 0.3 * basicSalary;
        da = 0.95 * basicSalary;
    }
    const grossSalary = basicSalary + hra + da;
    return grossSalary;
}

console.log(calculateGrossSalary(15000)); // Output: 33000 (assuming 15000 is the basic salary)
//Calculate total electricity bill:
function calculateElectricityBill(units) {
    let totalBill = 0;
    if (units <= 50) {
        totalBill = units * 0.50;
    } else if (units <= 150) {
        totalBill = 50 * 0.50 + (units - 50) * 0.75;
    } else if (units <= 250) {
        totalBill = 50 * 0.50 + 100 * 0.75 + (units - 150) * 1.20;
    } else {
        totalBill = 50 * 0.50 + 100 * 0.75 + 100 * 1.20 + (units - 250) * 1.50;
    }
    // Adding 20% surcharge
    totalBill *= 1.20;
    return totalBill;
}

console.log(calculateElectricityBill(200)); // Output: 135 (assuming 200 units consumed)
let john = { name: "John" };

// for every user, let's store their visits count
let visitsCountMap = new Map();

// john is the key for the map
visitsCountMap.set(john, 123);

alert( visitsCountMap.get(john) ); // 123
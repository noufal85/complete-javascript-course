let js = "amazing";
//if (js === "amazing") alert("JavaScript is FUN!");
console.log(40 + 8 + 23 - 10);
console.log("Jonas");
console.log(23);

// Values and Variables
let country = "United States";
let continent = "North America";
let population = 328.2;
console.log(country);
let firstName_ = "John";
console.log(firstName_);

// Data Types


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
// Math Operators

let x , y;
x = 10
y = 15;
console.log(x + y);
console.log(x - y);
console.log(x * y);

// 
console.log("Average below")
const avg = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, avg);

// boolean

let fullAge = true;
console.log(fullAge);
console.log(typeof fullAge);
console.log(typeof ageJonas);
console.log( "Jonas is " + ageJonas + " years old");
console.log('comparison operators');
console.log(ageJonas>ageSarah);

// template literals

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;
const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

// if else statements
console.log("if else statements");
const age = 21;
if (age >= 18) {
    console.log("Sarah can start driving license 😍");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}



//  LET AND CONST

//es5
//var name5 = "Jane Smith";
//var age5 = 23;
//name5 = "Jane Miller";
//console.log(name5);

//*es6
//const name6 = "Jane Smith";
//let age6 = 23;
//name6 = "Jane Miller";
//console.log(name6);

//es5
function driversLicense5(passedTest) {
  if (passedTest) {
    var firstName = "John";
    var birthYear = 1990;
  }
  console.log(
    firstName + " who was born in " + birthYear + " is now a driver!"
  );
}
driversLicense5("true");

//es6
function driversLicense6(passedTest) {
  //console.log(firstName);  wont work, because we cannot console.log variable before declaring and defining them
  let firstName = "John";
  const birthYear = 1990;
  if (passedTest) {
    firstName = "John";
  }
  console.log(
    firstName + " who was born in " + birthYear + " is now a driver!" //has to be in the same block in order to work
    //const can be used only in the same block
  );
}
driversLicense6("true");

/*let i = 23;
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i);
//with let it will load 0, 1, 2, 3, 4 and 23
*/
var i = 23;
for (var i = 0; i < 5; i++) {
  //console.log(i);
}
//console.log(i);
//with var it will only load 0, 1, 2, 3, 4

//BLOCKS AND IIFES

//block

//es6
{
  const a = 1;
  let b = 2;
  var c = 3;
}
//console.log(a + b);
console.log(c);

//es5
//(function () {
//var c = 3;
// }
//)();
//console.log(c);

//STRINGS IN ES6
let firstName = "John";
let lastName = "Smith";
const birthYear = 1990;

function calcAge(year) {
  return 2020 - year;
}

//es5
console.log(
  "This is " +
    firstName +
    " " +
    lastName +
    ". He was born in " +
    birthYear +
    "."
);

//es6
console.log(
  `This is ${firstName} ${lastName}. He was born in ${birthYear}. Today he is ${calcAge(
    birthYear
  )} years old.`
);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith("J")); //checks if the string starts with the capital J, non capital j will return false
console.log(n.endsWith("h")); //checks if the string ends withe the non-capital h, capital H will return false
console.log(n.includes(" ")); //checks if the string includes something in it
console.log(` ${firstName} `.repeat(5));

//arrow function basics
const years = [1990, 1932, 1944, 1965];

//es5
var ages5 = years.map(function (el) {
  return 2020 - el;
});
console.log(ages5);

//es6
let ages6 = years.map((el) => 2020 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1} : ${2020 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1} : ${age}.`;
});
console.log(ages6);

//ARROW FUNCTIONS LEXICAL "THIS" KEYWORD

//es5
var box5 = {
  color: "green",
  position: 1,
  clickMe: function () {
    var self = this;
    document.querySelector(".green").addEventListener("click", function () {
      var str =
        "This is box number " + self.position + " and it is " + self.color;
      alert(str);
    });
  },
};
//box5.clickMe();

//es6
const box6 = {
  color: "green",
  position: 1,
  clickMe: function () {
    document.querySelector(".green").addEventListener("click", () => {
      var str =
        "This is box number " + this.position + " and it is " + this.color;
      alert(str);
    });
  },
};
box6.clickMe();

function Person(name) {
  this.name = name;
}
//es5
Person.prototype.myFriends5 = function (friends) {
  var arr = friends.map(
    function (el) {
      return this.name + " is friends with " + el;
    }.bind(this)
  );
  console.log(arr);
};

var friends = ["Bob", "Jane", "Mark"];
new Person("John").myFriends5(friends);

//es6
Person.prototype.myFriends6 = function (friends) {
  var arr = friends.map((el) => ` ${this.name} is friends with  ${el}`);
  console.log(arr);
};

var friends = ["Bob", "Jane", "Mark"];
new Person("Mike").myFriends6(friends);

//DESTRUCTURING

//es5
var john = ["John", 25];
//var name = john[0];
var age = john[1];

//es6
const [name, year] = ["John", 25];
console.log(name);
console.log(year);

const obj = {
  firstNamee: "John",
  lastNamee: "Smith",
};
const { firstNamee, lastNamee } = obj;
console.log(firstNamee);
console.log(lastNamee);

const { firstNamee: a, lastNamee: b } = obj;
console.log(a);
console.log(b);

function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [age1, retirement] = calcAgeRetirement(1990);
console.log(age1);
console.log(retirement);

//ARRAYS IN ES6

//const boxes = document.querySelectorAll(".box");

//es5
// var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function (cur) {
//  cur.style.backgroundColor = "pink";
// });

//es6
//const boxesArr6 = Array.from(boxes);
//Array.from(boxes).forEach((cur) => (cur.style.backgroundColor = "orange"));

//es5
/*
for (var i = 0; i < boxesArr5.length; i++) {
  if (boxesArr5[i].className === "box blue") {
    continue;
  }
  boxesArr5[i].textContent = "I changed to blue";
}
*/

//es6
/*
for (const cur of boxesArr6) {
  if (cur.className.includes("blue")) {
    continue;
  }
  cur.textContent = "I changed to blue";
}
*/

//es5
var ages = [12, 17, 14, 11, 21, 13];
var full = ages.map(function (cur) {
  return cur >= 18;
});
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//es6
console.log(ages.findIndex((cur) => cur >= 18));
console.log(ages.find((cur) => cur >= 18));

//THE SPREAD OPERATOR
function addFourAges(a, b, c, d) {
  return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

//es5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//es6
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ["John", "Jane", "Mark"];
const familyMiller = ["Mary", "Bob", "Ann"];

const bigFamily = [...familyMiller, "Lily", ...familySmith];
console.log(bigFamily);

const h = document.querySelector("h1");
const boxes = document.querySelectorAll(".box");
const all = [h, ...boxes];
Array.from(all).forEach((cur) => (cur.style.color = "purple"));

//REST PARAMETERES

//es5
function isFullAge5(limit) {
  //console.log(arguments);
  var argsArr = Array.prototype.slice.call(arguments, 1);
  argsArr.forEach(function (cur) {
    console.log(2020 - cur >= limit);
  });
}
//isFullAge5(44, 1990, 2005, 1967);

//es6
function isFullAge6(limit, ...years) {
  //console.log(years);
  years.forEach((cur) => console.log(2020 - cur >= limit));
}
isFullAge6(20, 1990, 2005, 1967);

//DEFAULT PARAMETERES

//es5

/*function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
  lastName === undefined ? (lastName = "Smith") : (lastName = lastName);
  nationality === undefined
    ? (nationality = "American")
    : (nationality = nationality);
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}
var john = new SmithPerson("John", 1990);
console.log(john);
var emily = new SmithPerson("Emily", 1993, "Diaz", "Spanish");
console.log(emily);
*/

//es6
function SmithPerson(
  firstName,
  yearOfBirth,
  lastName = "Smith",
  nationality = "American"
) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}
var john = new SmithPerson("John", 1990);
console.log(john);
var emily = new SmithPerson("Emily", 1993, "Diaz", "Spanish");
console.log(emily);

//MAPS

const Question = new Map();
Question.set(
  "question",
  "What is the official name of the latest major JavaScript version?"
);
Question.set(1, "ES5");
Question.set(2, "ES6");
Question.set(3, "ES2015");
Question.set(4, "ES7");
Question.set("correct", 3);
Question.set(true, "Correct answer!");
Question.set(false, "Wrong answer! Try again!");

//console.log(Question.get("question"));
//console.log(Question.size);

if (Question.has(4)) {
  //Question.delete(4);
}

//Question.clear();

/*
Question.forEach((value, key) =>
  console.log(`This is ${key} and it's set to ${value}`)
);
*/
// for (let [key, value] of Question.entries()) {
// console.log(`This is ${key} and it's set to ${value}`);
// if (typeof key === "number") {
//  console.log(`Answer ${key}:${value}`);
// }
// }

//const ans = parseInt(prompt("Write the correct answer"));
//console.log(Question.get(ans === Question.get("correct")));

//CLASES

//es5
/*
var person5 = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

person5.prototype.calculateAge = function () {
  var age = new Date().getFullYear - this.yearOfBirth;
  console.log(age);
};

var john5 = new person5("John", 1990, "musician");
*/

/*
//es6
class person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }
  calculateAge() {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
  }
  static greeting() {
    console.log("Hey there");
  }
}
const john6 = new person6("John", 1990, "teacher");

person6.greeting();
*/

//CLASSES WITH SUBCLASSES

//es5
var person5 = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

person5.prototype.calculateAge = function () {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
};
var Athlete5 = function (name, yearOfBirth, job, olympicGames, medals) {
  person5.call(this, name, yearOfBirth, job);
  this.olympicGames = olympicGames;
  this.medals = medals;
};
Athlete5.prototype = Object.create(person5.prototype);
Athlete5.prototype.wonMedal = function () {
  this.medals++;
  console.log(this.medals);
};
var johnAtlete5 = new Athlete5("John", 1990, "swimmer", 3, 10);
console.log(johnAtlete5);
johnAtlete5.calculateAge();
johnAtlete5.wonMedal();

//es6
class person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }
  calculateAge() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }
}
class Athlete6 extends person6 {
  constructor(name, yearOfBirth, job, olympicGames, medals) {
    super(name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
  }
  wonMedal() {
    this.medals++;
    console.log(this.medals);
  }
}

const johnAtlete6 = new Athlete6("John", 1990, "swimmer", 3, 10);
johnAtlete6.wonMedal();
johnAtlete6.calculateAge();

//CODING CHALLENGE 8

class park {
  constructor(parkName, buildYear, numberOfTrees, area) {
    this.parkName = parkName;
    this.buildYear = buildYear;
    this.numberOfTrees = numberOfTrees;
    this.area = area;
  }
  treeDensity() {
    const density = parseInt(this.numberOfTrees) / parseInt(this.area);
    console.log(
      `Tree density of the ${this.parkName} park is ${density} trees/m2.`
    );
  }
  calcuAge() {
    const parkAge = new Date().getFullYear() - this.buildYear;
    console.log(parkAge);
  }
}

const park1 = new park("Njegošev", 2000, 500, "150m2");
const park2 = new park("Kraljev", 2005, 1000, "200m2");
const park3 = new park("Gorica", 1999, 1500, "1000m2");
const parks = [park1, park2, park3];

const average = (park1.calcuAge() + park2.calcuAge() + park3.calcuAge()) / 3;
console.log(average);

park1.treeDensity();
park2.treeDensity();
park3.treeDensity();
park1.calcuAge();
park2.calcuAge();
park3.calcuAge();

class street {
  constructor(name, buildYear, length, classification) {
    this.name = name;
    this.buildYear = buildYear;
    this.length = length;
    this.classification = classification;
  }
}

const street1 = new street("Nikca od Rovina", 2000, "1km", "tiny");
const street2 = new street("Belvederska", 2005, "2km", "small");
const street3 = new street("Fruškogorska", 2010, "3km", "normal");
const street4 = new street("Marka Miljanova", 2012, "5km", "big");
//console.log(street1);

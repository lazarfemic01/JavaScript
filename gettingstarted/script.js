
/*
Multi-line comment
*/

var firstName="John";
console.log(firstName);

var lastName="Smith";
var age="28";


var Fullage="true";
console.log(Fullage);

var job;
console.log(job);


// this is single-line javascript comment
job="teacher"
console.log(job)

var firstName="John"
var age="28"


// type coercion
console.log(firstName+" "+ age)

var job, isMarried;

job = "teacher";
isMarried= false;

console.log(firstName+ " is a "+ age + "years old" + job + ". Is he married? " + isMarried);


//variable mutation
age=" twenty eight ";
job=" driver "

console.log(firstName + " is a " + age + " year old " + job + ". Is he married? " + isMarried);

// var lastName= prompt("What is his last name?")
console.log(firstName + " " + lastName)

//basic operators

//math operators
var now, yearJohn, yearMark
now = 2020
ageJohn=28
ageMark=33
yearJohn = now-28;
console.log(yearJohn);

yearMark= now-33;
console.log(yearMark);


console.log(now*2);


//logical operator

var johnOlder= ageJohn<ageMark;
console.log(johnOlder);

//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log( typeof "Mark is older than John");
var x
console.log(typeof x);


//operator precedence
var now=2020
var yearJohn=1992
var fullAge=18

var isfullAge= now - yearJohn >= fullAge;
console.log(isfullAge)

var ageJohn= now-yearJohn;
var ageMark= 33;
var average= (ageJohn+ageMark)/2;
console.log(average)

var x,y;
x=y=(3+5)*4-6; //8*4-6=32-6=26
console.log(x,y);

//more operator
x*=2
console.log(x);
x+=10
console.log(x)


// x=x+1
// x+=1
x++
console.log(x);

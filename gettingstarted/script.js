
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



var Johnweight=90
var Markweight=80
var Johnheight=2
var Markheight=1.9

var bmiJohn= Johnweight/(Johnheight*Johnheight);
console.log(bmiJohn)

var bmiMark= Markweight/(Markheight*Markheight);
console.log(bmiMark)


var isMarkbmi= Johnweight>=Markweight;
console.log("Is John/'s bmi higher thank the Mark/'s?" + isMarkbmi);

if(bmiMark>bmiJohn) {
    console.log("Mark/'s bmi is higher than the John/'s.");
}

else {
    console.log("Mark/'s bmi is lower than the John/'s.")
}


//if else statements

var firstName="John";
var civilStatus="single";

if(civilStatus==="married"){
    console.log(firstName+ " is married")
}

else {
  console.log(firstName + " will hopefully get married soon.")
}



var isMarried=true
if(isMarried){
    console.log(firstName+ " is married")
}

else {
  console.log(firstName + " will hopefully get married soon.")
}

//bolean logic

var firstName="John"
var ageJohn=20

if(ageJohn<13){
console.log(firstName+ " is a boy. ")
}

else if (ageJohn>=13 && ageJohn<20){
    console.log(firstName+ " is a teenager");
}
else if (ageJohn>=20 && ageJohn<30){
    console.log(firstName+ " is a young man");
}

else {
    console.log(firstName+ " is a man. ")
}

//the ternary operator and switch statements

var firstName="John"
age=14

age>=18? console.log(firstName + " drinks beer"): console.log(firstName + " drinks juice");



//ternary operator
var drink=age>=18? "beer" : "juice";
console.log(drink);

// if(age>=18) {
//     var drink="bear"
// }
// else {
//     var drink="juice"
// }

//switch statements

var job="teacher";
switch(job) {

    case "instructor":
        console.log(firstName + " teaches kids how to code.")
        break;
    case "teacher":
        console.log(firstName + " teaches kids how to code.")
        break;
    case "driver":
        console.log(firstName + " drives an Uber in Lisabon.")
        break;
    case "designer":
        console.log(firstName + " designs beautiful websites.")
        break;
        default: console.log(firstName + " does something else.")
}

ageJohn=8;
switch(true) {
 
      case ageJohn<13:
          console.log(firstName + " is a boy.")
      break;
      case ageJohn>=13 && ageJohn<20:
      console.log(firstName + " is a teenager.")
      break;
      case (ageJohn>=20 && ageJohn<30):
          console.log(firstName + " is a young man.")
      break;
      default: console.log(firstName+ " is a man.")
      
}


//truthy and falsy values and equality operators

var height ;
height=23;
if(height || height===0) {
    console.log("The variable is defined");
}

else {
    console.log("The variable is not defined");
}

//equality operators
if(height==23) {
    console.log("The == operator does type coercion");
}




var points1=89;
var points2=120;
var points3=103;
var points4=116;
var points5=94;
var points6=163;
var points7=134;
var points8=97;
var points9=205;


var averageJohn=(89+120+103)/3
console.log(averageJohn);

var averageMark=(116+94+163)/3
console.log(averageMark);

var averageMary=(134+97+205)/3
console.log(averageMary);

if (averageJohn>averageMark && averageJohn>averageMary){
    console.log("John/'s team is averaging the most points.")
}

else if (averageMark>averageJohn && averageMark>averageMary){
    console.log("Mark/'s team is averaging the most points.")

}

else if (averageMary>averageMark && averageMary>averageJohn) {
    console.log("Mary/'s team is averaging the most points")
}


//functions
function calculateAge(birthYear) {
    return 2020-birthYear;
}

 var ageJohn=calculateAge(1990);
 var ageMike=calculateAge(1945);
 var ageJane=calculateAge(1969);
 console.log(ageJohn, ageJane, ageMike);


 function yearsuntilRetirement(birthYear, firstName) {
     var age= calculateAge(birthYear);
     var retirement= 65-age;

     if(retirement>0){
console.log(firstName + " retires in " + retirement + " years.")
 }
 else {
     console.log(firstName + " is already retired.")
 }

 }
 yearsuntilRetirement(1990, "John");
 yearsuntilRetirement(1945, "Mike");
 yearsuntilRetirement(1969, "Jane");


 //function statements and expressions

//function declaration
// function whatDoyoudo(job, firstName) {}

 //function expression
  var whatDoyoudo =function(job, firstName) {
    switch(job) {
        case "teacher":
            return firstName + " teaches kids how to code.";
        case "driver":
            return firstName + " drives a taxi."
        case "designer":
            return firstName + " designs some websites."
        default:
            return  firstName + " does something else.";


    }
  }

  console.log(whatDoyoudo("teacher", "John"));
  console.log(whatDoyoudo("designer", "Mary"));
  console.log(whatDoyoudo("driver", "Mike"));
  console.log(whatDoyoudo("retired", "Aphelios"));

  

  //arrays


  //creatine new array
var names=["John", "Mark", "Jane"];
var years= new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);


//mutate array data
names [1]= "Ben";
names [names.length]= "Mary";
console.log(names);


//different data types
var john= ["John" , "Smith" , 1990 , "designer" , false];
 
john.push("blue");
john.unshift("Mister")
console.log(john)


john.pop()//-removes the last element in the array
john.shift()//-removes the first element in the array
console.log(john)

console.log(john.indexOf(1990));//which positions does this element appear at

 var isDesigner=john.indexOf("designer") === -1? "John is not a designer.": "John is a designer.";

console.log(isDesigner);


//coding challenge3

function tipCalculator(bill) {
    var percentage;
    if (bill<50) {
        percentage=.2;
    }if (bill>=50 && bill<200) {
        percentage=.15;
    }if (bill>=200) {
        percentage=.1;
    }
    return percentage*bill;
        
}
var bills=[124, 48, 268]
 var tips= [(tipCalculator(bills[0])),
(tipCalculator(bills[1])),
(tipCalculator(bills[2]))];

console.log(tips);

var finalValues= [bills [0]+ tips [0],
                  bills [1]+ tips [1],
                  bills [2]+ tips [2]];
console.log(finalValues)

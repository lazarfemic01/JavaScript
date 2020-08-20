//hoisting

//functions

calculateAge(1965);
function calculateAge (year) {
    console.log(2020-year)
}

calculateAge(1990);




//ovako ne radi prije same var deklaracije

// retirement(1965);
// var retirement= function (year) {
//     console.log(65-(2020-year));
// }

//variables


console.log(age) //u console stoji undefined
var age=23
console.log(age)


function foo() {
    var age=65;
    console.log(age);
}

foo();
console.log(age)

//scope chain
var a ="Hello!";
first()

function first(){
    var b="Hi!";
    second();

    function second() {
        var c="Hey!";
        console.log(a+b+c)

    }
}




var a ="Hello!";
first()

function first(){
    var b="Hi!";
    second();

    function second() {
        var c="Hey!";
         third();
    }
}

function third() {
    var d="John";
    // console.log(c); c i b ne mogu
    console.log(a+d);
}

//this keyword


calculateAge(1986)
function Calculateage(year) {
    console.log(2020-year);
    console.log(this);
}

var john= {
    name:"John",
    yearOfBirth:1990,
    calculateAge: function() {
        console.log(this);
        console.log(2020-this.yearOfBirth);

        // function innerFunction() {
        //     console.log(this);
        // }
        // innerFunction();
    }
}

john.calculateAge();

var mike= {
    name:"Mike",
    yearOfBirth:1984
};

mike.calculateAge=john.calculateAge;
mike.calculateAge();
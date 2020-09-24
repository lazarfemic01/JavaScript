// function constructor
var john ={
    name:"John",
    yearOfbirth:1990,
    job:"teahcer",
};

var Person= function(name,yearOfbirth,job) {
    this.name=name;
    this.yearOfbirth=yearOfbirth;
    this.job=job;
}
Person.prototype.calculateAge=function (){
    console.log(2020-this.yearOfbirth);
}

Person.prototype.lastName="Smith";


var john = new Person("John", 1990, "teacher");
john.calculateAge();
console.log(john.lastName);

var jane = new Person ("Jane", 1969, "designer");
jane.calculateAge();
console.log(jane.lastName);

var mark= new Person("Mark", 1948,"retired");
mark.calculateAge();
console.log(mark.lastName);

//object.create
var personProto = {
    calculateAge: function () {
        console.log(2020-this.yearOfbirth);
    }
}

var john = Object.create(personProto)
 john.name="John";
 john.yearOfbirth=1990;
 john.job="teacher";

 var jane= Object.create(personProto, 

 {name: {value:"Jane"}, 
 yearOfbirth: {value:1969}, 
 job: {value:"teacher"}});



 //primitives vs objects


 //primitives
 var a=11;
 var b=a;
 a=14;
 console.log(a,b);

//objects
 var obj1= {
     name:"John",
     age:26
 }

 var obj2=obj1;

 obj1.age=30;
 console.log(obj1.age);
 console.log(obj2.age);

 //functions
 var age=27;
 var obj= {
     name:"Lazar",
     city:"Podgorica"
 };

 function change (a,b) {
     a=30
     b.city="San Fransisco"
 }

 change (age, obj);
 console.log(age)
 console.log(obj.city)

 //passing functions as arguments
   var years = [1990, 1965, 2006, 1998, 1943];
   function arrayCalc(arr, fn ) {
       var arrRes=[];
       for (var i=0; i<arr.length; i++)
       {
           arrRes.push(fn(arr[i]));
       }
       return arrRes;
   }


   function calculateAge(el){
       return 2020-el;
   }

   function isFullage(el) {
       return el>=18;
   }
   
   function maxHeartrate(el) {

    if (el>=18 && el<=81){
       return Math.round(206.9-(0.67*el));
   }
   else {
       return -1
   }
   }

   var ages=arrayCalc(years, calculateAge);
   console.log(ages);

   var fullAges=arrayCalc(ages, isFullage);
   console.log(fullAges);

   var rates=arrayCalc(ages, maxHeartrate);
   console.log(rates);


   //functions returning functions

   function interviewQuestion(job) {
   if(job==="designer") {
       return function(name) {
          console.log(name + ", can You please what UX design is?");
       }
   } else if(job==="teacher") {
       return function(name) {
           console.log("What subject do you teach, " + name + " ?");
       }
   } else{
    return function(name) {
        console.log("Hello " + name + ", what do you do?");
    }
   } 
   }

   var teacherQuestion=interviewQuestion("teacher");
   var designerQuestion=interviewQuestion("designer")
   teacherQuestion("John");
   designerQuestion("John");
   

   interviewQuestion("teacher") ("Mark");


   //iife
//    function game() {
//       var score= Math.random()*10;
//       console.log(score>=5)
//    }
//    game();

(function () {
    var score= Math.random()*10;
      console.log(score>=5);
})();


(function (goodLuck) {
    var score= Math.random()*10;
      console.log(score>=5-goodLuck);
})(5);


//closures
function retirement (retirementAge) {
    var a=" years left until retirement."
    return function(yearOfbirth){
        var age=2020-yearOfbirth;
        console.log((retirementAge-age) +a);
    }
}

var retirementUS=retirement(66);

var retirementGermany=retirement(65);

var retirementIceland=retirement(67);


retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);



function interviewQuestion(job) {
    return function(name){
        if(job==="designer") {
            
                console.log(name + ", can You please what UX design is?");
        }else if(job==="teacher") {
                console.log("What subject do you teach, " + name + " ?");
            
            }else {
                console.log("Hello " + name + ", what do you do?");
        }
    } 
   
}
interviewQuestion("teacher")("John");


//bind, call and apply

var john= {
    name:"John",
    age:22,
    job:"teacher",
    presentation: function(style, timeofDay) {
        if(style==="formal") {
            console.log("Good " + timeofDay + " ladies and gentlemen! I\ m'"+ this.name + ", I\ m'" + this.job + " and I am " + this.age + " years old. Have a nice " + timeofDay );
        }if(style==="friendly") {
            console.log("Hey! What\'s up? I\ m' "+ this.name + " I\ m'" + this.job + " and I am " + this.age + " years old. Have a nice " + timeofDay );
        }
    }
}

john.presentation("formal", "morning")

var emily = {
    name:"Emily",
    job:"designer",
    age:35
};

john.presentation.call(emily, "friendly", "afternoon");

// john.presentation.apply(emily,["friendly", "day"])

var johnFriendly= john.presentation.bind(john, "friendly",);

johnFriendly("morning");
johnFriendly("afternoon");


var emilyFormal=john.presentation.bind(emily, "formal");
emilyFormal("afternoon")





var years = [1990, 1965, 2002, 1998, 1943];
   function arrayCalc(arr, fn ) {
       var arrRes=[];
       for (var i=0; i<arr.length; i++)
       {
           arrRes.push(fn(arr[i]));
       }
       return arrRes;
   }


   function calculateAge(el){
       return 2020-el;
   }

   function isFullage(limit, el) {
       return el>=limit;
   }
   var ages=arrayCalc(years,calculateAge);
   var fullJapan= arrayCalc(ages, isFullage.bind(this, 20))
   console.log(ages)
   console.log(fullJapan);


   //coding challenge 7

   (function() {
    function Question(question, answers, correct) {
        this.question=question;
        this.answers=answers;
        this.correct=correct;
    }
    Question.prototype.displayQuestion= function(){
        console.log(this.question);
 
        for (var i=0; i<this.answers.length; i++) {
            console.log(i+ ":" + this.answers[i]);
        }
    }
 
    Question.prototype.checkAnswer=function(ans, callback) {
        var sc;
        if(ans===this.correct) {
            console.log("Correct answer!");
            sc=callback(true);
            
            }else {
             console.log("Wrong answer. Try again!");
             sc=callback(false);
        }
        this.displayScore(sc);
    }

    Question.prototype.displayScore=function(score){
        console.log("Your current score is: " + score);
        console.log("----------------------------------");
    }
 
    var q1= new Question ("Is Java Script the coolest programming language in the world?",
                         ["Yes", "No"],
                           0);
    var q2= new Question ("What is the name of this course\'s teacher?" , ["John", "Michael", "Jonas"]
                         ,
                         2);
    var q3= new Question ("What does best describe coding" , ["Boring", "Hard", "Fun", "Tedious"]
                         ,
                         2);
 
    
    var questions=[q1, q2, q3];
    

    function score() {
         var sc=0;
         return function (correct) {
             if(correct) {
                 sc++;
             }
           return sc;
         }

    }
      
    var keepScore=score();
    

    function nextQuestion () {
        
        var n= Math.floor(Math.random() *questions.length);
        questions [n].displayQuestion();
         var answer= prompt("Please select the correct answer.");
         
    
    if(answer!=="exit") {
        questions [n].checkAnswer(parseInt(answer), keepScore);
       nextQuestion();
    }
      } 
   
   
   nextQuestion();
})();
   
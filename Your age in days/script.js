
function ageinDays (){
    var birthYear=prompt("What year were You born ?");
    var ageinDayss=(2020-birthYear)*365;
    var h1=document.createElement("h1");
    var textAnswer=document.createTextNode("You are " + ageinDayss +  " days old.");
    h1.setAttribute("id", "ageinDays");
    h1.appendChild(textAnswer)
    document.getElementById("flex-box-result").appendChild(h1);
}

function reset () {
    document.getElementById("ageinDays").remove();
}


function generateCat () {
    var image=document.createElement("img");
    var div= document.getElementById("flex-cat-gen");
    image.src="https://www.greenpet.com.au/wp-content/uploads/2016/07/Cat-Food-Treats-300x300.jpg";
    div.appendChild(image);
}


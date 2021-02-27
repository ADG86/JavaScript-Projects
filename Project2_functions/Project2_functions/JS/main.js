window.alert("This is an alert!"); //Basic alert window

document.write("I am writing something."); //Basic way to write in JavaScript

document.write("<br>"); //How to page break in JavaScript

document.write("\"I am writing a quote " //Notice the "\" to make sure there is no confusion for quote marks
+ "that is to be concatenating," 
+ " because I didn\'t know how to before.\"") //Concatenating

document.write("<br>");

var Family = "The Geislers", Dad = "Doug", Mom = "Kathy", //This assigns variables
Daughter = "Mary", Son = "Duncan"; //With string values

var Family = Family.fontcolor("blue"); //Adding some color to my variables...
var Dad = Dad.fontcolor("yellow");
var Mom = Mom.fontcolor("green");
var Daughter = Daughter.fontcolor("red");
var Son = Son.fontcolor("orange");

document.write(Family //Also a little concatenating
+ Son);

document.write("<br>");

document.write(3 / (3 + 3)); //An expression with more complex math

document.write("<br>");

function date() { 
    document.getElementById('demo').innerHTML = Date();
}

function myFunction() { //Similiar functions need to point to a specific id or they will override them
    var str = "I am learning";
    str += " a lot from this book!";

    var result = str.fontcolor("blue");

    document.getElementById("Concatenate").innerHTML = result;
}

function myFunction1() { //the function name calls the executable function
    var sentence = "I am learning";
    sentence += " a lot from this course!";
    document.getElementById("Concatenate1").innerHTML = sentence; //the id name puts the function where we want it
}

document.write("<br>")

document.write("hello world");


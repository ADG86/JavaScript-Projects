function myFunction(p1, p2) {
   return p1 * p2;
}
  document.getElementById("demo").innerHTML = myFunction(4, 6);


function myFunction1() {
    document.getElementById("demo1").innerHTML = "Hello World";
}

function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math_addition").innerHTML = "2 + 2 = " + addition; //Basic addition function
}

function subtraction_Function() {
    var subtraction = 5 - 2;
    document.getElementById("Math_subtraction").innerHTML = "5 - 2 = " + subtraction; //Basic subtraction function
}

function multiply_Function() {
    var multiply = 5 * 2;
    document.getElementById("Math_multiply").innerHTML = "5 x 2 = " + multiply; //Basic multiplication function
}

function division_Function() {
    var division = 5 / 2;
    document.getElementById("Math_division").innerHTML = "5 / 2 = " + division; //Basic division function
}

function more_Math() {
    var simple_Math = (1+2) * 10 / 2 - 5;
    document.getElementById("equation_Math").innerHTML = "1 plus 2, multiplied by 10, "
    + "divided in half and then subtracted by 5 = " + simple_Math; //more complicated math function + some cancatating
}

function modulus_Operator() {
    var remainder_Math = 25 % 6;
    document.getElementById("remainder_Math").innerHTML = "When you divide 25 by 6 you have a "
    + "remainder of: " + remainder_Math; //basic division function that leaves a remainder
}

function negation_Operator() {
    var x = 10;
    document.getElementById("negative_Math").innerHTML = -x; //this just turns the variable negative
}
    
function increase_Math() {   
    var x = 5;
    x++;
    document.getElementById("increment_Math").innerHTML = x; //increases the variable by 1
}

function decrease_Math() {   
    var y = 5;
    y--;
    document.getElementById("decrement_Math").innerHTML = y; //decreases the variable by 1
}

window.alert(Math.random()); //Basic alert function that produces a random number btween 0-1

window.alert(Math.random() * 100); //Basic alert function that produces random number between a set window


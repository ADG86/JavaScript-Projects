var text = ""; 
var X;
for (X = 0; X < 20; X++) { //this function is going to repeat until the variable equals our determined break number. eg 11
    if (X === 11) { break; }
    text += "The number is " + X + "<br>"
}
document.getElementById("break").innerHTML = text;

var text = ""; 
var Y;
for (Y = 0; Y < 10; Y++) { //this function is going to continue the loop after our variable equals our constraint.
    if (Y === 1) { continue; }
    text += "The number is " + Y + "<br>"
}
document.getElementById("continue").innerHTML = text;
var X = 10; //this is an example of a global variable accessible by all functions below
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

document.write("<br>")

function Add_numbers_a() { //this is a local variable because it is contained within the function parameters and is only accessible by this function
    var Y = 10; 
    console.log(20 + Y + "<br>"); 
}
function Add_numbers_b() {
    console.log(Y + 100); //using console.log to examine in developer tools without creating an error for the rest of the funcitons
}
Add_numbers_a();
Add_numbers_b();

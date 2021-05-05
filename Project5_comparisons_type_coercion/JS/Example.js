function my_Function_1() {
    document.getElementById("Test").innerHTML = 0/0; //This will return "NaN" which is short for "Not a Number"

}

function my_Function_2() {
    document.getElementById("Test2").innerHTML = isNaN("This is a string"); //This will return "true" because the string is Not a Number (NaN)

}

function my_Function_3() {
    document.getElementById("Test3").innerHTML = isNaN("007"); //This will return "false" because 007 is a number

}

document.write("~~writing infinity~~");

document.write("<br>");

document.write(2E310); //How to get a number "infinity"

document.write("<br>");

document.write(-3E310); //How to get a number "-infinity"

document.write("<br>");

document.write("~~Boolean true/false~~");

document.write("<br>");

document.write(10<20); //Using Boolean logic, this will return a true/false value, in this case 10 is less than 20 will return "true"

document.write("<br>");

document.write(10<2); //Boolean logic that will return false be 10 is not less than 2

console.log(2 + 2); //This creates an output visible in the console developer tools

console.log(10<2);

document.write("<br>");

document.write("~~compairing data~~");

document.write("<br>");

document.write("10 = 10 is " + (10 == 10)); //An example of compairing two datum to see if they are equal, will return true/false

document.write("<br>");

document.write("10 = 20 is " + (10 == 20)); //Also using coercion for display clarity of what im doing

document.write("<br>");

document.write("~~compairing data value & types~~");

document.write("<br>");

A = 10;
B = 10;
document.write("A = B is " + (A === B)); //A & B are both number data types so this returns as true

document.write("<br>");

C = 11;
D = "11";
document.write("C = D is " + (C === D)); //C is a number, while D is a string, this will return false even though they are both 11

document.write("<br>");

E = 20;
F = "thirty";
document.write("E = F is " + (E ===F)); //E & F are different data and different value, will return false

document.write("<br>");

G = "April";
H = "November"
document.write("G = H is " + (G === H)); //G & H are the same data type but different value, will return false

document.write("<br>");

document.write("~~Boolean logical operators - AND(&&)/OR(||)/NOT(!)");

document.write("<br>");

document.write("5 > 2 && 10 > 4 is " + (5 > 2 && 10 > 4)); //example of an AND operator returning true

document.write("<br>"); //With the AND operator both sides must be true, to return true

document.write("5 > 2 && 10 < 4 is " + (5 > 2 && 10 < 4)); //example of an AND operator returning false

document.write("<br>");

document.write("11 > 22 || 100 > 99 is " + (11 > 22 || 100 > 99)); //example of a || operator returning true

document.write("<br>"); //with the ||(or) operator either side can be true but only one OR the other to return true

document.write("5 > 2 || 10 > 4 is " + (11 > 22 || 100 < 99)); //example of a || operator returning false

function not_Function() { //"Not" operators determine if something is false
    document.getElementById("Not").innerHTML = !(20 > 10);

}

function notnot_Function() { //to get a return of "true" a double negative must be used with "Not" operators
    document.getElementById("NotNot").innerHTML = !(5 > 10);

}








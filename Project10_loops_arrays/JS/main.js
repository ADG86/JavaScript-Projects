function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) { //this creates the condition that "while" our variable is less than 11 it will continue executing the function
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

function string_length() {
    var str = "How many in this string?"
    var Y = str.length;
    document.getElementById("String_Length").innerHTML = Y;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Z;
function for_Loop() { //this "for" loop will list each index in our array given its set constraints
    for (Z = 0; Z < Instruments.length; Z++) {
        Content += Instruments[Z] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function rainbow_color() {
    var Rainbow_Color = [];
    Rainbow_Color[0] = "Red";
    Rainbow_Color[1] = "Orange";
    Rainbow_Color[2] = "Yellow";
    Rainbow_Color[3] = "Green";
    Rainbow_Color[4] = "Blue";
    Rainbow_Color[5] = "Indigo";
    Rainbow_Color[6] = "Violet";
    document.getElementById("Rainbow").innerHTML = "The ''B'' in ''ROY G BIV'' stands for " + Rainbow_Color[4] + ".";
}
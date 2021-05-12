function full_Sentence() { //example of concatenate with string data types
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method(){ //This is an example of selecting specific parts of the data string
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function Uppercase_Function() {
    var str = "This should be all uppercase!";
    var res = str.toUpperCase();
    document.getElementById("UpperCase").innerHTML = res;
}

function Search_Function() {
    var str = "These aren't the droids you're looking for."; // this will search for the position number of the parameter in the data string
    var n = str.search("droids");
    document.getElementById("Search").innerHTML = n;
}

function string_Method() { //used to insert data into a string that might otherwise not work or create an error
    var X =182;
    document.getElementById("String").innerHTML = X.toString();
}

function precision_Method() { //used to make a number more precise to a specifide amount of integers
    var X =12345.67891345;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function fixed_Method() { //used to round a number to a specific parameter
    var Z =11.031986;
    var bday = Z.toFixed(2);
    document.getElementById("Fixed").innerHTML = bday;
}

function valueOf_Method() { //used to round a number to a specific parameter
    var Y =11.031986;
    var longbday = Y.valueOf();
    document.getElementById("valueOf").innerHTML = longbday;
}
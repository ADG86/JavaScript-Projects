function Day_Function() { //This Function will take an input from the HTML input field and use it to generate the corresponding output
    var Day_Output;
    var Days = document.getElementById("Day_Input").value;
    var Day_String = " is a great day!";
    //The switch expression is evaluated once.
    //The Value of the expression is compared with the values of each case.
    //If there is a match, the associated block of code is executed.
    //If there is no match, the default code block is executed.
    switch(Days) {
        case "Monday":
            Day_Output = "Monday" + Day_String;
        break;
        case "Tuesday":
            Day_Output = "Tuesday" + Day_String;
        break;
        case "Wednesday":
            Day_Output = "Wednesday" + Day_String;
        break;
        case "Thursday":
            Day_Output = "Thursday" + Day_String;
        break;
        case "Friday":
            Day_Output = "Friday" + Day_String;
        break;
        case "Saturday":
            Day_Output = "Saturday" + Day_String;
        break;
        case "Sunday":
            Day_Output = "Sunday" + Day_String;
        break;
        default:
            Day_Output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Day_Output;
}


function Hello_World_Function() { //Using the "getElementByClassName" method we can target a specific index of the class, this case the 1st(0)
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

var c = document.getElementById("Color_Canvas");
var ctx = c.getContext("2d");
// create gradient
var grd = ctx.createLinearGradient(0,0,200,0);
grd.addColorStop(0,"blue");
grd.addColorStop(1,"white");
// fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);

var c = document.getElementById("Text_Canvas");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.strokeText("Hello World",10,50);
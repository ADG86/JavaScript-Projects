function constant_function()  {
    const New_Car = {type:"SUV", make: "Subaru", color: "Blue"};
    New_Car.color = "Black";
    New_Car.price = "$25,000";
    document.getElementById("Constant").innerHTML = "The cost of the " + New_Car.color + " " + New_Car.type + " is " + New_Car.price;
}

var X = "Happy";
document.write(X);
{
    let X = "Sad";
    document.write("<br>" + X);
}
document.write("<br>" + X);

var RF = return_function(7, 7);

function return_function(a, b) {
    return a * b;
}
document.getElementById("Return_Function").innerHTML = RF;
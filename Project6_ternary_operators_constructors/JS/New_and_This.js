function Vehicle(Make, Model, Year, Color) { //"Vehicle" is the constructor that will create a class to define all the elements of the variables
    this.Vehicle_Make = Make; // these are the definitions of the elements so we dont have to create a new function for each person (Jack, Emily, Erik)
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year,
    this.Vehicle_Color = Color;

}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("New_and_This").innerHTML = 
    "Eric drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;

}
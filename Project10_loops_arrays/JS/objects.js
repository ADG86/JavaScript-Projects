let car = { //This is defining the "car" variable attributes labeled and the "description" is the function when called by attribute id
    make: "Subaru ",
    model: "Forester ",
    year: "2015 ",
    color: "Blue ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();
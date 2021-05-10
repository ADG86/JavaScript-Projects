function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"; //This is where it will determine if the parameters are met and will submit either output depending on the input in the HTML
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Age() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}
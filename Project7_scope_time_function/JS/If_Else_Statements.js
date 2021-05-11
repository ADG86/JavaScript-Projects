function get_Date() { //This function is checking to see if the local time is before 6pm, "IF" it is, it will display "how are you today"
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

document.write("<br>")

if (1 < 2) {
    document.write("The number on the left is less than the number on the right");
}

document.write("<br>")

if (11 == 11) {
    document.write("The number is 11");
}

document.write("<br>")

function Age_Function() { // If/Else statements are important to varify conditions of the function
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enought to Vote";
    }
    else {
        Vote = "You are not old enough to Vote";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;

}

function Cake_Function() {
    Cake = document.getElementById("Cake").value;
    if (Cake <= 1) {
        opinion = "You can have some cake!";
    }
    else {
        opinion = "You do not get cake!";
    }
    document.getElementById("Do_you_like_cake?").innerHTML = opinion;
    
}

function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time";
    }
    else if (Time >= 12 == Time < 18) { //The use of else/if statements is to ensure that multiple instructions are followed
        Reply = "It is afternoon";
    }
    else {
        Reply = "It is evening time."
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
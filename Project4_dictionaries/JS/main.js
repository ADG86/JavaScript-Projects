function my_Dictionary() { //This is my first KVP dictionary
    var PTFC = {
        Valeri:"Eight", //For Value types created "" is necessary 
        Blanco:10, //For value type "number", "" are not necessary
        D_Chara:21,
        Y_Chara:23,
        Mora:9
    };
    delete PTFC.Valeri; //This will delete Key of the KVP
    document.getElementById("Dictionary").innerHTML = PTFC.Valeri; //This function retrieves the Value in the KVP

}
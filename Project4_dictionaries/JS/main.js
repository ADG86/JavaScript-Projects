function my_Dictionary() {
    var PTFC = {
        Valeri:8,
        Blanco:10,
        D_Chara:21,
        Y_Chara:23,
        Mora:9
    };
    delete PTFC.Valeri;
    document.getElementById("Dictionary").innerHTML = PTFC.Valeri;

}
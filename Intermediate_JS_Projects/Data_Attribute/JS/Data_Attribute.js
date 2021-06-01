function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert("A " + characterType + " is in the taxonomic " + character.innerHTML + " Class");
}
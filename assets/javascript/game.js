var characters = {
    dnc: {
        class : "dancer",
        att : 20,
        hp : 20,
        src : "assets/img/sprites/dancer.png"
    },
    brd: {
        class : "bard",
        att : 25,
        hp : 15,
    },
    mch: {
        class : "machinist",
        att : 15,
        hp : 25,
    },
};
Object.keys(characters).forEach(function(key){
    console.log(key, characters[key]);
    var imageCharacter = $("<img>");
    imageCharacter.addClass("character-image col-md-4");
    imageCharacter.attr("value", Object.keys(characters));
    imageCharacter.attr("src", "http://placehold.it/300x300");
    $("#characters").append(imageCharacter);
});
var charChosen = false;
var chosenClass = [];
var characters = [
    {
        class : "Dancer",
        att : 20,
        hp : 20,
        src : "assets/img/dnc.png",
        val : "dnc",
    },
    {
        class : "Bard",
        att : 25,
        hp : 15,
        src: "assets/img/brd.png",
        val : "brd",
    },
    {
        class : "Machinist",
        att : 15,
        hp : 25,
        src : "assets/img/mch.png",
        val : "mch",
    },
];
var enemies = [
    {
        name : "Goblin",
        hp : 20,
        counter : 10,
        src : "assets/img/goblin.png",
        val : "gbln",
    },
    {
        name : "Harpy",
        hp : 10,
        counter : 20,
        src : "assets/img/harpy.png",
        val : "hrpy",
    }

];
var charSheetDiv = $("<div>")
var charDiv = $("<div>");
var charClassDiv = $("<div>");
var charHPDiv = $("<div>");
var charAttDiv = $("<div>");

charSheetDiv.attr('id', "charSheet");
$(".container").append(charSheetDiv);

charDiv.attr('id', "characters");
charDiv.addClass("row");
$("#charSheet").append(charDiv);

charClassDiv.attr('id', "characterClass");
charClassDiv.addClass("row");
$("#charSheet").append(charClassDiv);

charHPDiv.attr('id', "characterHP");
charHPDiv.addClass("row");
$("#charSheet").append(charHPDiv);

charAttDiv.attr('id', "characterAtt");
charAttDiv.addClass("row");
$("#charSheet").append(charAttDiv);
if(charChosen === false)
{
    characters.forEach(function(character){
        var source = characters.map(a => a.src);
        var val = characters.map(a => a.val);
        var att = characters.map(a => a.att);
        var hp = characters.map(a => a.hp);
        var character = characters.map(a => a.class);
        var imageCharacter = $("<img>");
        imageCharacter.addClass("character-image col-md-4");
        $("#characters").append(imageCharacter);
        $('#characters').find("img").each(function(index){
            $(this).attr("value", val[index]);
        });
        $("#characters").find("img").each(function(index){
            $(this).attr("src", source[index]);
        });
        var charClass = $("<p>");
        charClass.addClass("character-val col-md-4 text-center");
        $("#characterClass").append(charClass);
        $("#characterClass").find('p').each(function(index){
            $(this).text(character[index]);
            console.log(character[index]);
            console.log(this);
        });
        var charHP = $("<p>");
        charHP.addClass("character-HP col-md-4 text-center");
        $("#characterHP").append(charHP);
        $("#characterHP").find("p").each(function(index){
            $(this).text("HP : " + hp[index]);
        });
        var charAtt = $("<p>");
        charAtt.addClass("character-Att col-md-4 text-center");
        $("#characterAtt").append(charAtt);
        $("#characterAtt").find("p").each(function(index){
            $(this).text("Att : " + att[index]);
        });
    });
    $('.character-image').on("click", function(){
        console.log($(this).attr("value"));
        chosenClass.push($(this).attr("value"));
        charChosen = true;
        $("#charSheet").remove();
        $(".jumbotron").remove();
        console.log(charChosen);

    });
};
$('.character-image').on("click", function(){
    var gameSpaceDiv = $("<div>");
    gameSpaceDiv.attr('id', "gameSpace");
    // gameSpaceDiv.addClass("row");
    $(".container").append(gameSpaceDiv);
    var playerDiv = $("<div>");
    playerDiv.attr('id', "playerDiv");
    playerDiv.addClass("row");
    $("#gameSpace").append(playerDiv);
    var imageCharacter = $("<img>");
    imageCharacter.addClass("col-md-4");
    imageCharacter.attr("id", "player");
    var returnSrc = characters.filter(obj => obj.val == chosenClass ).map(obj => obj.src);
    var returnHP = characters.filter(obj => obj.val == chosenClass ).map(obj => obj.hp);
    // var returnAtt = characters.filter(obj => obj.val == chosenClass ).map(obj => obj.att);
    imageCharacter.attr("src", returnSrc);
    $("#playerDiv").append($('<div>',{ "class" : "col-md-4"}));
    $("#playerDiv").append(imageCharacter);
    $("#playerDiv").append($('<div>',{ "class" : "col-md-4"}));
    $("#gameSpace").append($('<div>',{ "class" : "row", "id" : "playerInfo"}));
    var playerHpOnScreen = $("<p>");
    playerHpOnScreen.attr("id", "playerHpElement");
    playerHpOnScreen.addClass("text-center col-md-4");
    playerHpOnScreen.text("HP : " + returnHP);
    $("#playerInfo").append($('<div>',{ "class" : "col-md-4"}));
    $("#playerInfo").append(playerHpOnScreen);
    $("#playerInfo").append($('<div>',{ "class" : "col-md-4"}));
    // enemies.forEach(function(enemy){
    //     var source = enemies.map(a => a.src);
    //     var val = enemies.map(a => a.val);
    //     var att = enemies.map(a => a.att);
    //     var hp = enemies.map(a => a.hp);
    //     var enemy = enemies.map(a => a.class);
    //     var imageEnemy = $("<img>");
    //     imageEnemy.addClass("enemy-image col-md-4");
    //     $("#gameSpace").append(imageEnemy);
    //     $("#gameSpace").find("img").each(function(index){
    //         $(this).attr("value", val[index]);
    //     });
    //     $("#gameSpace").find("img").each(function(index){
    //         $(this).attr("src", source[index]);
    //     });
    //     var enemyName = $("<p>");
    //     enemyName.addClass("enemy-val col-md-4 text-center");
    //     $("#gameSpace").append(enemyName);
    //     $("#gameSpace").find('p').each(function(index){
    //         $(this).text(enemy[index]);
    //     });
    // });
})
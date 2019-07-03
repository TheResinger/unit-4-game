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
$(".container").append($("<div>", {"id" : "charSheet"}));
$("#charSheet").append($("<div>", {"id" : "characters", "class" : "row"}));
$("#charSheet").append($("<div>", {"id" : "characterClass", "class" : "row"}));
$("#charSheet").append($("<div>", {"id" : "characterHP", "class" : "row"}));
$("#charSheet").append($("<div>", {"id" : "characterAtt", "class" : "row"}));
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
        $("#characters").append($("<img>", {"class" : "character-image col-md-4"}));
        $('#characters').find("img").each(function(index){
            $(this).attr("value", val[index]);
        });
        $("#characters").find("img").each(function(index){
            $(this).attr("src", source[index]);
        });
        $("#characterClass").append($("<p>", {"class" : "character-val col-md-4 text-center"}));
        $("#characterClass").find('p').each(function(index){
            $(this).text(character[index]);
        });
        $("#characterHP").append($("<p>", {"class" : "character-HP col-md-4 text-center"}));
        $("#characterHP").find("p").each(function(index){
            $(this).text("HP : " + hp[index]);
        });
        $("#characterAtt").append($("<p>", {"class" : "character-Att col-md-4 text-center"}));
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
   
//    Generate Game Space Div to nest everything in
    $(".container").append($('<div>',{ "id" : "gameSpace"}));

//Create Div for chosen player sprite to reside 
    $("#gameSpace").append($('<div>',{ "class" : "row", "id" : "playerDiv"}));

//Grabs the chosen classes image source, and hp and assigns it into a div sorted with bootstrap grid
    var returnSrc = characters.filter(obj => obj.val == chosenClass ).map(obj => obj.src);
    var returnHP = characters.filter(obj => obj.val == chosenClass ).map(obj => obj.hp);
    $("#playerDiv").append($('<div>',{ "class" : "col-md-4"}));  //Blank Div for padding
    $("#playerDiv").append($('<img>',{ "class" : "col-md-4","id" : "player", "src" : returnSrc})); //Characcter image
    $("#playerDiv").append($('<div>',{ "class" : "col-md-4"})); //Blank Div for padding

//Creates a new div to hold the players hp.
    $("#gameSpace").append($('<div>',{ "class" : "row", "id" : "playerInfo"}));
    $("#playerInfo").append($('<div>',{ "class" : "col-md-4 blank", }));
    $("#playerInfo").append($("<p>", { "id" : "playerHpElement", "class" : "text-center col-md-4", "text" : "HP : " + returnHP}));
    $("#playerInfo").append($('<div>',{ "class" : "col-md-4 blank"}));

// Create a blank div to be used for the combat log
    $("#gameSpace").append($("<div>", { "class" : "row", "id" : "combatLog"}));
// Assign something to combatLog div to display it
    $("#combatLog").append($("<p>", { "class" : "col-md-12 text-center", "id" : "playerText", "text" : "Please Select"}));
    $("#combatLog").append($("<p>", { "class" : "col-md-12 text-center", "id" : "enemyText", "text" : "an Enemy to Begin"}));

// Create div that starts blank for the mobs HP to be displayed
    $("#gameSpace").append($("<div>", { "class" : "row", "id" : "enemyHealth"}));


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
var charChosen = false;
var enemyChosen = false;
var chosenClass = [];
var chosenEnemy = [];
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
        att : 100,
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
        hp : 1000,
        counter : 10,
        src : "assets/img/goblin.png",
        val : "gbln",
    },
    {
        name : "Harpy",
        hp : 3500,
        counter : 20,
        src : "assets/img/harpy.png",
        val : "hrpy",
    },
    {
        name : "Bahamut",
        hp : 5500,
        counter : 200,
        src : "assets/img/bahamut.png",
        val : "bhmt",
    },
];

$(".container").append($("<div>", {"id" : "charSheet"}));
$("#charSheet").append($("<div>", {"id" : "characters", "class" : "row"}));
$("#charSheet").append($("<div>", {"id" : "characterClass", "class" : "row"}));
$("#charSheet").append($("<div>", {"id" : "characterHP", "class" : "row"}));
$("#charSheet").append($("<div>", {"id" : "characterAtt", "class" : "row"}));
characters.forEach(function(){
    var charSource = characters.map(a => a.src);
    var charVal = characters.map(a => a.val);
    var charAtt = characters.map(a => a.att);
    var charHp = characters.map(a => a.hp);
    var charClass = characters.map(a => a.class);
    $("#characters").append($("<img>", {"class" : "character-image col-md-4"}));
    $('#characters').find("img").each(function(index){
        $(this).attr("value", charVal[index]);
    });
    $("#characters").find("img").each(function(index){
        $(this).attr("src", charSource[index]);
    });
    $("#characterClass").append($("<p>", {"class" : "character-val col-md-4 text-center"}));
    $("#characterClass").find('p').each(function(index){
        $(this).text(charClass[index]);
    });
    $("#characterHP").append($("<p>", {"class" : "character-HP col-md-4 text-center"}));
    $("#characterHP").find("p").each(function(index){
        $(this).text("HP : " + charHp[index]);
    });
    $("#characterAtt").append($("<p>", {"class" : "character-Att col-md-4 text-center"}));
    $("#characterAtt").find("p").each(function(index){
        $(this).text("Att : " + charAtt[index]);
    });
});


$(document).on("click", '.character-image', function(){
    console.log($(this).attr("value"));
    chosenClass.push($(this).attr("value"));
    charChosen = true;
    $("#charSheet").remove();
    $(".jumbotron").remove();
    // Generate Game Space Div to nest everything in
    $(".container").append($('<div>',{ "id" : "gameSpace"}));

    // Create Div for chosen player sprite to reside 
    $("#gameSpace").append($('<div>',{ "class" : "row", "id" : "playerDiv"}));

    // Grabs the chosen classes image source, and hp and assigns it into a div sorted with bootstrap grid
    var returnSrc = characters.filter(obj => obj.val == chosenClass ).map(obj => obj.src);
    var returnHP = characters.filter(obj => obj.val == chosenClass ).map(obj => obj.hp);
    $("#playerDiv").append($('<div>',{ "class" : "col-md-4"}));  //Blank Div for padding
    $("#playerDiv").append($('<img>',{ "class" : "col-md-4","id" : "player", "src" : returnSrc})); //Characcter image
    $("#playerDiv").append($('<div>',{ "class" : "col-md-4"})); //Blank Div for padding

    // Creates a new div to hold the players hp.
    $("#gameSpace").append($('<div>',{ "class" : "row", "id" : "playerInfo"}));
    $("#playerInfo").append($('<div>',{ "class" : "col-md-4 blank", }));
    $("#playerInfo").append($("<p>", { "id" : "playerHpElement", "class" : "text-center col-md-4", "text" : "HP : " + returnHP}));
    $("#playerInfo").append($('<div>',{ "class" : "col-md-4 blank"}));

    // Create a blank div to be used for the combat log
    $("#gameSpace").append($("<div>", { "class" : "row", "id" : "combatLog"}));
    // Assign something to combatLog div to display it
    $("#combatLog").append($("<p>", { "class" : "col-md-12 text-center", "id" : "playerText", "text" : "Please Select an Enemy"}));
    $("#combatLog").append($("<p>", { "class" : "col-md-12 text-center", "id" : "enemyText", "text" : "to Begin"}));
    // Create Div for Enemy Names
    $("#gameSpace").append($("<div>", { "class" : "row", "id" : "enemyNames"}));
    // Create Div for enemy images
    $("#gameSpace").append($("<div>", { "class" : "row", "id" : "enemiesContainer"}));
    // Create div that starts blank for the mobs HP to be displayed
    $("#gameSpace").append($("<div>", { "class" : "row", "id" : "enemyHealth"})); 
    enemies.forEach(function(){
        var enemySrc = enemies.map(a => a.src);
        var enemyVal = enemies.map(a => a.val);
        var enemyAtt = enemies.map(a => a.att);
        var enemyHp = enemies.map(a => a.hp);
        var enemy = enemies.map(a => a.name);
        $("#enemiesContainer").append($('<img>',{ "class" : "col-md-4 enemy"}));
        $("#enemiesContainer").find("img").each(function(index){
            $(this).attr("value", enemyVal[index]);
        });
        $("#enemiesContainer").find("img").each(function(index){
            $(this).attr("src", enemySrc[index]);
            console.log(enemySrc[index]);
        });
        $("#enemyHealth").append($('<p>', { "class" : "text-center col-md-4"}));
        $("#enemyHealth").find("p").each(function(index){
            $(this).text("HP : " + enemyHp[index]);
        });
        $("#enemyNames").append($('<p>', { "class" : "text-center col-md-4"}));
        $("#enemyNames").find("p").each(function(index){
            $(this).text(enemy[index]);
        });
    }); 
});
$(document).one("click", ".enemy", function(){
    enemyChosen = true;
    console.log($(this).attr("value"));
    chosenEnemy.push($(this).attr("value"));
    console.log(chosenEnemy);
    if(enemyChosen == true)
    {
        // Delete Visual Elements for enemy selection
        $("#enemyNames").remove();
        $("#enemiesContainer").remove();
        $("#enemyHealth").remove();

        // Clear Combat Log
        $("#playerText").text("       |        ");
        $("#enemyText").text("       |        ");

        // Create Target Info Div that Displays Health
        $("#gameSpace").append($('<div>',{ "class" : "row", "id" : "targetInfo"}));
        var returnEnmSrc = enemies.filter(obj => obj.val == chosenEnemy ).map(obj => obj.src); // call values from array
        var returnEnmHP = enemies.filter(obj => obj.val == chosenEnemy ).map(obj => obj.hp); // call values from array
        
        // Add div for target HP
        $("#targetInfo").append($('<div>',{ "class" : "col-md-4 blank", }));
        $("#targetInfo").append($("<p>", { "id" : "targetHpElement", "class" : "text-center col-md-4", "text" : "HP : " + returnEnmHP}));
        $("#targetInfo").append($('<div>',{ "class" : "col-md-4 blank"}));
        
        // Add div for Target Image
        $("#gameSpace").append($("<div>", {"class" : "row", "id" : "selectedEnemyContainer"}))
        $("#selectedEnemyContainer").append($('<div>',{ "class" : "col-md-4"}));  //Blank Div for padding
        $("#selectedEnemyContainer").append($('<img>',{ "class" : "col-md-4","id" : "target", "src" : returnEnmSrc})); //Characcter image
        $("#selectedEnemyContainer").append($('<div>',{ "class" : "col-md-4"}));
        var fds = 100;
        for(var i = 0; i < 100; i++)
        {
            fds += 100;
            console.log(fds);
        }
    }   
});
 
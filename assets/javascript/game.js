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
        $('img').each(function(index){
            $(this).attr("value", val[index]);
        });
        $('img').each(function(index){
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
}
$('.character-image').on("click", function(){
    var gameSpaceDiv = $("<div>");
    gameSpaceDiv.attr('id', "gameSpace");
    $(".container").append(gameSpaceDiv);
    console.log(chosenClass);
    console.log(characters);

    const findVal = function(characters, value)
    {
        const valReturned = characters.find(function(val, index){
            return val.value === value;
        })
        return valReturned;
    }
    var print = findVal(characters, "dnc");
    console.log(print)
    
        var imageCharacter = $("<img>");
        imageCharacter.addClass("character-image col-md-4");
        imageCharacter.attr("src", "assets/img/dnc.png");
        // $('img').attr("src", "assets/img/dnc.png");
        $("#gameSpace").append(imageCharacter);
});

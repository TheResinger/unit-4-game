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
    if(charChosen !== true)
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
            charClass.addClass("character-Class col-md-4 text-center");
            $("#characterClass").append(charClass);
            $("#characterClass").find('p').each(function(index){
                $(this).text(character[index]);
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
            $(".characters").remove();
            $(".jumbotron").remove();

        });
    }
    else
    {

    }
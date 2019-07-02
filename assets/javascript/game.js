var charChosen = false;
var characters = [
    {
        class : "dancer",
        att : 20,
        hp : 20,
        src : "assets/img/bard.png",
        val : "dnc",
    },
    {
        class : "bard",
        att : 25,
        hp : 15,
        src: "assets/img/bard.png",
        val : "brd",
    },
    {
        class : "machinist",
        att : 15,
        hp : 25,
        src : "assets/img/mch.png",
        val : "mch",
    },
];
$( document ).ready(){
    if(charChosen !== true)
    {
        characters.forEach(function(character){
            var source = characters.map(a => a.src);
            var val = characters.map(a => a.val);
            var att = characters.map(a => a.att);
            var hp = characters.map(a => a.hp);
            var imageCharacter = $("<img>");
            imageCharacter.addClass("character-image col-md-4");
            $("#characters").append(imageCharacter);
            $('img').each(function(index){
                $(this).attr("value", val[index]);
            });
            $('img').each(function(index){
                $(this).attr("src", source[index]);
            });
            var charHP = $("<p>");
            charHP.addClass("character-HP col-md-4 text-center");
            $("#characterHP").append(charHP);
            $('p').each(function(index){
                $(this).text("HP : " + hp[index]);
            });
            // var charAtt = $("<p>");
            // charAtt.addClass("character-Att col-md-4 text-center");
            // $("#characterAtt").append(charAtt);
            // $('p').each(function(index){
            //     $(this).text("Att : " + att[index]);
            // });
        });
        $('.character-image').on("click", function(){
            charChosen = true;
            console.log(charChosen);
        });
    }
    else
    {

    }
)};
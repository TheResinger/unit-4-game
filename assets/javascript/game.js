$(document).ready(function(){

    var crystalValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var currentScore = 0;
    var red = 0;
    var blue = 0;
    var green = 0;
    var purple = 0;
    var losses = 0;
    var wins = 0

    function generateValue(min, max){
        return scoreToGet = Math.floor(Math.random() *(max - min)) + min;
    }
    function resetGame(){
        console.log("reset");
        currentScore = 0;   
        function Shuffle(o) 
        {
            for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
            return o;
        };
        generateValue(19, 120);
        Shuffle(crystalValues);
        red = crystalValues[0];
        blue = crystalValues[3];
        green = crystalValues[6];
        purple = crystalValues[9];
        $("#scoreToGet").text(scoreToGet);
        $("#currentScore").text(currentScore);
        $("#wins").text(wins);
        $("#losses").text(losses);
    }
    resetGame();

    $(document).on("click", ".crystal", function(){
        console.log(scoreToGet);
        $("#status").text("");
        if($(this).attr("value") === "red")
        {
            currentScore += red;
            console.log(currentScore);
            $("#currentScore").text(currentScore);
        }
        else if($(this).attr("value") === "blue")
        {
            currentScore += blue;
            console.log(currentScore);
            $("#currentScore").text(currentScore);
        }
        else if($(this).attr("value") === "green")
        {
            currentScore += green;
            console.log(currentScore);
            $("#currentScore").text(currentScore);
        }
        else if($(this).attr("value") === "purple")
        {
            currentScore += purple;
            console.log(currentScore);
            $("#currentScore").text(currentScore);
        }
        else
        {
            console.log("well I have no idea how you got here.");
        }
        
        if(currentScore > scoreToGet)
        {
            $("#status").text("You went over the score. You Lose!");
            losses++;

            resetGame();
        }
        else if (currentScore === scoreToGet)
        {
            $("#status").text("You hit the score. You Win!");
            wins++;
            resetGame();
        }

    });

   
});
var readlinesync = require('readline-sync');
var answer = (readlinesync.question ("welke dag is het vandaag?"))

    if(answer == "maandag" || answer == "dinsdag" || answer == "woensdag" || answer == "donderdag" || answer == "vrijdag")

    {
        console.log ("je moet naar school vandaag\n\n\n")
     return;

    }

    else if (answer == "zondag" || answer == "zaterdag" )
    {
        console.log ("JE MOET NIET NAAR SCHOOL\n\n\n")
        

    }
    else
    {
        fout();
        

    }


    function fout () {
        console.clear()
        console.log("wtf is dit?")

    }

var readlinesync = require('readline-sync');
let answer = readlinesync.question ("hoe oud ben je ")

function checkId()
{
    
        let answer2 = readlinesync.question ("mag ik je id zien? ")
        if (answer2 == "nee") {
            console.log("oke doei")
        }
        else if (answer2 === "ja") 
        {
            console.log("Je mag naar binnen");
            
        }
}
function checkLeeftijd() {
    if (answer < 21) {
        console.log("Je mag niet naar binnen");
    } else if (answer >= 21) {

        checkId();
    }
}




checkLeeftijd()

    
var readlinesync = require("readline-sync");
const answer = readlinesync.question("typ een woord")

antwoord(answer)

function antwoord(woord) {
    var chars = woord.split('');
    chars.sort(() => Math.random() - 0.5);
    var woordje = chars.join('');
    console.clear()


    console.log(woordje);
}



let biem = 1;
const lijst = [];

while (biem < 2) {
    const readlinesync = require("readline-sync");
    const antwoord1 = readlinesync.question("Wil je een item verwijderen of toevoegen? ");

    if (antwoord1 === "toevoegen") {
        console.clear()
        const antwoord3 = readlinesync.question("Wat wil je toevoegen? ");
        lijst.push(antwoord3);
        console.log(`Je lijst is nu: ${lijst}`);
    } else if (antwoord1 === "verwijderen") {
        console.clear()
        const antwoord2 = readlinesync.question("Welk item wil je verwijderen? ");
        const antwoord3 = lijst.indexOf(antwoord2);

        if (antwoord3 !== -1) {
            console.clear()
            lijst.splice(antwoord3, 1);
            console.log(`Je lijst is nu: ${lijst}`);
        } else {
            console.log(`${antwoord2} is niet gevonden in de lijst.`);
        }
    }
}
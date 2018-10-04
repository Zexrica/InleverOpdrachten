//Opdracht 1
let lapRounds = [2.99,  3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12]; 
function Rounds() {
    var randomRound = lapRounds[Math.floor(Math.random() * lapRounds.length)];
    console.log(randomRound);
}
Rounds()


//opdracht 2
const allMyRecords = [
    ["The Who - Pinball Wizard", "Rolling Stones - Exile on main street", "Police - Message in a bottle"],
    ["De Dijk - Alle 40 Goed", "Het Goede Doel - Belgie", "Doe Maar - skunk"]
];

for (let index = 0; index < allMyRecords.length; index++) {
    for (let i = 0; i < allMyRecords[index].length; i++) {
    const element = allMyRecords[index][i];
    console.log(element)
    }
}


//opdracht 3
const filteredLapRoundsWithForLoop = function () {
    let newArray = [];
    for (let i = 0; i < lapRounds.length; i++) {
 
        if (lapRounds[i] < 4) {
            newArray.push(lapRounds[i]);
        }
    }
    return newArray;
}
console.log(filteredLapRoundsWithForLoop());


let filteredRounds = lapRounds.filter(function(filtered) {
    return filtered < 4
});
console.log(filteredRounds);
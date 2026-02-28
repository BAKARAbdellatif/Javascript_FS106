const tournoiEsport = [
    { pseudo: "ShadowKilla", score: 8900 },
    { pseudo: "CyberPunk99", score: 12500 },
    { pseudo: "NoobMaster69", score: 4500 },
    { pseudo: "GlitchHunter", score: 11200 },
    { pseudo: "ProGamer", score: 9800 }
];
// Version fonctions normales
function afficherPodium(tournoi) {
    tournoi.forEach(element => {
        console.log(`Pseudo : ${element.pseudo}, Score : ${element.score}`)
    });
}


function trierScore(tournoi, myCallback) {
    let tableau = tournoi.sort((a, b) => b.score - a.score)
    myCallback(tableau)

}

trierScore(tournoiEsport, afficherPodium)
// Version fonctions fléchées
var afficherPodium = (tournoi) => {
    tournoi.forEach(element => {
        console.log(`Pseudo : ${element.pseudo}, Score : ${element.score}`)
    });
}


var trierScore = (tournoi, myCallback) => {
    let tableau = tournoi.sort((a, b) => b.score - a.score)
    myCallback(tableau)

}

trierScore(tournoiEsport, afficherPodium)
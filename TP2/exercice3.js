const voitureSport = {
    marque: "Porsche",
    modele: "911 GT3",
    annee: 2023,
    puissance: "510 ch",
    couleur: "Gris Quartz",
    transmission: "Automatique PDK"
};
function afficheinfo(voiture) {
    var voitureinfo = ""
    for (let key in voiture) {
        voitureinfo += ` - ${key} : ${voiture[key]} `
    }
    return voitureinfo

}
console.log(afficheinfo(voitureSport));




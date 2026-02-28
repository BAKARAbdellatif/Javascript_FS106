// Données de test
const vehicules = [
    { marque: "Tesla", modele: "Model 3", anneeMiseEnService: 2023, carburant: "Electrique" },
    { marque: "Renault", modele: "Clio", anneeMiseEnService: 2018, carburant: "Essence" },
    { marque: "Peugeot", modele: "308", anneeMiseEnService: 2012, carburant: "Diesel" },
    { marque: "Citroën", modele: "2CV", anneeMiseEnService: 1985, carburant: "Essence" },
    { marque: "Volkswagen", modele: "Golf", anneeMiseEnService: 2005, carburant: "Diesel" }
];


const anneeActuelle = new Date().getFullYear();

// Sélection des conteneurs
const divRecents = document.getElementById('recents');
const divOccasions = document.getElementById('occasions');
const divAnciens = document.getElementById('anciens');

for (const v of vehicules) {
    // calculer l'age de la voiture
    const age = anneeActuelle - v.anneeMiseEnService;

    let couleurTexte = "black";

    if (v.carburant === "Electrique") {
        couleurTexte = "green";
    } else if (v.carburant === "Diesel" && age > 10) {
        couleurTexte = "red";
    }

    // Préparation du HTML à injecter
    const infoVehicule = `<p style="color: ${couleurTexte}">
        ${v.marque} ${v.modele} - ${age} ans (${v.carburant})
    </p>`;

    // Affichage selon l'ancienneté
    if (age < 5) {
        divRecents.innerHTML += infoVehicule;
    } else if (age >= 5 && age <= 15) {
        divOccasions.innerHTML += infoVehicule;
    } else {
        divAnciens.innerHTML += infoVehicule;
    }
}
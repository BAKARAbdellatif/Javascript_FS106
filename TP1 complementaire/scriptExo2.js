const visiteurs = [
    { nom: "dupont", prenom: "jean", anneeNaissance: 2005, estEtudiant: false }, // 21 ans -> Réduit
    { nom: "martin", prenom: "claire", anneeNaissance: 1990, estEtudiant: true },  // Étudiante -> Réduit
    { nom: "durand", prenom: "pierre", anneeNaissance: 1985, estEtudiant: false }, // 41 ans -> Plein
    { nom: "lefevre", prenom: "michel", anneeNaissance: 1950, estEtudiant: false } // 76 ans -> Réduit
];

const anneeActuelle = new Date().getFullYear();
const listeReduit = document.getElementById('tarif-reduit');
const listePlein = document.getElementById('plein-tarif');

for (const v of visiteurs) {
    // 1. Calcul de l'âge
    const age = anneeActuelle - v.anneeNaissance;

    // 2. Manipulation de String
    // Nom en MAJUSCULES
    const nomMaj = v.nom.toUpperCase();
    // Prénom : 1ère lettre Maj + le reste en minuscules
    const prenomPropre = v.prenom.charAt(0).toUpperCase() + v.prenom.slice(1).toLowerCase();

    // 3. Logique de tarification (Condition complexe)
    let prix;
    let destinationUl;

    // Moins de 25 ans OU Étudiant OU Plus de 65 ans
    if (age < 25 || v.estEtudiant === true || age > 65) {
        prix = "8€";
        destinationUl = listeReduit;
    } else {
        prix = "12€";
        destinationUl = listePlein;
    }

    // 4. Affichage
    // On crée un élément <li> pour l'ajouter à la liste correspondante
    destinationUl.innerHTML += `<li>${nomMaj} ${prenomPropre} - ${prix} (Âge: ${age} ans)</li>`;
}
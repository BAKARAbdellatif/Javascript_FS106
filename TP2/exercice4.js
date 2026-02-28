const classeDeDev = {
    nom: "Promo 2024",
    effectif: 4,
    notes: [14, 18, 9, 11]
};

var evaluerclass = (classe) => {
    let somme = 0
    classe.notes.forEach(note => {
        somme += note
    });
    let moyenne = somme / classe.effectif
    if (moyenne >= 10) {
        return "Passable"
    } else {
        return "Insuffisant"
    }
}
resultat = evaluerclass(classeDeDev)

console.log(resultat)
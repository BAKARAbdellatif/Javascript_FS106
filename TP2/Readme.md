
Voici les blocs de données pour chaque exercice, prêts à être copier-coller dans les éditeur de code.

---

### Partie 1 : Structures et Fonctions (1 à 6)

**Exercice 1 : Gestion de stock (for...of)**

```javascript
const stockSport = [
    { nom: "Ballon de foot", prix: 25, stock: 12 },
    { nom: "Gants de gardien", prix: 40, stock: 5 },
    { nom: "Maillot", prix: 70, stock: 8 },
    { nom: "Protège-tibias", prix: 15, stock: 20 }
];

```

**Exercice 2 : Filtrage d'utilisateurs (while)**

```javascript
const utilisateurs = [
    { nom: "Alice", age: 25, actif: true },
    { nom: "Bob", age: 17, actif: false },
    { nom: "Charlie", age: 19, actif: true },
    { nom: "David", age: 16, actif: true },
    { nom: "Eve", age: 30, actif: false }
];

```

**Exercice 3 : Analyse de propriétés (for...in)**

```javascript
const voitureSport = {
    marque: "Porsche",
    modele: "911 GT3",
    annee: 2023,
    puissance: "510 ch",
    couleur: "Gris Quartz",
    transmission: "Automatique PDK"
};

```

**Exercice 4 : Moyenne de classe (for classique)**

```javascript
const classeDeDev = {
    nom: "Promo 2024",
    effectif: 4,
    notes: [14, 18, 9, 11]
};

```

**Exercice 5 : Recherche d'ID (break/continue)**

```javascript
const badgesSecurite = [
    { id: "A101", acces: "OK" },
    { id: "B202", acces: "Interdit" },
    { id: "C303", acces: "OK" },
    { id: "D404", acces: "Interdit" },
    { id: "E505", acces: "OK" }
];
// ID à chercher pour le test : "C303"

```

**Exercice 6 : Transformation de prix (Remise)**

```javascript
const catalogueHiver = [
    { nom: "Manteau Laine", prix: 120 },
    { nom: "Bottes Cuir", prix: 85 },
    { nom: "Echarpe", prix: 25 },
    { nom: "Gants Tactiles", prix: 15 }
];

```

---

### Partie 2 : Callbacks et Tri (7 à 10)

**Exercice 7 : Le Podium des Gamers**

```javascript
const tournoiEsport = [
    { pseudo: "ShadowKilla", score: 8900 },
    { pseudo: "CyberPunk99", score: 12500 },
    { pseudo: "NoobMaster69", score: 4500 },
    { pseudo: "GlitchHunter", score: 11200 },
    { pseudo: "ProGamer", score: 9800 }
];

```

**Exercice 8 : Répertoire Téléphonique**

```javascript
const contacts = [
    { nom: "Zola", tel: "06 11 22 33 44" },
    { nom: "Aragon", tel: "06 55 66 77 88" },
    { nom: "Balzac", tel: "07 12 34 56 78" },
    { nom: "Camus", tel: "06 99 88 77 66" }
];

```

**Exercice 9 : File d'Attente (Urgences)**

```javascript
const fileUrgences = [
    { patient: "Marc", gravite: 4 }, // Bénin
    { patient: "Sophie", gravite: 1 }, // Très urgent
    { patient: "Paul", gravite: 3 }, // Moyen
    { patient: "Inès", gravite: 2 }  // Urgent
];

```

**Exercice 10 : Catalogue de Bibliothèque**

```javascript
const bibliotheque = [
    { titre: "Le Petit Prince", pages: 96 },
    { titre: "Les Misérables", pages: 1462 },
    { titre: "L'Étranger", pages: 159 },
    { titre: "Guerre et Paix", pages: 1225 }
];

```

---

### Rappel pour les stagiaires sur le tri (Sort)

Pour les exercices de callback, rappelle-leur que pour trier des objets par une propriété numérique `prop` en JavaScript, on utilise souvent :
`monTableau.sort((a, b) => a.prop - b.prop);` (ordre croissant).

**Est-ce que tu souhaites que je te prépare une petite fiche "mémo" sur les lambdas et les callbacks à leur distribuer avant de commencer ?**
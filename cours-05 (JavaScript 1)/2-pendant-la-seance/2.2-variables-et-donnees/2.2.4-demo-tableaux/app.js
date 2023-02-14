// Tableau -> liste
// liste d'épicerie
// liste de numéros de téléphone
// liste de prix

// plusieurs éléments de même nature
// créer une nouvelle variable et assigner mon tableau
var listeDeNoms = [
	"Ousmane", // 0
	"Ivett", // 1
	"Eve", // 2
	"Alicia" // 3,
];

console.log(listeDeNoms);

// Je souhaite afficher Ivett dans la console
console.log(listeDeNoms[1]);
console.log(listeDeNoms[2]);

var monIndex = 1;
console.log(listeDeNoms[monIndex]); // Ivett

// Ajout d'éléments
listeDeNoms.push("Juliennn"); // 4
console.log(listeDeNoms);

// Modification d'éléments
listeDeNoms[4] = "Julien";
console.log(listeDeNoms);

// Pour connaître la quantité d'éléments dans un tableau
console.log(listeDeNoms.length);

listeDeNoms.push("Mohamed");

// Pour savoir si une valeur fait partie de notre tableau
console.log(listeDeNoms.includes("Mohamed")); // true (booléen)









// Définition d'un objet contenant 3 paires propriété-valeur
var chandailA = {
	titre: "Chandail Better Sweater de Patagonia - Femmes",
	prix: 189,
	evaluation: 3.5
};

// Modélisation d'un deuxième chandail
var chandailB = {
	titre: "Pull Airshed Pro de Patagonia - Femmes",
	prix: 169,
	evaluation: 5
};

var chandailC = {
	titre: "Chandail à capuchon Comet de Salomon - Femmes",
	prix: 44.93,
	evaluation: 0
};

var chandailD = {
	titre: "Chandail léger Synchilla Snap-T de Patagonia - Femmes",
	prix: 159,
	evaluation: 4.1
};


// On regroupe ces chandails sous une structure commune: le tableau
var chandails = [
	chandailA,
	chandailB,
	chandailC,
	chandailD,
];

// Utilisation du tableau d'objets
console.log(chandails.length);
console.log(chandails[1]);
console.log(chandails[1]["titre"]);
console.log(chandails[1]["prix"]);

// Utilisation du tableau d'objets dans une boucle
// Filtre
for (var i = 0; i < chandails.length; i = i + 1) {
	if (chandails[i]["prix"] >= 100) {
		console.log(chandails[i]["titre"]);
	}
}

















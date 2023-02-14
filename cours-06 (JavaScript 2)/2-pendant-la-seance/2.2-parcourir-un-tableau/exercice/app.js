// Modélisation du tableau des recettes
var recettes = [
	"GÂTEAU « POKE » CHOCOLAT ET CARAMEL FLEUR DE SEL",
	"TRUFFES CHOCO CRÈME",
	"TARTE FRANGIPANE POIRE ET CHOCOLAT"
];

recettes.push("TEST");

// Boucle permettant de parcourir le tableau des recettes
for (var i = 0; i < recettes.length; i = i + 1) {
	console.log("Ce soir, je mangerai: " + recettes[i]);
}
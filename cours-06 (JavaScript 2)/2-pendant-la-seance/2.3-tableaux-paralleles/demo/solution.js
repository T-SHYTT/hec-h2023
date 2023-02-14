// Définissons le tableau des titres de produits
var titres = [
	"Cardigan Covert de Arc'teryx - Femmes", // 0
	"Chandail Better Sweater de Patagonia - Femmes", // 1
	"Chandail à glissière Teslin de MEC - Femmes", // 2
	"Couche intermédiaire Rockwall de MEC - Femmes" // 3
];

// 2ème tableau
var prix = [
	199.99, // 0
	289.99, // 1
	269.99, // 2
	189.99 // 3
];

// 3ème tableau
var evaluations = [
	4, // 0
	5, // 1
	3.5, // 2
	4.2 // 3
];

// objet (cours 8)
var chandail1 = {
	titre: "Cardigan Covert de Arc'teryx - Femmes",
	prix: 199,99,
	evaluation: 4
};

// le titre à l'index 0 correspond au prix à l'index 0, 1 à 1, etc.
console.log(titres[0], prix[0], evaluations[0]);
console.log(titres[1], prix[1], evaluations[1]);

console.log('---------');

for (var i = 0; i < titres.length; i = i + 1) {
	console.log("Le chandail " + titres[i] + " coûte: " + prix[i] + "$. Son évaluation est: " + evaluations[i] + "/5.");
}










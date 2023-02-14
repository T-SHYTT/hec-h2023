// Parcourir un tableau -> Visiter chacun des éléments du tableau afin de prendre une action
// 1. Définir et utiliser un tableau
var ingredients = [
	"1 3/4 tasses (430 ml) de farine tout usage",
	"1 3/4 tasses (430 ml) de sucre granulé",
	"3/4 tasse (180 ml) de poudre de cacao, tamisée",
	"2 c. à thé (10 ml) de poudre à pâte",
	"1/2 c. à thé (2 ml) de bicarbonate de soude", // 4
	"1/2 c. à thé (2 ml) de sel",
	"1 tasse (250 ml) de babeurre, ou de lait"
];

// 2. accéder à un élément spécifique
console.log(ingredients[2]); // "3/4 tasse (180 ml) de poudre de cacao, tamisée",

// 3. déterminer la quantité d'éléments dans le tableau
console.log(ingredients.length); // 7

console.log('-------------');

// 4. écrire une boucle dans sa forme la plus simple
// 6. Rendre la condition de sortie dynamique
for (var i = 0; i < ingredients.length; i = i + 1) {
	// 5. rendre l'index du tableau dynamique (variable)
	console.log(ingredients[i]); // ingredients[0], ingredients[1], ... ingredients[4]
}






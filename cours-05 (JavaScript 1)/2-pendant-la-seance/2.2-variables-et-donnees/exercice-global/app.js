// 3. Définissez la variable "paysExpedition" 
var paysExpedition = "CAN";
console.log("Le pays d'expédition est: " + paysExpedition);

// 4. Définissez la variable "paysLivraisonIncluse"
var paysLivraisonIncluse = [
	"CAN",
	"USA",
	"MEX"
];
console.log("Les pays pour lesquels la livraison est gratuite sont: ", paysLivraisonIncluse);

// 5. Définissez une variable "tarifLivraisonNonIncluse"
var tarifLivraisonNonIncluse = 20;
console.log("Le tarif de livraison pour les pays non-inclus est: " +tarifLivraisonNonIncluse);

// 7. Ajoutez un nouveau pays au tableau, avec l'action (méthode) .push()
paysLivraisonIncluse.push("CRI");
console.log(paysLivraisonIncluse);

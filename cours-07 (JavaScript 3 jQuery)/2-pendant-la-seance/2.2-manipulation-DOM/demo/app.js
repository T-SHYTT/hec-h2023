// On souhaite masquer la bannière rouge (alert)
$("#alerte-sans-rabais-20").hide(); // display: none;

// On souhaite afficher la bannière verte (success)
$("#alerte-avec-rabais-20").show(); // display: block;

// On a déjà vu la méthode (action) .html("Mon nouveau contenu")

// On va voir la méthode .append();
$("#alerte-avec-rabais-20").append("Du contenu supplémentaire. ");
$("#alerte-avec-rabais-20").append('Pour visiter Amazon: <a href="https://amazon.ca">Lien vers Amazon</a>');
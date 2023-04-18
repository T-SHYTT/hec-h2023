<?php

// 1. Définissez le tableau associatif permettant de modéliser la recette A. Voici les données :
$recette_A = [
	'titre' => 'ÉCORCES MAGIQUES AU CHOCOLAT, AUX ÉPICES ET AUX CANNEBERGES BIO',
	'description' => 'Écorces « magiques »? Oui, oui! La magie s’opère dès que les canneberges fraîches entrent en contact avec le chocolat!',
	'image' => 'images/gateau-canneberges.png',
	'url' => 'https://www.chocolatsfavoris.com/recettes/ecorces-magiques-au-chocolat-aux-epices-et-aux-canneberges-bio'
];

// 2. Définissez le tableau associatif permettant de modéliser la recette B. Voici les données :
$recette_B = [
	'titre' => 'GÂTEAU ÉCLATÉ',
	'description' => "Le seul, l'unique... Le gâteaux Éclaté maison!",
	'image' => 'images/gateau-eclate.png',
	'url' => 'https://www.chocolatsfavoris.com/recettes/gateau-eclate'
];

// 3. Inclusion du fichier d'affichage
include 'app.html.php';

?>

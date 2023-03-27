<?php

$liste_de_prix = [
	19,
	100,
	50.05
];
var_dump($liste_de_prix);
echo "<br>";

echo $liste_de_prix[1]; // 100
echo "<br>";

$liste_de_prix[2] = 39.95;
var_dump($liste_de_prix);
echo "<br>";

// On veut ajouter un élément après la définition
// initiale
$liste_de_prix[] = 29;
var_dump($liste_de_prix);
echo "<br>";

// Pour connaître la quantité d'éléments dans le tableau
echo count($liste_de_prix); // 4
echo "<br>";

?>




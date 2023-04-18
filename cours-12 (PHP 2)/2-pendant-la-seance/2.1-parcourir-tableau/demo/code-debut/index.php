<?php 

// Reprenons la démonstration du cours 10, où on présente les derniers cours
// auxquels un client a participé.
$cours_fitness = [
	'CrossFit',
	'Yoga flow',
	'Course à pied'
];

// Mettons en place une boucle pour afficher tous les titres (sans HTML pour débuter)
// Nous commenterons cette section par la suite
// foreach ($cours_fitness as $un_cours) {
// 	echo "$un_cours<br>";
// }

// équivalence JavaScript
// for (var i = 0; i < cours_fitness.length; i = i + 1) {
// 	$cours_fitness[i]
// }

// Effectuons l'inclusion du fichier d'affichage
include 'app.html.php';

?>

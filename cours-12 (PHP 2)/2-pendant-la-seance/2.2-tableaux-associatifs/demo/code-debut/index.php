<?php 

// On définit un tableau associatif
$cours_fitness_A = [
	'titre' => 'Crossfit',
	'instructeur' => 'Martha',
	'date' => '22 avril 2023'
];

// On définit un deuxième tableau associatif
$cours_fitness_B = [
	'titre' => 'Yoga flow',
	'instructeur' => 'Charles',
	'date' => '27 avril 2023'
];

var_dump($cours_fitness_A);
echo "<br>";
// On accède aux propriétés avec la même syntaxe que JS (les crochets carrés [])
echo $cours_fitness_A["titre"];
echo "<br>";
echo $cours_fitness_A["instructeur"];
echo "<br>";

// On assigne une nouvelle valeur avec la même syntaxe que JS
$cours_fitness_A['date'] = '24 avril 2023';
var_dump($cours_fitness_A);
echo "<br>";


// Le tableau associatif est l'équivalent de l'objet JS (ci-dessou)
// $cours_fitness_A = {
// 	titre: 'Crossfit',
// 	instructeur: 'Martha',
// 	date: '22 avril 2023'
// };

// On inclut le fichier d'affichage
include 'app.html.php';


?>








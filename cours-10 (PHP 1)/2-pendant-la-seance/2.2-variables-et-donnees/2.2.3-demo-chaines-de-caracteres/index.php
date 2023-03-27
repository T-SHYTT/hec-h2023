<?php 

// Définition d'une variable contenant une chaîne
// de caractères
$produit = "jeans";
echo $produit;
echo "<br>";

// Concaténation avec le point (au lieu du +)
echo "Je vais acheter des " . $produit . ".<br>";

// Interpolation de chaînes de caractères
echo "J'ai besoin d'acheter des $produit.<br>";

// L'interpolation ne fonctionne pas avec les guillemets
// simples.
echo 'Aimez-vous les $produit bleus?<br>';

?>
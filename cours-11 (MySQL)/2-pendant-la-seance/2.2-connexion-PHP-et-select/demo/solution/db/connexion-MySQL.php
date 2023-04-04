<?php 

/**
 * Initialisation de la connexion à la base de données
 */
try {
    // Les gens qui utilisent XAMPP (PC) devront spécifier un 
    // mot de passe qui est une chaîne de caractères vide
    $db = new PDO('mysql:host=localhost;dbname=hec', 'root', 'root');
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
$db->exec("set names utf8");

?>
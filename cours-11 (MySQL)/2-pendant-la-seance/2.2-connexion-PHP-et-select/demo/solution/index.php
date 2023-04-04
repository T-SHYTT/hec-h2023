<?php 

// Créer une connexion vers le serveur MySQL
include 'db/connexion-MySQL.php';

// Sélectionner les données à partir du Backend
include 'db/select-publications.php';

// Afficher les données en utilisant le fichier
// maître (app.html.php)
// Ce fichier app.html.php fait lui-même l'inclusion
// de la table (table.html.php)
include 'views/app.html.php';

?>
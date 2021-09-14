# Projet 7 - Groupomania !

7ème et dernier projet de la formation développeur web d'Openclassrooms.
Créer un réseau social d'entreprise.
La stack utilisée pour ce projet:

- VueJs
- NodeJs + express + sequelize
- Mysql

## Frontend

Ouvrir le dossier Frontend dans le terminal de votre éditeur puis exécuter la commande:

    npm install

puis

    npm start ou vue ui

si le navigateur ne s'ouvre pas automatiquement allez à :

- http://localhost:8080/

## Backend

Ouvrir le dossier Backend dans le terminal de votre éditeur puis exécuter la commande:

    npm install

puis

    npm start ou node server

## Base de données

Se connecter au serveur **MySql** de votre choix.
Exécuter la commande: `CREATE DATABASE socialnetwork;`
Vérifiez les identifiants dans le fichier config.json du dossier Backend :

    mysql -u root -p socialnetwork

## Utilisation

Pour s'inscrire sur le social network de Groupomania, il vous faut renseigner :

- Un pseudo
- Une adresse mail valide
- Un mot de passe
  Vous pouvez par la suite modifier votre profil (pseudo, photo) en allant sur votre profil. Votre compte peut être supprimé par vous-même ainsi que par l'administrateur.

Une fois connecté vous pouvez voir les publications des utilisateurs et publier au choix:

- un statut
- un statut + un lien (gifs ok, pas de vidéos youtube)
- un statut + une image
  Ces publications peuvent être likées, commentées, modifiées, supprimées. Le modérateur peut les supprimer.

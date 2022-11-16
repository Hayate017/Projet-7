# Projet-7-Groupomania

# OPEN CLASSROOMS - PROJET 7 par Paul-Valentin Blasco
# Création d'un réseau social d'entreprise 


## Spécifications demandées ##

- Une page de connexion sur laquelle l'utilisateur peut s'inscrire ou se connecter
- Un utilisateur doit avoir la possibilité de se déconnecter
- La session de l’utilisateur persiste pendant qu’il est connecté
- Les données de connexion doivent être sécurisées
- La page d’accueil doit lister les posts créés par les différents utilisateurs
- Les posts doivent être listés de façon antéchronologique
- Un utilisateur doit pouvoir créer un post
- Un post doit pouvoir contenir du texte et une image
- Un utilisateur doit aussi pouvoir modifier et supprimer ses posts
- Un utilisateur doit pouvoir liker un post, une seule fois pour chaque post
- Créer un utilisateur “administrateur” ; celui-ci aura les droits de modification /suppression sur tous les posts du réseau social
- Respecter l'identité graphique

## Administrateur

L'adresse prévue par défaut pour l'administrateur est **administrateur@groupomania.com**.


## Technologies utilisées ##

Framework Front-end obligatoire: *Vue.js (Version 2)*

Back-end réalisé avec *Node.js* et *Express*

Base de données choisis: *MySQL*

Développement du back-end réalisé *sans ORM*


## INSTALLATION ##

Pour lancer le projet, vous devez avoir les programmes suivants installés : 

- Node.js
- MySQL

## 1. Cloner le projet

Avec le terminal, depuis le dossier dans lequel vous souhaitez enregistrer le projet, clonez le projet avec la commande :

```
git clone https://github.com/Hayate017/Projet-7-Groupomania.git groupomania
```

Le dossier ainsi créé sur votre machine doit contenir les éléments suivants :

- un dossier backend contenant le code de l'API
- un dossier frontend contenant le code de l'application frontend
- un dossier database contenant le fichier dbCreation.sql
- un dossier images contenant le fichier "default_avatar.png"
- le fichier README.md 

## 2. Création de la base de données MySQL 

Exécutez MySQL avec votre Terminal :


mysql -u root -p

Renseignez le mot de passe de l'utilisateur root.

Une fois connecté, importez le fichier dbCreation.sql avec la commande :


SOURCE path/dbCreation.sql;

ou

mysql -u[utilisateur] -p [nom_base_de_donnees] < fichier.sql


Puis, vérifiez que la base de données Groupomania a bien été importée avec la commande :


SHOW DATABASES;


Enfin, indiquez à MySQL que vous souhaitez utiliser la base de données Groupomania avec la commande :


USE groupomania;


## 3. Installation de l'API 

Depuis le dossier **backend**, à l'aide de votre terminal, installez les dépendances avec la commande :


npm install


Il est possible que certains packages ne soient pas à jour, dans ce cas exécutez :


npm outdated

Puis:

npm audit fix


## 4. Configuration des variables d'environnement et du fichier .gitignore 

À la **racine** du dossier **backend**, ajoutez un fichier **.env** avec les éléments suivants :


dbUser = "identifiant de connexion à MySQl sur votre machine (utilisateur root)"
dbPassword = "mot de passe de connexion à MySQl sur votre machine (utilisateur root)"
dbHost = "127.0.0.1"
dbName = "groupomania"
JWT_SECRET_TOKEN = "chaîne de caractères aléatoire"


À la **racine** du dossier **backend**, ajoutez un fichier **.gitignore** avec les éléments suivants :

/.env
/node_modules
/images

## 5. Ajout du dossier images 

À la **racine** du dossier **backend**, ajoutez le dossier images contenant le fichier **default_avatar.png**. 

## Étape 6. Lancement de l'API ##

Avec le terminal, depuis le dossier backend, executez la commande :

npm run serve

Les messages suivants devraient apparaitre dans le terminal :


Listening on port 3000
-----------------------------------------------
Connected successfully to groupomania database
------------------------------------------------

Vous êtes désormais prêt à utiliser l'application.

## Étape 7. Installation de l'application Frontend 

Depuis le dossier **frontend**, à l'aide de votre terminal, installez les dépendances avec la commande :

npm install

Il est possible que certains packages ne soient pas à jour, dans ce cas exécutez :

npm outdated

Puis:

npm audit fix


Enfin, lancez l'application avec la commande :

npm run serve

-----------------------------------------------

Vous devriez être en mesure d'accédez au réseau social d'entreprise Groupomania et vous inscrire ou connectez.




const express = require('express');
const path = require('path');

// Utilisation de helmet pour accroitre la sécurité
const helmet = require('helmet');

// "Data Sanitization" contre XSS
const xss = require('xss-clean');
app.use(xss());

// Importation des variables d'environnement 
require('dotenv').config();
const dbName = process.env.dbName;

// Importation des configurations nécessaires à la connexion à la base de données
const mysql = require('./dbConnection').connection;

// Message pour confirmer la connexion à la base de données 
mysql.connect(function(err){
    if(err){
        throw err;
    }
    console.log(`Connected successfully to ${dbName} database`)
})

const app = express();

// Création d'un middleware pour avoir accès à la requête body
app.use(express.json());

// Configuration des headers pour autoriser des reqûetes cross-origin
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

// Configuration de helmet afin d'autoriser la manipulation de ressources externes sur l'application
app.use(helmet({ 
    crossOriginResourcePolicy: { 
        policy: "same-site" 
    } 
}));

// Importation du router User 
const userRoutes = require('./routes/user')
app.use('/api/user', userRoutes);

// Importation du router Post 
const postRoutes = require('./routes/post')
app.use('/api/post', postRoutes);

// Exportation de l'application pour être utilisée sur d'autres fichiers 
module.exports = app;
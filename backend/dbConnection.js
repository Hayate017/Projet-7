// Importation mysql 
const mysql = require('mysql2');

// Importation de dotenv et mise en place des constantes nécessaires à l'authentification pour la base de données
require('dotenv').config();
const dbUser = process.env.dbUser;
const dbPassword = process.env.dbPassword;
const dbHost = process.env.dbHost;
const dbName = process.env.dbName;

// Connexion à la base de données 
exports.connection = mysql.createConnection({
    host: dbHost,
    user: dbUser,
    password: dbPassword,
    database: dbName
})
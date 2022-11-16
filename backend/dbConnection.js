const mysql = require('mysql2');


require('dotenv').config();
const dbUser = process.env.dbUser;
const dbPassword = process.env.dbPassword;
const dbHost = process.env.dbHost;
const dbName = process.env.dbName;


exports.connection = mysql.createConnection({
    host: dbHost,
    user: dbUser,
    password: dbPassword,
    database: dbName
})
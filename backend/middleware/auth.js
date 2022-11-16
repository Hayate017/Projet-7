const jwt = require('jsonwebtoken');

require('dotenv').config();
const JWT_SECRET_TOKEN = process.env.JWT_SECRET_TOKEN;

// Configuration du middleware d'authentification
module.exports = (req, res, next) => {
    try {
    // Récupération du token d'authorisation des "headers" de la requête
    const token = req.headers.authorization.split(' ')[1];

    // Décryptage du token
    const decodedToken = jwt.verify(token, JWT_SECRET_TOKEN);

    // Définir le userId sur le userId découvert dans le token décrypté
    const userId = decodedToken.userId;

    // Définir le rôle sur le rôle découvert dans le token décrypté
    const role = decodedToken.role;
    
    // Ajout d'un objet d'authentification
    req.auth = {userId, role}

    // Dans le cas où le userId dans la requête est différent du userId renvoyé précédemment, une erreur est déclarée
    if (req.body.userId && req.body.userId !== userId) {
        throw 'User ID non valable';
    } else {
    // Dans le cas contraire, la fonction "next()" exécute le prochain middleware
        next();
    }
    
    } catch (error) {
    res.status(401).json({error})
    }
};
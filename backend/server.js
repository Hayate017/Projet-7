// Importation du package HTTP de Node 
const http = require('http');

//  Importation de l'application express
const app = require('./app');

// Création d'une fonction "normalizePort" qui renvoie à un port de serveur valide
const normalizePort = val => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// Création d'une fonction "errorHandler" pour gérer au mieux les erreurs éventuelles
const errorHandler = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

// Création d'un serveur en configurant l'application express en tant que paramètre
const server = http.createServer(app);

// Enregistrement de la fonction errorHandler dans le serveur 
server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('----------------------------------------')
  console.log('Listening on ' + bind);
  console.log('----------------------------------------')
});

server.listen(port);
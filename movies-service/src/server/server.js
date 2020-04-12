const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
var server = null;

function start(api, repository, callback) {
  // Carregando express
  const app = express();
  // usando morgan em modo dev
  app.use(morgan('dev'));
  // usa o helmet ( todas as requisições passama pelo helmet )
  app.use(helmet());
  // requisições que não forem tratadas caem aqui 
  app.use((err, req, res, next) => {
    callback(new Error('Something went wrong!, err:' + err), null);
    res.status(500).send('Something went wrong!');
  })
  // ( injeção de dependencia e inversão de controle )
  api(app, repository);
  server = app.listen(parseInt(process.env.PORT), () => callback(null, server));
}

function stop() {
  if (server) server.close();
  return true;
}

module.exports = { start, stop }

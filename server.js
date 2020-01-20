const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

server.use(express.json())
//custom middleware
server.use(logger);

function logger(req, res, next) {
  const {method, originalUrl} = req;
  console.log( ` ${method} to ${originalUrl} at [${new Date().toISOString()}]`)
  next();
};



module.exports = server;

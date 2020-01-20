const express = require('express');

const userRouter = require('./users/userRouter');
const postRouter = require('./posts/postRouter')
const server = express();

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

server.use(express.json());
server.use(logger);
server.use('/api/user', userRouter)
server.user('/api/posts', postRouter)


function logger(req, res, next) {
  const {method, originalUrl} = req;
  console.log( ` ${method} to ${originalUrl} at [${new Date().toISOString()}]`)
  next();
};



module.exports = server;

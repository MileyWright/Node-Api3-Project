const express = require('express');

const router = express.Router();
const userDb = require('./userDb');
router.user(express.json());

router.post('/', (req, res) => {
  // do your magic!
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  // do your magic!
});

router.get('/:id', (req, res) => {
  // do your magic!
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  const id = req.params.id;
  userDb.getById(id)
  .then(post => {
    if(!post) {
      res.status(404).json({error: 'The specified ID does not exist.'})
    } else {
      next();
    }
  })
}

function validateUser(req, res, next) {
  const data = req.body;
  if(!data){
    res.status(400).json({message: "missing user data."})
  } else if(!data.name){
    res.status(400).json({message: "missing required name field."})
  } else {
    next();
  }
}

function validatePost(req, res, next) {
  const data = req.body;
  if(!data){
    res.status(400).json({message: 'missing post data.'})
  } else if(!data.text){
    res.status(400).json({message: "missing required text field."})
  } else {
    next();
  }
}

module.exports = router;

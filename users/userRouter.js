const express = require('express');

const router = express.Router();
const userDb = require('./userDb');
router.user(express.json());

router.post('/', validateUser, (req, res) => {
  const data = req.body;
  userDb.insert(data)
    .then(user => {
      res.status(201).json({user})
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({errorMessage: "Could not post user data"})
    })
});

router.post('/:id/posts', validatePost, (req, res) => {
  const data = req.body;
  userDb.insert(data)
    .then(post => {
      res.status(201).json({post})
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({errorMessage: "Could not post data."})
    })
});

router.get('/', (req, res) => {
  userDb.get()
  .then(user => {
    res.status(200).json({user})
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({errorMessage: "Trouble accessing the users."})
  })
});

router.get('/:id', validateUserId, (req, res) => {
  const id = req.params.id;
  userDb.getById(id)
  .then( user => {
    res.status(200).json(user)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({errorMessage: "Could not retrieve specified ID"})
  })
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

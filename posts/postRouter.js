const express = require('express');

const router = express.Router();
const postDb = require('./postDb');
router.use(express.json());

//    /api/posts
router.get('/', (req, res) => {
  postDb.get()
  .then(post => {
    res.status(200).json(post)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ errorMessage: "Trouble accessing the posts"})
  })
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  postDb.getById(id)
  .then(post => {
    if(!post){
      res.status(404).json({error: 'The specified ID does not exist'})
    } else {
      res.status(200).json({post})
    }
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({errorMessage: "Could not retrieve specified ID"})
  })
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

// custom middleware

function validatePostId(req, res, next) {
  const id = req
}

module.exports = router;

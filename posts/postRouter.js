const express = require('express');

const router = express.Router();
const postDb = require('./postDb');
router.use(express.json());

router.get('/', (req, res) => {
  postDb.find()
  .then(post => {
    res.status(200).json(post)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ errorMessage: "Trouble accessing the posts"})
  })
});

router.get('/:id', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
}

module.exports = router;

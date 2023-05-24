const express = require('express');

const router = express.Router();

const {
  create,
  read,
  remove
} = require('../controller/index');

// require the middlewares and callback functions from the controller directory

// Create POST route to create an expense
router.post('/todo/create', create);

// on post request to above link, will link to create async function

router.get('/todos', read);

// on get request to above link, will link to read async function

router.delete('/todo/:id', remove);

// on delete request to above link, will link to remove async function

module.exports = router;

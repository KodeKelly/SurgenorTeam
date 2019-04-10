const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const { ensureAuthenticated } = require('../helpers/auth');

// Salesmain Index Page
router.post('/', ensureAuthenticated, (req, res) => {
  res.render('/');
});

// Salesmain Index Page
router.get('/', ensureAuthenticated, (req, res) => {
  res.render('salesmain/index');
});

module.exports = router;

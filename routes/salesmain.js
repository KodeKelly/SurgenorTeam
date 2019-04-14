const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const { ensureAuthenticated } = require('../helpers/auth');

// Load User Model
require('../models/User');
const User = mongoose.model('users');

// Load DailyTasks Model
//require('../models/DailyTasks');
//const DailyTasks = mongoose.model('dailyTasks');

// // Salesmain Index Page
// router.post('/', ensureAuthenticated, (req, res) => {
//   res.render('/');
// });

// // Salesmain Index Page
// router.get('/', ensureAuthenticated, (req, res) => {
//   res.render('salesmain/index');
// });

// Salesmain Index Page
router.get('/', ensureAuthenticated, (req, res) => {
  User.find({ email: req.user.id }).then(users => {
    res.render('salesmain/index', {
      users: users
    });
  });
});

module.exports = router;

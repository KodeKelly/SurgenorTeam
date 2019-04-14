const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const { ensureAuthenticated } = require('../helpers/auth');

// Load User Model
require('../models/User');
const User = mongoose.model('users');

// SuperAdmin Index Page
router.get('/', ensureAuthenticated, (req, res) => {
  User.find({ email: req.user.id }).then(users => {
    res.render('./superadmin/index', {
      users: users
    });
  });
});

module.exports = router;

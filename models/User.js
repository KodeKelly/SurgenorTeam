const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  user: {
    type: String
    //required: true
  },
  superUser: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    default: false
  },
  tasks: {
    type: Array,
    default: false
  }
});

mongoose.model('users', UserSchema);

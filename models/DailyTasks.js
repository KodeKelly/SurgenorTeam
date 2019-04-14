const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  task1: {
    type: String,
    default: false
  }
});

mongoose.model('dailyTasks', UserSchema);

if (process.env.NODE_ENV === 'production') {
  module.exports = {
    mongoURI:
      'mongodb+srv://AlphaUser:Tree627%2DRock36@surgenorteam-wdw0t.mongodb.net/test?retryWrites=true'
  };
} else {
  module.exports = { mongoURI: 'mongodb://localhost/surgenorteam-dev' };
}

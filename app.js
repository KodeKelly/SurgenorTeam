const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

//Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Index Route
app.get('/', (req, res) => {
  res.render('index');
});



const port = 5000;

app.listen(port, () =>{
  console.log(`Listening on port: ${port}.`);
});


var express = require('express');
var app = express();

app.set('view engine', 'ejs');

//public
const path = require('path');
app.use('/public', express.static(path.join(__dirname, 'public')));

//home
app.get('/', function(req, res) {
    res.render('matriz/matriz.ejs'); 
});

//server
app.listen(3000, function() {
    console.log('Servidor rodando na porta 3000')
});

// constroi com npm run build
//roda com "node index.js"
//npm run start
//npx nodemon --exec npm run start   

//npm run roda



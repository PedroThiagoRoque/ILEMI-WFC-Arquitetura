const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const port = 3000;

//config basica
app.use('/public', express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


// ROTAS
///////////////// editor
const editorRouter = require('./routes/editor');
app.use('/editor', editorRouter);

///////////////// home
app.get('/', (req, res) => {
    res.render('home/home');
});
//////////////// exportador
const exportRouter = require('./routes/exportador');
app.use('/exportador', exportRouter);

//roda server
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
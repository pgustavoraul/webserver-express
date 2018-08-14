const express = require('express')
const app = express()
const hbs = require('hbs');

require('./hbs/helpers')

app.use(express.static(__dirname + '/public'));

//express hbs engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


app.get('/', function(req, res) {
    res.render('home', {
        nombre: 'gustavo'
    });
})

app.get('/about', function(req, res) {
    res.render('about');
})

app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
})
const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

//Crear un midelware que es una pagina por defecto para cargar
app.use(express.static(__dirname + '/public'));

//Express HBS
hbs.registerPartials(__dirname + '/views/partials');
//Para renderisar la vista
app.set('view engine', 'hbs');



app.get('/', function(req, res) {

    res.render('home.hbs', {
        nombre: 'emily daniela'
    });
})

app.get('/about', function(req, res) {

    res.render('about.hbs');
})

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});
const path = require('path');
const express = require('express');
const app = express();

app.use(express.static('public'))
app.get('/', function(req, res) {

    res.sendFile(path.join(__dirname + '/index.html'));

})

app.get('/index.html', function(req, res) {

    res.sendFile(path.join(__dirname + '/index.html'));

})

app.get('/login.html', function(req, res) {

    res.sendFile(path.join(__dirname + '/login.html'));
})

app.get('/productos.html', function(req, res) {

    res.sendFile(path.join(__dirname + '/productos.html'));

})

app.get('/registro.html', function(req, res) {

    res.sendFile(path.join(__dirname + '/registro.html'));

})

app.get('/pago_tarjeta.html', function(req, res) {

    res.sendFile(path.join(__dirname + '/pago_tarjeta.html'));

})


app.listen(3005);

console.log('El servidor se esta ejecutando en url: http://127.0.0.1:3005');
const express = require('express');

const rotas = express.Router();

rotas.get('/', (req, res) => {
    console.log('get')
});
rotas.post('/cadastro', (req, res) => {
    console.log(req.body)
    res.send(req.body)
});

module.exports = rotas;

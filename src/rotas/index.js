const express = require('express');

const rotas = express.Router();

const instrutores = require('./instrutores')
rotas.use('/intrutor', instrutores)


module.exports = rotas;
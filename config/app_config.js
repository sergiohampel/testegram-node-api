var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cors = require('cors');

// remove o X-Powered-By -> Express do cabeçalho
app.disable('x-powered-by');

// utiliza o cors para cross-domain
app.use(cors());

// utiliza o bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

module.exports = app;
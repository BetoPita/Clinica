const express = require('express');
const app = express();

app.use(require('./R_cliente'));
app.use(require('./R_login'));
app.use(require('./R_usuarios'));

module.exports = app;
const express = require('express');
const Express = express();
const bodyParser   = require('body-parser');

Express.use(bodyParser.json())

module.exports = express();

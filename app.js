const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { connect } = require('./db/db');
const { routePaths } = require('./constants/constants');

/* Create and Config Express App */
dotenv.config();
const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(cors());

/* Connect to DB */
connect();

/* Routing */
app.use(routePaths.seed, require('./routes/seed'));

module.exports = app;

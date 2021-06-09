const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const wordsList = require('./API/wordsList');
require('dotenv').config();

const { notFound, errorHandler } = require('./middlewares');

const app = express();

app.use(morgan('common'));

app.use(helmet());

// client app url
app.use(cors({
  origin: process.env.CORS_ORIGIN,
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the number-to-words converters API!',
  });
});

app.use('/api/wordsList', wordsList);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
